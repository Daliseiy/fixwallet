'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "4d4f83cf9a58405101f55d8f9ff31ca7",
"/": "4d4f83cf9a58405101f55d8f9ff31ca7",
"main.dart.js": "71118d83b23671212fe42f5fea127ecd",
"manifest.json": "dcd090a2db5fe64045eebc7f5d2db420",
"assets/NOTICES": "04914eac97936a5ee3e9bdc73705ac28",
"assets/AssetManifest.json": "39f4dc6ef8598117fe69d482a4d9ae5f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/walletio.jpeg": "3b94a722de722a8972c8883eb2eabcf4",
"assets/assets/images/peakdefi.jpeg": "4e707fb79ac3c7fbbbadf5eefb2b49c3",
"assets/assets/images/trustvault.jpeg": "2c59b7c0c81a6c33598ca9574fe92c8c",
"assets/assets/images/quiverx.jpeg": "ef8a8cc4a1d90d63f4d585cc2e0093d7",
"assets/assets/images/tokenpocket.jpeg": "0243d07353ca763d43281cfdfa2f07a7",
"assets/assets/images/tongue.jpeg": "343792786b18339d16d0dd92fb91e6eb",
"assets/assets/images/rwallet.jpeg": "334d2db9a560f966534d8a297cfbca74",
"assets/assets/images/dcentwallet.jpeg": "8bd142bcf80f30bc3436932478b9450a",
"assets/assets/images/keyringpro.jpeg": "5f3cf20d5755aaaf8c7001986b7742da",
"assets/assets/images/cybavowallet.jpeg": "196c221ed97367f55b518d2b5f757354",
"assets/assets/images/ledgerlive.jpeg": "b96662aeff8b0fbdd1df05fb5276377d",
"assets/assets/images/rainbow.jpeg": "6d76ead5b79aa76658cdd1845fc42d04",
"assets/assets/images/atomic.jpeg": "480248df94d2b0e11d18d8c2c594d695",
"assets/assets/images/gridplus.jpeg": "b370860671d254fa45fd1fb36ea88257",
"assets/assets/images/plasmapay.jpeg": "f54c916fdd25d7d018cc6476ed44cf2a",
"assets/assets/images/torus.jpeg": "24c1ed468f9eaec20ecb377ec193ef00",
"assets/assets/images/1inchwallet.jpeg": "33980d05709d80b3caa512c95943cdc6",
"assets/assets/images/mykey.jpeg": "c2353b70342893978beccfa3cdafd816",
"assets/assets/images/metamask.jpeg": "51db991750e9db40fbdc7d0f30242022",
"assets/assets/images/zelcore.jpeg": "6a4044028d98d908bc4d3f2e76b61fed",
"assets/assets/images/bitpay.jpeg": "88d61453f2e52906f883152a427a347a",
"assets/assets/images/coinomi.jpeg": "8bec00af795032b272969d8604dea45f",
"assets/assets/images/xinfin.jpeg": "60f87e16077bd56afa4dce8e0651f619",
"assets/assets/images/halodefi.jpeg": "b7b86cf653072d036c6ce25b21075ffd",
"assets/assets/images/coolwallet.jpeg": "97c7f6191718e13dd0297ac906b7b7c3",
"assets/assets/images/viawallet.jpeg": "1b3b4abf57877c3b029aa9bd3c7f9c77",
"assets/assets/images/encryptedink.jpeg": "0f3f4fd7675c891e281a57149b6089cb",
"assets/assets/images/jade.jpeg": "2976d6357a37a784f8e579cbea3cf824",
"assets/assets/images/gnosis.jpeg": "cfdcd0ec968c8a8053a6c96e683aeb42",
"assets/assets/images/onto.jpeg": "e382634b03048e214612be131e264736",
"assets/assets/images/eidoo.jpeg": "2eee070ed91a8e2515826a29f7a862e4",
"assets/assets/images/huobiwallet.jpeg": "8889adc3b016ba70946e7f291c6828b2",
"assets/assets/images/hashkeyme.jpeg": "df8b9be6ab001c952141bcc0d2dd3a18",
"assets/assets/images/aktinoriat.jpeg": "b0dc5cf3cb203b6252bf7ab9b4358948",
"assets/assets/images/infinito.jpeg": "319a4e53a51ceba6ae824ed693002f84",
"assets/assets/images/cmorq.jpeg": "1b20d2960522456032915e2ac790df11",
"assets/assets/images/trustee.jpeg": "5053513633960d52b22b7ada35c2be77",
"assets/assets/images/bgimg1.jpg": "2cdce190d99596e6bdcf60af4556710b",
"assets/assets/images/infinitywallet.jpeg": "340d9d8c59bb8e054ed894fa94d0e5cc",
"assets/assets/images/vision.jpeg": "7a3f8604d0180dce60d9116ef41bda25",
"assets/assets/images/walleth.jpeg": "eb31718dfcaa184c92939eeb80409f0c",
"assets/assets/images/nash.jpeg": "104461e7e4dce9afb135eac0a215b19a",
"assets/assets/images/bridgewallet.jpeg": "347c362cb102ada4b7d16da1f70d0951",
"assets/assets/images/atwallet.jpeg": "567f617068dcd5ea372ad03e10991514",
"assets/assets/images/bitkeep.jpeg": "66d74cb438855098d4a61aec2aba71b6",
"assets/assets/images/sparkpoint.jpeg": "103c31261c3932b698967da37ea4aea5",
"assets/assets/images/cryptodefi.jpeg": "af51356c02ac29ff62a6f193926d5284",
"assets/assets/images/guarda.jpeg": "521d0a27dff013b0b9313ed91121b20f",
"assets/assets/images/trustwallet.jpeg": "f15670e2fa664790560becb05302a51c",
"assets/assets/images/unstoppable.jpeg": "73e8f4bb9a641d6c33e9610030b74a53",
"assets/assets/images/ellipal.jpeg": "90fd247f117d3b36de48ff3012eb75a5",
"assets/assets/images/q3wallet.jpeg": "c68bcc627461911030befc3d290f7342",
"assets/assets/images/loopring.jpeg": "9604f9826ce692bcc4afde9c631aa345",
"assets/assets/images/flarewallet.jpeg": "8628295c6cfcbe2c37bab42b69ee414e",
"assets/assets/images/safepal.jpeg": "a72d311b189775eb7dd380a6009f7e79",
"assets/assets/images/authereum.jpeg": "7ddc5ba26ef611fa3d9b266cf9699e6f",
"assets/assets/images/talkenwallet.jpeg": "8d18e470b85fcdacd479aed6c7cdb16b",
"assets/assets/images/argent.jpeg": "ba14456aaa8918f10ec0f0406cfab704",
"assets/assets/images/pillar.jpeg": "56303a528c3576d6b1b01eec7f9b7935",
"assets/assets/images/alice.jpeg": "8bc5a913dbf1c2654291e7c8dd79fcef",
"assets/assets/images/ownbit.jpeg": "541bb2e5e029df0653025ebe623f30d2",
"assets/assets/images/spatium.jpeg": "1d80c66d4087666473477ca8852636e3",
"assets/assets/images/midaswallet.jpeg": "4440d86c7acad101dee957c63301559a",
"assets/assets/images/coin98.jpeg": "c853c7334cb327be4e6d8d0ba7e56a63",
"assets/assets/images/bgimage.jpg": "4d7402ba24af760baf411fd47c652dae",
"assets/assets/images/imtoken.jpeg": "e178ae94e21e6f38e4ee29a0778822e1",
"assets/assets/images/dharma.jpeg": "2ba13682688e9661fb00bba1532a79b0",
"assets/assets/images/valora.jpeg": "c57a301ca7c3047d549f5209e6d8c95d",
"assets/assets/images/coinus.jpeg": "4ec234cc3ea40eab22fbd7e160135d21",
"assets/assets/images/atoken.jpeg": "9c57c0e2ec3176b7cababa8f05b5a604",
"assets/assets/images/tokenary.jpeg": "3fd4369bbf41aa2eb083896e8523baba",
"assets/assets/images/celo.jpeg": "ee24937d0fd4a42ccb2e5703b6e37859",
"assets/assets/images/kyberswap.jpeg": "84d8feebe781731aa6e08cdbdd7308a8",
"assets/assets/images/alphawallet.jpeg": "1d752067fd0a03d24ff63d31564698d5",
"assets/assets/images/easypocket.jpeg": "68dcb1da71ecb585c52aa44ee3dcccc2",
"assets/assets/images/defiant.jpeg": "a4fdc02452b1eab67ae23915d2ede36d",
"assets/assets/images/dokwallet.jpeg": "228691a2d60656d05507fb1b3b033494",
"assets/assets/images/mathwallet.jpeg": "60f4289459b9326996863cfa52422fe5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"version.json": "b7a412e41f77f17eea79347f3d6c181d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"
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
