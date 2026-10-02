// Wingit pre-launch page — progressive enhancement only. The page reads fully without JS.
(() => {
  const config = window.WINGIT_CONFIG || {};
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Header state + mobile nav ---------- */
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-nav-toggle]");
  const menu = document.querySelector("[data-nav-menu]");

  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const setMenu = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    menu.classList.toggle("is-open", open);
  };
  toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") { setMenu(false); toggle.focus(); }
  });
  window.matchMedia("(min-width: 960px)").addEventListener("change", () => setMenu(false));

  /* ---------- Scroll reveal + doodle drawing ---------- */
  const animated = document.querySelectorAll(".reveal, .draw, .draw-path");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    animated.forEach((el) => el.classList.add("is-in"));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    animated.forEach((el) => io.observe(el));
  }

  /* ---------- Current-section highlighting in nav ---------- */
  const navLinks = [...document.querySelectorAll(".nav__links a")];
  // Observe every section so the highlight clears over sections that aren't in the nav.
  const sections = document.querySelectorAll("main > section[id]");
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((a) => a.setAttribute("aria-current", String(a.getAttribute("href") === `#${entry.target.id}`)));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => spy.observe(s));
  }

  /* ---------- Five faces: tap support (hover/focus handled in CSS) ---------- */
  document.querySelectorAll("[data-five-faces] .face").forEach((btn) => {
    btn.addEventListener("click", () => {
      const li = btn.closest("li");
      const wasActive = li.classList.contains("is-active");
      li.parentElement.querySelectorAll("li").forEach((x) => x.classList.remove("is-active"));
      if (!wasActive) li.classList.add("is-active");
    });
  });

  /* ---------- Waitlist forms ---------- */
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const AREA_LABELS = { delhi: "Delhi", gurugram: "Gurugram", noida: "Noida", faridabad: "Faridabad", ghaziabad: "Ghaziabad" };

  const escapeHtml = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  async function submitSignup(payload) {
    if (!config.waitlistEndpoint) throw Object.assign(new Error("not-configured"), { kind: "config" });
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 10000);
    try {
      const res = await fetch(config.waitlistEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: ctrl.signal,
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw Object.assign(new Error(body.error || `HTTP ${res.status}`), { kind: res.status === 422 ? "validation" : "server", field: body.field });
      return body.status === "exists" ? "exists" : "created";
    } catch (err) {
      if (err.kind) throw err;
      throw Object.assign(err, { kind: "network" });
    } finally {
      clearTimeout(timer);
    }
  }

  document.querySelectorAll("[data-waitlist-form]").forEach((form) => {
    const email = form.querySelector('input[name="email"]');
    const msg = form.querySelector("[data-form-msg]");
    const fieldErr = form.querySelector('[data-field-err="email"]');
    const button = form.querySelector('button[type="submit"]');
    const label = button.querySelector(".btn__label");
    const defaultMsg = msg.textContent;
    const defaultLabel = label.textContent;

    const setMessage = (text, tone, html = false) => {
      msg[html ? "innerHTML" : "textContent"] = text;
      if (tone) msg.dataset.tone = tone; else delete msg.dataset.tone;
    };
    const setEmailError = (text) => {
      email.setAttribute("aria-invalid", text ? "true" : "false");
      form.dataset.state = text ? "error" : "";
      if (fieldErr) fieldErr.textContent = text;
      else setMessage(text || defaultMsg, text ? "error" : null);
    };

    const validate = () => {
      const v = email.value.trim();
      if (!v) return "Please enter your email so we can tell you when we launch.";
      if (!EMAIL_RE.test(v)) return "That email doesn’t look quite right — check for typos?";
      return "";
    };

    email.addEventListener("input", () => { if (email.getAttribute("aria-invalid") === "true" && !validate()) setEmailError(""); });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const error = validate();
      if (error) { setEmailError(error); email.focus(); return; }
      setEmailError("");

      const data = new FormData(form);
      const payload = {
        email: email.value.trim(),
        name: (data.get("name") || "").toString().trim(),
        area: (data.get("area") || "").toString(),
        interests: data.getAll("interests"),
        company: (data.get("company") || "").toString(),
        source: form.dataset.source || "",
      };

      button.setAttribute("aria-busy", "true");
      label.textContent = "Adding you…";
      if (fieldErr) setMessage("", null);

      try {
        const result = await submitSignup(payload);
        const safeEmail = escapeHtml(payload.email);
        const where = AREA_LABELS[payload.area] ? ` in ${AREA_LABELS[payload.area]}` : " in your part of NCR";
        const name = payload.name ? `, ${escapeHtml(payload.name)}` : "";
        if (result === "exists") {
          setMessage(`You’re already on the list${name} — we’ll write to <b>${safeEmail}</b> when Wingit opens${where}.`, "success", true);
        } else {
          setMessage(`You’re on the list${name}. We’ll write to <b>${safeEmail}</b> when Wingit opens${where}.`, "success", true);
        }
        form.dataset.state = "success";
        if (!fieldErr) { email.value = ""; email.blur(); }
      } catch (err) {
        if (err.kind === "validation") {
          setEmailError(err.message);
          email.focus();
        } else {
          const ig = config.instagramUrl ? ` Or follow <a href="${config.instagramUrl}" target="_blank" rel="noopener">@wingitclubapp</a> for launch news.` : "";
          const lead = err.kind === "network"
            ? "We couldn’t reach our list just now — check your connection and try again."
            : "Something went wrong on our side and you haven’t been added yet. Please try again in a moment.";
          setMessage(lead + ig, "error", true);
          form.dataset.state = "error";
        }
      } finally {
        button.removeAttribute("aria-busy");
        label.textContent = defaultLabel;
      }
    });
  });
})();
