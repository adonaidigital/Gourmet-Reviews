  # The **Restaurant Reviews App** stage-1

This is a remake of an existing app to meet the the requirements for responsiveness, accessibility and service worker caching for offline viewing.
It is a project completed in partial fulfillment of the Front-End Web Developer Nanodegree Program at Udacity and part of the Grow With Google scholarship. 

 ## How to run the app

 * Download or clone the app from my [repository](https://github.com/adonaidigital/Gourmet-Reviews).
 * Go to [Mapbox](https://www.mapbox.com/) to get a token to replace `<your MAPBOX API KEY HERE>` in your main.js so you can view the maps.
 * In your terminal, check the version of Python you have: python -V.
 * For Python 2.x, start the server with python -m SimpleHTTPServer 8000 
 * For Python 3.x, start the server with python3 -m http.server 8000 
 * With your server running, visit the site: `http://localhost:8000`.

 ## App features

 * Responsive design: All page elements are fully responsive and displays on any modern device.
 
 * Accessibility: *alt* attributes are present and descriptive for images and *aria* attributes when semantic markup is not feasible.
 
 * Offline first approach: ServiceWorker was used cache the data for the website so that any page (including images) that has been visited is accessible offline.

  ## Dependencies

 * [Mapbox](https://www.mapbox.com/) NOTE: you need your own API key for the app.
 * [leafletjs](https://leafletjs.com/)
 * [Python](https://www.python.org/)
 * Other dependencies were links in the index.html file. 


