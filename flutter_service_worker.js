'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f79b3213bdc46de37c25249d29ee9d60",
"index.html": "ed61a8e5074863dbb14a6cf836657326",
"/": "ed61a8e5074863dbb14a6cf836657326",
"main.dart.js": "5821c8feb2d6739c8773a8d170dbfc9a",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "8b06b6ba5a32d551e1a4e0b116036681",
"icons/icon.png": "aff50e0711dcd493cef45f99429e595d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "085548a19f6473ccc2ed4638c6c03b13",
".git/config": "a98490be5795e6725f8b8436b5cf260a",
".git/objects/66/2b483b9ab63701342864c37123078218e1deeb": "b74a5c857041600034d867de53544361",
".git/objects/68/45349802b6593d5f618221e11af0275300eaaf": "7f3cf9f2afbaec8bddc239df68334bb1",
".git/objects/6f/6bfc544ae67337ec15e92428f3996a3a9001a5": "8274261a27a8e57600d01d41974e9b8f",
".git/objects/0b/5d59aa003a6698a28e3a3a1ad80f86acae5914": "0467deb88e21a4d8b02fb1f99b2996d5",
".git/objects/60/cb278f62ef7b2193ae588df7c2725f1640d4a5": "d665048c1a5c0f7f55dd1ccfa043b0b0",
".git/objects/a4/fe07250ace7b81647a68490f48c8c98786f816": "08b6af5807dd7fdb62f6b7cfd3d329de",
".git/objects/b5/b995ed220136f90a9e350f77165169de851a14": "5da162d63647b1c9bc1f43547fc5703a",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b2/f48530ef201af4561eff805492e58e5bda8f98": "e157eec2c7b11f3550099d030a01cd48",
".git/objects/b4/2ef37ffa34e30822ca7f118f53ed428980659e": "5893243e852d159893718503fea29c7e",
".git/objects/bc/0f03640b93884987002a3f90ebffc10bf31cd9": "abc552273b5678774f06c852caf52fd0",
".git/objects/bc/1a97b5449eb6367af66ceb2af3cf89861351be": "8e714517d52741b240a54923ae52449b",
".git/objects/ae/a0199ea0ebf29f36d8c9c1ea087073153060ca": "b5df4d2d435d2693cfdc7d5784fa56f3",
".git/objects/ab/605f9e2e3c347708a810435ba3a7debc52e1df": "6625299185704ce425994aa2ca00c523",
".git/objects/c0/8d482c956e40a1c933d542392e29811203b347": "1abae353d9e5108ca132cd7d6d73aacb",
".git/objects/fc/d6a410ec77e2290db1913fca5beb39679eb057": "6b1737dbc09078e185b4e5329e855451",
".git/objects/fd/8eb14ec44de0d2b9f0685d1685ff7ecfaf1d82": "73d1f654758e757aa7587ac48f633be9",
".git/objects/f2/0c1dda3930909cbef8c38b516a8143ac375231": "9c11db192de4d7aea890bce7552eb072",
".git/objects/ca/dcc7336125559e9a856d81f6e5059e4e62f169": "506098f354e1143f9e44eb907b529f5e",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/c6/5b0ec1753cb049a9cb2a1697be31974bd3de67": "eb9142f7844af9db12c1aa0ef17fbfbe",
".git/objects/7d/0e5f0b28115515514e23f021b182d13e7e5ff5": "e048f25acb891f6e3dff94c14bb6126e",
".git/objects/29/043a7e721fa5ac07b0e449a20379521a581ff7": "6c4a670479e2f62913a47b184b0da294",
".git/objects/73/2b34f471675cfb80c1b7768fd880c5c624f347": "6c10661de612d851b4e1c2201f27ce57",
".git/objects/87/9e4fb6aeb4ca5646cbb69c35f61995ceeb6eb8": "fafcb769db8fbdc96b84a710ab8214f7",
".git/objects/87/59d2bd195e89785067d71e85b10c82e0b905ee": "a3f0d47f6f8c73014c5d3b9666537f7b",
".git/objects/80/497666ec8ca0abb81ce5bd9ce649896555753e": "48fd3ef257b98d8add62806e975bc782",
".git/objects/8f/e8b84fe430d3d94c6e72c7e40c614a6f803f83": "88ce84e16a31d4b9286ce6c4697ff5de",
".git/objects/4c/f017a4bcf2fa3cbc1abd35dcc258f225c93603": "d9da3127c1f14ebb402b2cac4618bb1f",
".git/objects/72/0e4470635a9e081723db3257e87a7f47e7c20d": "00e75bde67b3c81ac2285b14c8091e2f",
".git/objects/2a/3fdd6c788b57d8f07b7f138f0c402b6a7aff7f": "8fc2c36f4bddd4d7c12c1e69096b1328",
".git/objects/2a/123900588145c0c6b1a977ae6fa24d481d44e7": "3310a71317e40a5d0744b4f5550fad6f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/0301b08f01c3c882ee5f193e75c8577c182b39": "76662da2e642ca9929f741a1a3192831",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/5e/1fe2b4a9040d863751996013e0dd28dbb432d8": "edc7735449999229e9213d96f5ea6363",
".git/objects/6d/cee61d84ac5751d885aea915d2e6585edb67e6": "d15338fb378c173656e5354158977960",
".git/objects/6c/dde859125dc1f877e2bf7d8441a1a6309c675c": "8e63f6217aa59e9c1b51fecf8a707a8f",
".git/objects/97/0356830ad3198ade6d0c274152ad9b9ba8e28f": "2b898b8f0658da4477ab4c47ed4d4421",
".git/objects/90/37f6549821a3290bf87e403373201a7567642f": "4a74d760c8abe7f9cd8c43e564326b89",
".git/objects/a9/f2b11248437c619d99cc4a29f5da43b40fd9a2": "ba2292d9ffa1f8e2c8624c16e57643e3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/aa4bcc52ebebe37bbe4243a7b1405b9aa8a40a": "5ba57a9f62ac8d790b82ea073c19a32e",
".git/objects/a8/abeedd86f09274e1b38dbee8b230a7d669d0c6": "39fa9ac9db4d6c526fc3fd9a82b2a856",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/c3/aff222cb494258a38ef8b70b0b4570c4e326cd": "96161cd14414a05b09a839182d293aa5",
".git/objects/e6/3b1646d8f9406dc65038aaa76ebaef62f37cda": "a420fd600a0bfb391dea0c6ff39afa8b",
".git/objects/f9/f66e046c8f764c8eed2e4581fc717b57622adf": "1d282cb84e11481eca2dcbdce9bbfeea",
".git/objects/e8/2ae830426db3293e1c78de9dc6151cdc99e2c9": "d44083c30762ea3fe5801389339acb48",
".git/objects/ff/5fe83ecc2749aa71dfd0992ee04128e33ea76e": "25f779e0f58fd9dd2221ae65eb7c4364",
".git/objects/79/3dce5e2976aa083ce9af35f23b035b9c81f483": "df6423b8b276f31534f59b2a27116812",
".git/objects/48/3bc35d4213c3f871a770a7373c6ec8ecf648c0": "629331c7c6ac909a0f326e86a7799de7",
".git/objects/4a/dd796a4eddb36840deda8c30e7db8ece749c17": "2102f49516f4b6f364f27dbadd6aec40",
".git/objects/4a/133fc09399fcd6fcf86996e095074d2a8668ae": "8815c78ee40fa8ddd38cf58b1a06305f",
".git/objects/24/ff32b9491b6e3322eba76c979aa0a19dfae2e5": "6801e214018a3d1d58b8076d71b088bb",
".git/objects/4f/54f37c5d7a5235618815b9417d775083f51d9b": "27b9eba0c8abddfa8f0d9bb44050a03c",
".git/objects/15/43660daf312c87535cb387f57da10c2e626626": "55b955064f5a012c5a6e39b02f3be73b",
".git/objects/12/ceb7fb8a0ca03c854da2f6315bd53163460aec": "310160ea4f7577f296f50fd46c787960",
".git/objects/2b/279a275751f1280b08b1a9cf5918221354e52c": "d0d0d89622e02512f821a9db597f478b",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "43928d5af7dd5991201f118bee394fab",
".git/logs/refs/heads/master": "43928d5af7dd5991201f118bee394fab",
".git/logs/refs/remotes/origin/master": "80cf50cb2abdda747dfdf78b1e0c4504",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/refs/heads/master": "e078d9e6c11c16d5b64b6511d0fc94b3",
".git/refs/remotes/origin/master": "e078d9e6c11c16d5b64b6511d0fc94b3",
".git/index": "f15cfe6ab5d9d082ceb8c2161dd698a2",
".git/COMMIT_EDITMSG": "5f25e4fdc175f5c9f4fe3a1c016d4eb8",
"assets/AssetManifest.json": "bcd8057ca3e7d708ab14ef17359b8634",
"assets/NOTICES": "4403262e5822fe60de8a8c171d9963f8",
"assets/FontManifest.json": "ed8b6cef48096a15ac0da6ac64d98eee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/toast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/toast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "8840470a345869fc46b1062603d943e8",
"assets/fonts/GoogleSans-Bold.ttf": "4457817ac2b9993c65e81aa05828fe9c",
"assets/fonts/GothamLight.ttf": "8566e2336952927984495865df90963c",
"assets/fonts/GoogleSans-Regular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/fonts/GothamMediumItalic.ttf": "b1951be38b528a44704a217b9c44ab55",
"assets/fonts/GothamMedium_1.ttf": "77171d8f5b5283f9d47a3434704bf944",
"assets/fonts/GothamBold.ttf": "db33e70bc9dee9fa9ae9737ad83d77ba",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/GothamBoldItalic.ttf": "9b92f7fc1500a19b09dc9053fbe46b0c",
"assets/fonts/GothamBook.ttf": "b54724f54d4dd3f6796e3c4cc422f998",
"assets/fonts/GothamLightItalic.ttf": "0f0e43f48efb679501feff0240c3eb55",
"assets/fonts/GoogleSans-Medium.ttf": "8d57e4014b18edef070d285746485115",
"assets/fonts/GothamMedium.ttf": "77171d8f5b5283f9d47a3434704bf944",
"assets/assets/img/no_meeting0.jpg": "707eb728ca53ee24cb3c4259251b5ddb",
"assets/assets/img/no_meeting1.jpg": "5f8efd906768de84138b0667ba2736bd",
"assets/assets/img/no_meeting3.jpg": "37d1b1f044b44122dd64c9de3a0ac781",
"assets/assets/img/flag_ro_round.png": "1ff06486339e7d824923ecdd685934b2",
"assets/assets/img/no_meeting2.jpg": "e1a686dc441d5c3c277be4dcd27af877",
"assets/assets/img/flag_ro.png": "de8fe361d27e79fa1ac92b658dd255e1",
"assets/assets/img/flag_de.png": "2bf9a9eaaedcc21a231871e8315cd3b2",
"assets/assets/img/flag_de_round.png": "7b60e3ada9ab04ebbe1e9f4547cdcc48",
"assets/assets/img/meeting0.jpg": "a667a0761fc777987e83e9c018ce22f0",
"assets/assets/img/metro.digital2.png": "76e0788582f2ac06536921158daa9328",
"assets/assets/img/meeting1.jpg": "3ec32896bc5c1c58429d8652e37c9b13",
"assets/assets/img/meeting3.jpg": "e1d5ba64c32b77e6c7c8f24a05a80609",
"assets/assets/img/metro.digital1.png": "7f77c0636f81d783810f47c20c29e76e",
"assets/assets/img/metro.digital0.png": "393988fbb894c58dd29faf1056dd018d",
"assets/assets/img/meeting2.jpg": "fd317da566c86fd6a781af98721f8ae2",
"assets/assets/img/meeting6.jpg": "9e7039afddfe417ea91999561734912c",
"assets/assets/img/meeting_chart.png": "743b9cfd413dc83dbf28a648ba7f875f",
"assets/assets/img/meeting7.jpg": "3ae43cebbdf3b03e2eb1fa573dd2b66a",
"assets/assets/img/meeting5.jpg": "ce7e95f201d95102cfce15133af58e48",
"assets/assets/img/flag_us.png": "17b39c480c6ea6b1066c9f4a03554891",
"assets/assets/img/flag_us_round.png": "0561de4840599342bdb9f4dd6292e3a4",
"assets/assets/img/meeting4.jpg": "8d44ee52433c0e056c4f024fe53f48fe",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
