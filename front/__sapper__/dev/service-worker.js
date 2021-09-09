(function () {
	'use strict';

	// This file is generated by Sapper — do not edit it!
	const timestamp = 1631217729502;

	const files = [
		"service-worker-index.html",
		"favicon.png",
		"globa2l.css",
		"global.css",
		"index.css",
		"logo-192.png",
		"logo-512.png",
		"logo.png",
		"logo.svg",
		"manifest.json",
		"tailwind.css",
		"tailwind2.css"
	];

	const shell = [
		"client/client.2b1aeed9.js",
		"client/index.cjs.ceab3d31.js",
		"client/index.cjs.67aadbca.js",
		"client/index.esm.2a805d8a.js",
		"client/index.340c7714.js",
		"client/TextField.c4023c7d.js",
		"client/NewBot.7ff7eca5.js",
		"client/botstatuspage.3a7427f1.js",
		"client/instruction.65bd17e4.js",
		"client/settings.be414f67.js",
		"client/newbot.d97c5834.js",
		"client/about.f0161763.js",
		"client/index.2f099a59.js",
		"client/[slug].287dbc15.js",
		"client/sapper-dev-client.1e7a4a5e.js"
	];

	const ASSETS = `cache${timestamp}`;

	// `shell` is an array of all the files generated by the bundler,
	// `files` is an array of everything in the `static` directory
	const to_cache = shell.concat(files);
	const cached = new Set(to_cache);

	self.addEventListener("install", (event) => {
	  event.waitUntil(
	    caches
	      .open(ASSETS)
	      .then((cache) => cache.addAll(to_cache))
	      .then(() => {
	        self.skipWaiting();
	      })
	  );
	});

	self.addEventListener("activate", (event) => {
	  event.waitUntil(
	    caches.keys().then(async (keys) => {
	      // delete old caches
	      for (const key of keys) {
	        if (key !== ASSETS) await caches.delete(key);
	      }

	      self.clients.claim();
	    })
	  );
	});

	self.addEventListener("fetch", (event) => {
	  if (event.request.method !== "GET" || event.request.headers.has("range"))
	    return;

	  const url = new URL(event.request.url);

	  // don't try to handle e.g. data: URIs
	  if (!url.protocol.startsWith("http")) return;

	  // ignore dev server requests
	  if (
	    url.hostname === self.location.hostname &&
	    url.port !== self.location.port
	  )
	    return;

	  // always serve static files and bundler-generated assets from cache
	  if (url.host === self.location.host && cached.has(url.pathname)) {
	    event.respondWith(caches.match(event.request));
	    return;
	  }

	  // for pages, you might want to serve a shell `service-worker-index.html` file,
	  // which Sapper has generated for you. It's not right for every
	  // app, but if it's right for yours then uncomment this section
	  /*
		if (url.origin === self.origin && routes.find(route => route.pattern.test(url.pathname))) {
			event.respondWith(caches.match('/service-worker-index.html'));
			return;
		}
		*/

	  if (event.request.cache === "only-if-cached") return;

	  // for everything else, try the network first, falling back to
	  // cache if the user is offline. (If the pages never change, you
	  // might prefer a cache-first approach to a network-first one.)
	  event.respondWith(
	    caches.open(`offline${timestamp}`).then(async (cache) => {
	      try {
	        const response = await fetch(event.request);
	        cache.put(event.request, response.clone());
	        return response;
	      } catch (err) {
	        const response = await cache.match(event.request);
	        if (response) return response;

	        throw err;
	      }
	    })
	  );
	});

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9zZXJ2aWNlLXdvcmtlci5qcyIsIi4uLy4uL3NyYy9zZXJ2aWNlLXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhXG5leHBvcnQgY29uc3QgdGltZXN0YW1wID0gMTYzMTIxNzcyOTUwMjtcblxuZXhwb3J0IGNvbnN0IGZpbGVzID0gW1xuXHRcInNlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWxcIixcblx0XCJmYXZpY29uLnBuZ1wiLFxuXHRcImdsb2JhMmwuY3NzXCIsXG5cdFwiZ2xvYmFsLmNzc1wiLFxuXHRcImluZGV4LmNzc1wiLFxuXHRcImxvZ28tMTkyLnBuZ1wiLFxuXHRcImxvZ28tNTEyLnBuZ1wiLFxuXHRcImxvZ28ucG5nXCIsXG5cdFwibG9nby5zdmdcIixcblx0XCJtYW5pZmVzdC5qc29uXCIsXG5cdFwidGFpbHdpbmQuY3NzXCIsXG5cdFwidGFpbHdpbmQyLmNzc1wiXG5dO1xuZXhwb3J0IHsgZmlsZXMgYXMgYXNzZXRzIH07IC8vIGxlZ2FjeVxuXG5leHBvcnQgY29uc3Qgc2hlbGwgPSBbXG5cdFwiY2xpZW50L2NsaWVudC4yYjFhZWVkOS5qc1wiLFxuXHRcImNsaWVudC9pbmRleC5janMuY2VhYjNkMzEuanNcIixcblx0XCJjbGllbnQvaW5kZXguY2pzLjY3YWFkYmNhLmpzXCIsXG5cdFwiY2xpZW50L2luZGV4LmVzbS4yYTgwNWQ4YS5qc1wiLFxuXHRcImNsaWVudC9pbmRleC4zNDBjNzcxNC5qc1wiLFxuXHRcImNsaWVudC9UZXh0RmllbGQuYzQwMjNjN2QuanNcIixcblx0XCJjbGllbnQvTmV3Qm90LjdmZjdlY2E1LmpzXCIsXG5cdFwiY2xpZW50L2JvdHN0YXR1c3BhZ2UuM2E3NDI3ZjEuanNcIixcblx0XCJjbGllbnQvaW5zdHJ1Y3Rpb24uNjViZDE3ZTQuanNcIixcblx0XCJjbGllbnQvc2V0dGluZ3MuYmU0MTRmNjcuanNcIixcblx0XCJjbGllbnQvbmV3Ym90LmQ5N2M1ODM0LmpzXCIsXG5cdFwiY2xpZW50L2Fib3V0LmYwMTYxNzYzLmpzXCIsXG5cdFwiY2xpZW50L2luZGV4LjJmMDk5YTU5LmpzXCIsXG5cdFwiY2xpZW50L1tzbHVnXS4yODdkYmMxNS5qc1wiLFxuXHRcImNsaWVudC9zYXBwZXItZGV2LWNsaWVudC4xZTdhNGE1ZS5qc1wiXG5dO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW1xuXHR7IHBhdHRlcm46IC9eXFwvJC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2JvdHN0YXR1c3BhZ2VcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2luc3RydWN0aW9uXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9zZXR0aW5nc1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvbmV3Ym90XFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9hYm91dFxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvYmxvZ1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvYmxvZ1xcLyhbXlxcL10rPylcXC8/JC8gfVxuXTsiLCJpbXBvcnQgeyB0aW1lc3RhbXAsIGZpbGVzLCBzaGVsbCwgcm91dGVzIH0gZnJvbSBcIkBzYXBwZXIvc2VydmljZS13b3JrZXJcIjtcblxuY29uc3QgQVNTRVRTID0gYGNhY2hlJHt0aW1lc3RhbXB9YDtcblxuLy8gYHNoZWxsYCBpcyBhbiBhcnJheSBvZiBhbGwgdGhlIGZpbGVzIGdlbmVyYXRlZCBieSB0aGUgYnVuZGxlcixcbi8vIGBmaWxlc2AgaXMgYW4gYXJyYXkgb2YgZXZlcnl0aGluZyBpbiB0aGUgYHN0YXRpY2AgZGlyZWN0b3J5XG5jb25zdCB0b19jYWNoZSA9IHNoZWxsLmNvbmNhdChmaWxlcyk7XG5jb25zdCBjYWNoZWQgPSBuZXcgU2V0KHRvX2NhY2hlKTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKFwiaW5zdGFsbFwiLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQud2FpdFVudGlsKFxuICAgIGNhY2hlc1xuICAgICAgLm9wZW4oQVNTRVRTKVxuICAgICAgLnRoZW4oKGNhY2hlKSA9PiBjYWNoZS5hZGRBbGwodG9fY2FjaGUpKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBzZWxmLnNraXBXYWl0aW5nKCk7XG4gICAgICB9KVxuICApO1xufSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcihcImFjdGl2YXRlXCIsIChldmVudCkgPT4ge1xuICBldmVudC53YWl0VW50aWwoXG4gICAgY2FjaGVzLmtleXMoKS50aGVuKGFzeW5jIChrZXlzKSA9PiB7XG4gICAgICAvLyBkZWxldGUgb2xkIGNhY2hlc1xuICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICBpZiAoa2V5ICE9PSBBU1NFVFMpIGF3YWl0IGNhY2hlcy5kZWxldGUoa2V5KTtcbiAgICAgIH1cblxuICAgICAgc2VsZi5jbGllbnRzLmNsYWltKCk7XG4gICAgfSlcbiAgKTtcbn0pO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJmZXRjaFwiLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnJlcXVlc3QubWV0aG9kICE9PSBcIkdFVFwiIHx8IGV2ZW50LnJlcXVlc3QuaGVhZGVycy5oYXMoXCJyYW5nZVwiKSlcbiAgICByZXR1cm47XG5cbiAgY29uc3QgdXJsID0gbmV3IFVSTChldmVudC5yZXF1ZXN0LnVybCk7XG5cbiAgLy8gZG9uJ3QgdHJ5IHRvIGhhbmRsZSBlLmcuIGRhdGE6IFVSSXNcbiAgaWYgKCF1cmwucHJvdG9jb2wuc3RhcnRzV2l0aChcImh0dHBcIikpIHJldHVybjtcblxuICAvLyBpZ25vcmUgZGV2IHNlcnZlciByZXF1ZXN0c1xuICBpZiAoXG4gICAgdXJsLmhvc3RuYW1lID09PSBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICYmXG4gICAgdXJsLnBvcnQgIT09IHNlbGYubG9jYXRpb24ucG9ydFxuICApXG4gICAgcmV0dXJuO1xuXG4gIC8vIGFsd2F5cyBzZXJ2ZSBzdGF0aWMgZmlsZXMgYW5kIGJ1bmRsZXItZ2VuZXJhdGVkIGFzc2V0cyBmcm9tIGNhY2hlXG4gIGlmICh1cmwuaG9zdCA9PT0gc2VsZi5sb2NhdGlvbi5ob3N0ICYmIGNhY2hlZC5oYXModXJsLnBhdGhuYW1lKSkge1xuICAgIGV2ZW50LnJlc3BvbmRXaXRoKGNhY2hlcy5tYXRjaChldmVudC5yZXF1ZXN0KSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gZm9yIHBhZ2VzLCB5b3UgbWlnaHQgd2FudCB0byBzZXJ2ZSBhIHNoZWxsIGBzZXJ2aWNlLXdvcmtlci1pbmRleC5odG1sYCBmaWxlLFxuICAvLyB3aGljaCBTYXBwZXIgaGFzIGdlbmVyYXRlZCBmb3IgeW91LiBJdCdzIG5vdCByaWdodCBmb3IgZXZlcnlcbiAgLy8gYXBwLCBidXQgaWYgaXQncyByaWdodCBmb3IgeW91cnMgdGhlbiB1bmNvbW1lbnQgdGhpcyBzZWN0aW9uXG4gIC8qXG5cdGlmICh1cmwub3JpZ2luID09PSBzZWxmLm9yaWdpbiAmJiByb3V0ZXMuZmluZChyb3V0ZSA9PiByb3V0ZS5wYXR0ZXJuLnRlc3QodXJsLnBhdGhuYW1lKSkpIHtcblx0XHRldmVudC5yZXNwb25kV2l0aChjYWNoZXMubWF0Y2goJy9zZXJ2aWNlLXdvcmtlci1pbmRleC5odG1sJykpO1xuXHRcdHJldHVybjtcblx0fVxuXHQqL1xuXG4gIGlmIChldmVudC5yZXF1ZXN0LmNhY2hlID09PSBcIm9ubHktaWYtY2FjaGVkXCIpIHJldHVybjtcblxuICAvLyBmb3IgZXZlcnl0aGluZyBlbHNlLCB0cnkgdGhlIG5ldHdvcmsgZmlyc3QsIGZhbGxpbmcgYmFjayB0b1xuICAvLyBjYWNoZSBpZiB0aGUgdXNlciBpcyBvZmZsaW5lLiAoSWYgdGhlIHBhZ2VzIG5ldmVyIGNoYW5nZSwgeW91XG4gIC8vIG1pZ2h0IHByZWZlciBhIGNhY2hlLWZpcnN0IGFwcHJvYWNoIHRvIGEgbmV0d29yay1maXJzdCBvbmUuKVxuICBldmVudC5yZXNwb25kV2l0aChcbiAgICBjYWNoZXMub3Blbihgb2ZmbGluZSR7dGltZXN0YW1wfWApLnRoZW4oYXN5bmMgKGNhY2hlKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGV2ZW50LnJlcXVlc3QpO1xuICAgICAgICBjYWNoZS5wdXQoZXZlbnQucmVxdWVzdCwgcmVzcG9uc2UuY2xvbmUoKSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNhY2hlLm1hdGNoKGV2ZW50LnJlcXVlc3QpO1xuICAgICAgICBpZiAocmVzcG9uc2UpIHJldHVybiByZXNwb25zZTtcblxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgfSlcbiAgKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztDQUFBO0NBQ08sTUFBTSxTQUFTLEdBQUcsYUFBYSxDQUFDO0FBQ3ZDO0NBQ08sTUFBTSxLQUFLLEdBQUc7Q0FDckIsQ0FBQywyQkFBMkI7Q0FDNUIsQ0FBQyxhQUFhO0NBQ2QsQ0FBQyxhQUFhO0NBQ2QsQ0FBQyxZQUFZO0NBQ2IsQ0FBQyxXQUFXO0NBQ1osQ0FBQyxjQUFjO0NBQ2YsQ0FBQyxjQUFjO0NBQ2YsQ0FBQyxVQUFVO0NBQ1gsQ0FBQyxVQUFVO0NBQ1gsQ0FBQyxlQUFlO0NBQ2hCLENBQUMsY0FBYztDQUNmLENBQUMsZUFBZTtDQUNoQixDQUFDLENBQUM7QUFFRjtDQUNPLE1BQU0sS0FBSyxHQUFHO0NBQ3JCLENBQUMsMkJBQTJCO0NBQzVCLENBQUMsOEJBQThCO0NBQy9CLENBQUMsOEJBQThCO0NBQy9CLENBQUMsOEJBQThCO0NBQy9CLENBQUMsMEJBQTBCO0NBQzNCLENBQUMsOEJBQThCO0NBQy9CLENBQUMsMkJBQTJCO0NBQzVCLENBQUMsa0NBQWtDO0NBQ25DLENBQUMsZ0NB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
