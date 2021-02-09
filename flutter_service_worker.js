'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "e3e1e6de4359cf5ce9ad17d46278add9",
"manifest.json": "6da1eca942e2635336aef6c54486eaa5",
"version.json": "1915a074d608e735c5260b353c379224",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/assets/video.mp4": "bf0b48d8e7efad3e8bbd83c5243d12c7",
"assets/assets/music/01-disillusion.mp3": "dfd7d89451e16bcf07a946ee9ca87ab4",
"assets/assets/music/music.m4a": "fb5368c27f8faff07f78359697f31d86",
"assets/assets/json/en_description.json": "ebcbea91e629b18734c13915ddf6b957",
"assets/assets/files/chapter_one/notificationBroadcast.dart": "95ff181b3360dbf281e7e791bc680e5e",
"assets/assets/files/chapter_one/requestAccessToken.dart": "430d10e6c3006cb3c973f47b09e37111",
"assets/assets/files/chapter_one/buildPayload.dart": "8ef44a02d70b8315fc7195c6464e2718",
"assets/assets/files/chapter_two/nasa.dart": "7ef0aac1db70b0ae89d91daec1d7ca17",
"assets/assets/images/havenScreenshot.webp": "c9397a7257bc6aa04c08f5ad1f9ffe48",
"assets/assets/images/random.png": "b4a792a2e1c25870a11fb8c72b92bd24",
"assets/assets/images/havenScreenshot4.webp": "cfe9c93cdd6fd5c00cc290c85d1f2f8c",
"assets/assets/images/havenScreenshot3.webp": "36bf35daa5b242aa48a32ebe14f0552e",
"assets/assets/images/services.png": "e96f31524a0f36b33089dd4035434387",
"assets/assets/images/service.jpg": "69e7b3ef5911b9654f45eb4d482192e8",
"assets/assets/images/favicon.png": "e7e549bc75fd206305282f0132f3b7c6",
"assets/assets/images/portfolio.jpg": "e7a6e01f4968cbd1703eeb2627bcda65",
"assets/assets/images/portal_logo_black.png": "fc7b3c54fcfa63b7c27155ad56d08a82",
"assets/assets/images/introduction.jpg": "3d748de1c5c102ecaccda3318fa9ccb1",
"assets/assets/images/haven_logo.webp": "b875f72d9412539dbdc3d49c131ae509",
"assets/assets/images/learning.jpg": "e70700425d73243245cb1ef6f379927a",
"assets/assets/images/koreamania.png": "3e5139ea007b1b237899b4be87a4ea5e",
"assets/assets/images/havenScreenshot6.webp": "3a10ea42783d3e1f082b216c009e6a1b",
"assets/assets/images/havenScreenshot5.webp": "6b0e0426576f37e79826d1b58ca72244",
"assets/assets/images/background.jpeg": "3cb47bd075fc866ba2a393449419b5e6",
"assets/assets/images/team.jpg": "b1d4ccfe1d449bc9ad7a56eb4e5bbdba",
"assets/assets/images/whatsupdoctor.png": "7f3d67c9c5e46830a6ac42af651527ba",
"assets/assets/images/reviews.png": "9dd8fd4b986fb88979f082413adcfc55",
"assets/assets/images/lawless-lawyer-seo-ye-ji-4.jpg": "d39ccdb9b9acb4592ef084459a81a18b",
"assets/assets/images/havenScreenshot2.webp": "d1b34718e2576e9daafdd075e827721a",
"assets/assets/images/blog.jpg": "4077dd4067de3eb6414b3e71787a9274",
"assets/assets/images/reviews.jpg": "746cd662fd3a5d8864afa384008396f3",
"assets/assets/images/havenScreenshot7.webp": "1ff0e54d60783b9384f346ce8f7123d4",
"assets/assets/text/en_description.txt": "cd026a52116813c8f5cabedd33295d30",
"assets/assets/text/fr_description.txt": "0fce27134fd611b53f79cc78cb1778aa",
"assets/NOTICES": "97d094006aa45ce74b38d5015202fb3c",
"assets/AssetManifest.json": "7e3837a53acb275240446ea0c1f6592f",
"assets/fonts/ExtraIcons.ttf": "a4c53a1a1a3fdc09fced7b7177323a0e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/FontManifest.json": "d8339c980407602ad42c3b022ed259ef",
"index.html": "76da0e86e53a197cab16c75140bd38e2",
"/": "76da0e86e53a197cab16c75140bd38e2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
