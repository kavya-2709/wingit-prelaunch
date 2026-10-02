// Runtime configuration. Point waitlistEndpoint at the production signup API
// (CRM / email platform / serverless function). The bundled server.mjs serves
// /api/waitlist and stores signups in data/waitlist.json for local testing.
window.WINGIT_CONFIG = {
  waitlistEndpoint: "/api/waitlist",
  instagramUrl: "https://www.instagram.com/wingitclubapp/",
};
