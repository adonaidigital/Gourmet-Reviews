const cacheID = 'mws-app-1';

let cacheFiles = [
    '/',
    '/restaurant.html',
    '/css/styles.css',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
    '/js/main.js',
    '/js/dbhelper.js',
    '/js/restaurant_info.js'
];
 // call install event
self.addEventListener('install', e => {
  // console.log('Service Worker: Installed');
 });

 // call activate event
self.addEventListener('activate', e => {
  // console.log('Service Worker: Activated');
  // remove unwanted caches
  e.waitUntil(
    caches.keys()
    .then(cacheNames => {
      return Promise.all(
       cacheNames.filter(cache =>{
         return cacheNames.startsWith('restaurant-') &&
        cache != cacheID;
        })
    .map(cacheNames => {
          return caches.delete(cacheNames);
        })
      );
    })
  );
});
 // call fetch event
self.addEventListener('fetch', e => {
  // console.log('Service Worker: Fetching');
   e.respondWith(
      fetch(e.request)
      .then(res => {
        // make clone of response
        const cloneRes = res.clone();
        // open cache
        caches.open(cacheID)
              .then(cache => {
            // add response to cache
            cache.put(e.request, cloneRes);
          });
        return res;
      })
      .catch(err => caches.match(e.request)
      .then(res => res)) 
  );
});

/*Referenced
Doug Brown - walkthrough on Restaurant Reviews app(https://www.youtube.com/watch?v=92dtrNU1GQc)
Travery Media -on Service worker (https://www.youtube.com/watch?v=ksXwaWHCW6k&feature=youtu.be)
*/