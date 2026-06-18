/* Crémaillère — service worker (Web Push) */
self.addEventListener('install', function (e) { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });

var PUSH_LAST = 'https://n8n-1zv1.srv1641932.hstgr.cloud/webhook/cremaillere-push-last';

self.addEventListener('push', function (event) {
  event.waitUntil((async function () {
    var title = 'Crémaillère';
    var body = 'Nouvelle activité';
    // Push sans payload : on récupère le dernier message côté serveur.
    try {
      if (event.data) {
        var p = null;
        try { p = event.data.json(); } catch (e) { p = null; }
        if (p && (p.title || p.body)) { title = p.title || title; body = p.body || body; }
        else { var t = event.data.text(); if (t) body = t; }
      } else {
        var r = await fetch(PUSH_LAST, { cache: 'no-store' });
        if (r && r.ok) { var d = await r.json(); title = d.title || title; body = d.body || body; }
      }
    } catch (e) {}
    await self.registration.showNotification(title, {
      body: body,
      icon: '/icon-192.png',
      badge: '/icon-192.png',
      tag: 'cremaillere',
      renotify: true,
      data: { url: '/?staff=1' }
    });
  })());
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  event.waitUntil((async function () {
    var url = (event.notification.data && event.notification.data.url) || '/';
    var all = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (var i = 0; i < all.length; i++) {
      var c = all[i];
      if ('focus' in c) { try { await c.focus(); } catch (e) {} if (c.navigate) { try { await c.navigate(url); } catch (e) {} } return; }
    }
    if (self.clients.openWindow) { await self.clients.openWindow(url); }
  })());
});
