const C='soi-corti-v2',F=['./','index.html','manifest.json','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim();});
// Có mạng: lấy bản mới nhất rồi cập nhật bộ nhớ đệm. Mất mạng: dùng bản đã lưu.
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(res=>{if(res.ok&&new URL(e.request.url).origin===location.origin){const cp=res.clone();caches.open(C).then(c=>c.put(e.request,cp)).catch(()=>{});}return res;}).catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html'))));});
