!function(){"use strict";const e=["client/index.cjs.23c4c388.js","client/index.cjs.05a75a85.js","client/index.2c3ae988.js","client/botstatuspage.bacfa21a.js","client/client.9c36a7dd.js","client/instruction.3109e0c4.js","client/settings.19a11a1b.js","client/TextField.583c4b2d.js","client/about.45b77588.js","client/index.0ec74dc0.js","client/[slug].dc45a3a4.js","client/newbot.c21547c1.js","client/index.esm.f950629d.js"].concat(["service-worker-index.html","favicon.png","global.css","global0.css","index.css","logo-192.png","logo-512.png","logo.png","logo.svg","manifest.json","tailwind.css","tailwind2.css"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1632602490607").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1632602490607"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1632602490607").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const c=await t.match(e.request);if(c)return c;throw s}}))))})}();
