// Wingit pre-launch site — zero-dependency dev/prototype server.
// Serves ./site and accepts waitlist signups at POST /api/waitlist,
// persisting them to ./data/waitlist.json. Swap the handler for a real
// provider (CRM / ESP / database) before production — see DESIGN_RATIONALE.md §H.

import { createServer } from "node:http";
import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import { extname, join, normalize, resolve } from "node:path";

const PORT = Number(process.env.PORT) || 4173;
const ROOT = resolve("site");
const DATA_DIR = resolve("data");
const DATA_FILE = join(DATA_DIR, "waitlist.json");
const MAX_BODY = 4 * 1024;

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
  ".json": "application/json",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const AREAS = new Set(["", "delhi", "gurugram", "noida", "faridabad", "ghaziabad", "elsewhere"]);
const INTERESTS = new Set(["makeup", "skincare", "fragrance"]);

const send = (res, code, body, headers = {}) => {
  res.writeHead(code, { "Content-Type": "application/json", ...headers });
  res.end(JSON.stringify(body));
};

async function readList() {
  try {
    return JSON.parse(await readFile(DATA_FILE, "utf8"));
  } catch {
    return [];
  }
}

// Serialise writes so concurrent signups can't clobber each other.
let queue = Promise.resolve();

async function handleWaitlist(req, res) {
  let raw = "";
  for await (const chunk of req) {
    raw += chunk;
    if (raw.length > MAX_BODY) return send(res, 413, { error: "Request too large." });
  }
  let input;
  try {
    input = JSON.parse(raw || "{}");
  } catch {
    return send(res, 400, { error: "We couldn't read that request." });
  }

  // Honeypot: real people never fill this hidden field.
  if (input.company) return send(res, 200, { status: "created" });

  const email = String(input.email || "").trim().toLowerCase();
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return send(res, 422, { error: "Please enter a valid email address.", field: "email" });
  }
  const area = String(input.area || "");
  const interests = Array.isArray(input.interests) ? input.interests.filter((i) => INTERESTS.has(i)) : [];
  const name = String(input.name || "").trim().slice(0, 80);

  const result = await (queue = queue.then(async () => {
    const list = await readList();
    if (list.some((e) => e.email === email)) return "exists";
    list.push({
      email,
      name,
      area: AREAS.has(area) ? area : "",
      interests,
      source: String(input.source || "").slice(0, 20),
      createdAt: new Date().toISOString(),
    });
    await mkdir(DATA_DIR, { recursive: true });
    await writeFile(DATA_FILE, JSON.stringify(list, null, 2));
    return "created";
  }));

  send(res, result === "created" ? 201 : 200, { status: result });
}

async function serveStatic(req, res) {
  const url = new URL(req.url, "http://localhost");
  let path = normalize(decodeURIComponent(url.pathname));
  if (path.endsWith("/") || path.endsWith("\\")) path = join(path, "index.html");
  const file = join(ROOT, path);
  if (!file.startsWith(ROOT)) return send(res, 403, { error: "Forbidden" });
  try {
    if (!(await stat(file)).isFile()) throw new Error();
    const type = TYPES[extname(file)] || "application/octet-stream";
    const cache = /\.(woff2|webp|png)$/.test(file) ? "public, max-age=604800" : "no-cache";
    res.writeHead(200, { "Content-Type": type, "Cache-Control": cache });
    res.end(await readFile(file));
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
  }
}

createServer((req, res) => {
  if (req.url.startsWith("/api/waitlist")) {
    if (req.method !== "POST") return send(res, 405, { error: "Method not allowed" }, { Allow: "POST" });
    return handleWaitlist(req, res).catch(() => send(res, 500, { error: "Something went wrong on our side." }));
  }
  if (req.method !== "GET" && req.method !== "HEAD") return send(res, 405, { error: "Method not allowed" });
  serveStatic(req, res);
}).listen(PORT, () => console.log(`Wingit preview → http://localhost:${PORT}`));
