'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/refs/heads/master": "e078d9e6c11c16d5b64b6511d0fc94b3",
".git/refs/remotes/origin/master": "e078d9e6c11c16d5b64b6511d0fc94b3",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/config": "a98490be5795e6725f8b8436b5cf260a",
".git/objects/68/45349802b6593d5f618221e11af0275300eaaf": "7f3cf9f2afbaec8bddc239df68334bb1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/2a/3fdd6c788b57d8f07b7f138f0c402b6a7aff7f": "8fc2c36f4bddd4d7c12c1e69096b1328",
".git/objects/29/043a7e721fa5ac07b0e449a20379521a581ff7": "6c4a670479e2f62913a47b184b0da294",
".git/objects/c0/8d482c956e40a1c933d542392e29811203b347": "1abae353d9e5108ca132cd7d6d73aacb",
".git/objects/fd/8eb14ec44de0d2b9f0685d1685ff7ecfaf1d82": "73d1f654758e757aa7587ac48f633be9",
".git/objects/ca/dcc7336125559e9a856d81f6e5059e4e62f169": "506098f354e1143f9e44eb907b529f5e",
".git/objects/72/0e4470635a9e081723db3257e87a7f47e7c20d": "00e75bde67b3c81ac2285b14c8091e2f",
".git/index": "f15cfe6ab5d9d082ceb8c2161dd698a2",
".git/logs/refs/heads/master": "43928d5af7dd5991201f118bee394fab",
".git/logs/refs/remotes/origin/master": "80cf50cb2abdda747dfdf78b1e0c4504",
".git/logs/HEAD": "43928d5af7dd5991201f118bee394fab",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/COMMIT_EDITMSG": "5f25e4fdc175f5c9f4fe3a1c016d4eb8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"favicon.png": "8b06b6ba5a32d551e1a4e0b116036681",
"icons/icon.png": "aff50e0711dcd493cef45f99429e595d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/assets/img/meeting5.jpg": "ce7e95f201d95102cfce15133af58e48",
"assets/assets/img/metro.digital1.png": "7f77c0636f81d783810f47c20c29e76e",
"assets/assets/img/meeting_chart.png": "743b9cfd413dc83dbf28a648ba7f875f",
"assets/assets/img/metro.digital0.png": "393988fbb894c58dd29faf1056dd018d",
"assets/assets/img/no_meeting0.jpg": "707eb728ca53ee24cb3c4259251b5ddb",
"assets/assets/img/flag_ro.png": "de8fe361d27e79fa1ac92b658dd255e1",
"assets/assets/img/meeting1.jpg": "3ec32896bc5c1c58429d8652e37c9b13",
"assets/assets/img/no_meeting3.jpg": "37d1b1f044b44122dd64c9de3a0ac781",
"assets/assets/img/no_meeting2.jpg": "e1a686dc441d5c3c277be4dcd27af877",
"assets/assets/img/meeting7.jpg": "3ae43cebbdf3b03e2eb1fa573dd2b66a",
"assets/assets/img/meeting3.jpg": "e1d5ba64c32b77e6c7c8f24a05a80609",
"assets/assets/img/metro.digital2.png": "76e0788582f2ac06536921158daa9328",
"assets/assets/img/meeting4.jpg": "8d44ee52433c0e056c4f024fe53f48fe",
"assets/assets/img/flag_us.png": "17b39c480c6ea6b1066c9f4a03554891",
"assets/assets/img/flag_ro_round.png": "1ff06486339e7d824923ecdd685934b2",
"assets/assets/img/flag_de.png": "2bf9a9eaaedcc21a231871e8315cd3b2",
"assets/assets/img/flag_de_round.png": "7b60e3ada9ab04ebbe1e9f4547cdcc48",
"assets/assets/img/meeting6.jpg": "9e7039afddfe417ea91999561734912c",
"assets/assets/img/meeting2.jpg": "fd317da566c86fd6a781af98721f8ae2",
"assets/assets/img/meeting0.jpg": "a667a0761fc777987e83e9c018ce22f0",
"assets/assets/img/flag_us_round.png": "0561de4840599342bdb9f4dd6292e3a4",
"assets/assets/img/no_meeting1.jpg": "5f8efd906768de84138b0667ba2736bd",
"assets/AssetManifest.json": "e9c075e3ff80601813d2e9f62ce0a23b",
"assets/fonts/GoogleSans-Medium.ttf": "8d57e4014b18edef070d285746485115",
"assets/fonts/GothamMediumItalic.ttf": "b1951be38b528a44704a217b9c44ab55",
"assets/fonts/GothamBold.ttf": "db33e70bc9dee9fa9ae9737ad83d77ba",
"assets/fonts/GoogleSans-Regular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/fonts/GothamMedium_1.ttf": "77171d8f5b5283f9d47a3434704bf944",
"assets/fonts/GothamBook.ttf": "b54724f54d4dd3f6796e3c4cc422f998",
"assets/fonts/GothamBoldItalic.ttf": "9b92f7fc1500a19b09dc9053fbe46b0c",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/GothamLightItalic.ttf": "0f0e43f48efb679501feff0240c3eb55",
"assets/fonts/GothamMedium.ttf": "77171d8f5b5283f9d47a3434704bf944",
"assets/fonts/GothamLight.ttf": "8566e2336952927984495865df90963c",
"assets/fonts/GoogleSans-Bold.ttf": "4457817ac2b9993c65e81aa05828fe9c",
"assets/FontManifest.json": "de47893cfeb82e5bc5254e5ef1b46042",
"assets/NOTICES": "4d4d364d626bf48b69b88c743fe17a95",
"main.dart.js": "64e7f84205ec100530507d17a891c773",
"index.html": "3264caaaa93efc54eae1d6bc93c2aea2",
"/": "3264caaaa93efc54eae1d6bc93c2aea2",
"version.json": "a8e1ccc08dc4c6835ad24473ebc060b9",
"manifest.json": "085548a19f6473ccc2ed4638c6c03b13"
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
