const cacheFile = 'mws-app-1';
 // call install event
self.addEventListener('install', e => {
  console.log('Service Worker: Installed');
});
 // call activate event
self.addEventListener('activate', e => {
  console.log('Service Worker: Activated');
  
  // remove unwanted caches
  e.waitUntil(
    caches.keys().then(cacheFiles => {
      return Promise.all(
        cacheFiles.map(cache => {
          if(cache != cacheFile) {
            console.log('Serice Worker: Clearing old cache')
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
 // call fetch event
self.addEventListener('fetch', e => {
  console.log('Service Worker: Fetching');
   e.respondWith(
    fetch(e.request)
      .then(res => {
        // make clone of response
        const cloneRes = res.clone();
        // open cache
        caches.open(cacheFile).then(cache => {
            // add response to cache
            cache.put(e.request, cloneRes);
          });
        return res;
      }).catch(err => caches.match(e.request).then(res => res))
  );
});