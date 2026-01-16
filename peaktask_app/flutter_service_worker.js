'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "40d3047919248eae6b4d5cff65c564db",
"version.json": "d2d59b6b4d9f62c42473bb897c3f7445",
"index.html": "da7eb9d74a2ace2f8bac329649b1b760",
"/": "da7eb9d74a2ace2f8bac329649b1b760",
"main.dart.js": "f9085c82d6095af1e9583a56470d6077",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "440938d9a48bd3a14ce86bd2da572f7f",
"assets/AssetManifest.json": "e4fa7aca5a4f6723b1f4cca7332dc048",
"assets/NOTICES": "8399b18182b550106e894eff2fe70289",
"assets/FontManifest.json": "ff9c7dd18751d2f4067546d6cbe9eb8f",
"assets/AssetManifest.bin.json": "1ac2c7ffda56c805b3bbcf5fe480c202",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4f11b9e25e17c8442e130a0487f35cd5",
"assets/fonts/MaterialIcons-Regular.otf": "b34f061cdb8d362cf7816651d7aec8b6",
"assets/assets/images/elevations/sea_stacks_superior.png": "e16c7afbbb6872e584f05cc0047f0edf",
"assets/assets/images/elevations/alpine_peaks.png": "d61208c1185ad9fc75840756eec16258",
"assets/assets/images/elevations/rock_gibraltar.png": "118c4ad441c3c79d0d5c934065e59908",
"assets/assets/images/elevations/granite_domes.png": "9f6bbbdc48010c7f30b1519f8010ce79",
"assets/assets/images/elevations/zhangjiajie_china.png": "2ea9afd33d60910ecd9ea2c6a7477355",
"assets/assets/images/elevations/uluru_australia.png": "7625eeea9444cb5363b918441eb638ca",
"assets/assets/images/elevations/riverbank_bluffs.png": "db8f6ef53b2cec0a9438227cf04d4f79",
"assets/assets/images/elevations/inselberg_peaks.png": "c53000d594850b83baa7ef1630613ec7",
"assets/assets/images/elevations/meteor_crater_rim.png": "8ebb55d1297b003c530734839e3fd1c1",
"assets/assets/images/elevations/german_mountains.png": "b2213079038e509eb92a31c97d10d657",
"assets/assets/images/elevations/volcanic_cones.png": "2b541deb7b181ca83cfd370439c70e4f",
"assets/assets/images/elevations/alps_foothills.png": "08869d178a5b195cdabd76945da75d30",
"assets/assets/images/elevations/ben_nevis.png": "ed67184a4b8f2cb270f61b5b1178cf89",
"assets/assets/images/elevations/sugarloaf_mountain.png": "67c0c484da2fc213b407d99ee675f3b4",
"assets/assets/images/elevations/termite_mounds_okavango.png": "877ed690f633c7d9dd2dd33f660a817a",
"assets/assets/images/elevations/limestone_karsts.png": "b81b060c411bb9f11681d637cfe42f0c",
"assets/assets/images/elevations/sandstone_buttes.png": "f383aefb4146e20522c0203145713be0",
"assets/assets/images/elevations/mount_everest.png": "539e8cc0343ab3ca20f033bad81cb938",
"assets/assets/images/elevations/forest_floor_ridges.png": "f5ec07ed809a88c7670dd7d5334eccba",
"assets/assets/images/elevations/arches_park_utah.png": "b5f5b3c747d574ae07a9f0bca1a16b47",
"assets/assets/images/elevations/crater_rim_edges.png": "91af91621d30dbcfe32da3eab38d6501",
"assets/assets/images/elevations/limestone_railay.png": "efde24153bd6375e6696c964ec4c0b67",
"assets/assets/images/elevations/iceland_gorge.png": "e62d3f99499298d9d2d62383a0eb900a",
"assets/assets/images/elevations/coastal_sand_dunes.png": "cd6c91ab0e64783d654784f9866d4e7c",
"assets/assets/images/elevations/escarpment_faces.png": "8a73342905b0edb6229b0a50cd261e8b",
"assets/assets/images/elevations/dover_cliffs.png": "94bb35e89461e591730cebeeceefa424",
"assets/assets/images/elevations/agricultural_berms.png": "8d96e523284290ce8a9498009756bebb",
"assets/assets/images/elevations/mesa_plateaus.png": "2f13d8c1e9f9f1fd4c4f8fb722a4079b",
"assets/assets/images/elevations/namibia_dunes.png": "ce3cf6544b0dd305897fab09504fbc7b",
"assets/assets/images/elevations/rugen_chalk_cliffs.png": "c7882b8eb3dee0a6fbe6faabaa79d982",
"assets/assets/images/peak_watermark.png": "6cb145efc61006c40b4b48f483133595",
"assets/assets/fonts/SF-Pro-Display-Regular.otf": "f4245a5167ad609c4ba2d0850d553bd2",
"assets/assets/fonts/SF-Pro-Display-Bold.otf": "94348d7ee70c258261a757b66596c4f9",
"assets/assets/fonts/SF-Pro-Text-Regular.otf": "a07152f3f0c03589a75b218b2c6536cb",
"assets/assets/fonts/SF-Pro-Display-Black.otf": "6434254b4301838aed2b0a8428a52dec",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
