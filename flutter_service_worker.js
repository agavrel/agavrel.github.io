'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "71f22becb7a2de78dae7c4f4291e88e7",
"manifest.json": "6da1eca942e2635336aef6c54486eaa5",
".git/config": "f7a395f4a8dbdd52ef622086b8eff803",
".git/objects/fa/2ccd68fec1542ac0d7f1764458794a25684d3b": "6a6e35f999f6d05e0b18ec16516322a0",
".git/objects/86/87991407de1c974837d95371aa0ff46092897b": "374d3109a6449d97e2787f5f622aa679",
".git/objects/bf/3425f5fe22d7b3591945a5afc30a7c3acbc149": "326f87997f9b11ec678e16634261c736",
".git/objects/92/3cab6c140883f23138185fe182854e671bef66": "89f2705cf40df223c976b65d86ff5e2e",
".git/objects/56/18b6acd6cac8f5187bdd44403aa6a80c5a4d8f": "ccd2e0df0b635779d1caf8fb378ec222",
".git/objects/96/cb830d5640e0e904348b9b34d7ba40b8f07a07": "a5f4d6110e66b37bd5ef6211fbdbd72c",
".git/objects/34/c935209b26287257b217e44bd1cbb24b2b7793": "7cda908d73ff17a6e05b0d345541316f",
".git/objects/f1/c0311ac254fc370bac1b1bc5805682ce272839": "53605da2da2f8033782eab2f065138f5",
".git/objects/f1/f182466c1ed3ffaae6a864f91c74abf18f46df": "21751754b218581f5e9c8aac2327147c",
".git/objects/f4/5f81ef2a9e2fef748b2e649ece2e17a2e9ce52": "63815825f770060309a614c3bfaf38ee",
".git/objects/7f/1f68322a1e0c37586a95165081e9650134a1a3": "c96a12ae70959a94bfea26c57f36496e",
".git/objects/7f/29345cd0dca42fc176941040ffb1ee9de6de71": "297ea53b7f69222a26cf51552f34dfeb",
".git/objects/9c/cb99d77f2754224c6ec6f66a2104c55af4bd76": "89704e21e3075c97e1eb224eb8e86a70",
".git/objects/a4/87025eef6120a1e0f1a8f568c68254cf6cc309": "3e51230d4f1390302aa20eab3c56b4a3",
".git/objects/64/52491a61c9bbe4d327df50945dbc1532e9c377": "134dc2e152d208caf6b8049291da00cf",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/f0c318467c60cfb5123218f1725c6d77f6340e": "9f6fb9824347232bd3a7ab2652a2a3ce",
".git/objects/a2/5a336fd40998d1927a238845a52cd5e9606665": "fbe05128278cceafac97f180f3c56b7b",
".git/objects/52/c00e3b913463a18b6ef9944faf72904d33be26": "2c4ad84bf2dc3f3d440750f47c052b65",
".git/objects/74/a8a9e8ecaaf9985f9a8aeada5d025c6e2c17f2": "c72af09e874d9157957154c44ccec241",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/7b40d61adc65e1c4ed29d3497f9168b958e48d": "5ceebd40c04b114fc46e3e81da2a697c",
".git/objects/b1/2a2ef00df4c22f5b5e532a700ec5e83d457948": "b466d86168de637d5aa872ccb4c2a48e",
".git/objects/b1/131bdaba25a3f6c53d047152b00c7c8d2db4dd": "e9f904459c7da7b6c0cf8c0da8cf4cc8",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/e04b590723baac4498cbd2ffb5563c07297fef": "24a4c0611cd0c4b95c41d563a55f6bb4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/8e/38d721b45a0d656f0d20f181bd32848fea8d8b": "f0ce5c307741ace37c9b9fe091dc7c12",
".git/objects/8e/6de363383b62550a9aac26926632f1c28899d1": "f13be50cdbe824d293401e068aa8f8df",
".git/objects/6d/7e1a0ac27f5e8ea36c81e6dbd18d17f8f537c9": "20d7ba67004c9a81d1bd59003c1f91af",
".git/objects/2f/de5003324a3c9f40d6fb18b3b966e17b8fd2f0": "d22954929ddfd9c839a022b2efd747e1",
".git/objects/02/48fb6bc5ad49419d9c7832c12694ec1308a596": "b86377ffb1251a3ddc75f4939c86f5bb",
".git/objects/df/e2a71bd276922ec768de5dade5e23fb6939bdf": "ed39e70615b0b10098141df0f65fad32",
".git/objects/df/8b4c0ded0acadc271edb97b89e05f57ed9c8d1": "4b90d35912c4e24a2638079b541f14fd",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/d0/75255f3d254df85ff33ea80833ba1bd676e334": "d9a607de0c2d7282c32826ba84f4ef03",
".git/objects/fc/00971a1479fda26be82e0174cac315e2016f65": "ceacf1f59bc42cd4b6124be926afc31b",
".git/objects/b4/eddde5500c65e5b56c80c9af5c507b588ca9c1": "2ea5ab185a15ec47cd3578a48384ad51",
".git/objects/49/b36e4165b675ffc6c1fdf0cb7418864c0a0788": "7c0a0b9bbd0b1971071280cd48950e8d",
".git/objects/85/9a28c63e5fe2b8b845f8d976bb1db8d1fbc0fe": "e406af2eb37ccef46c7951b5acfacd6f",
".git/objects/4f/ca6c9a32c8e50ed417577f72ec21957c749b0f": "a5cfe222b846fe5ee5ab4f5ecb32b94a",
".git/objects/b8/3dc9e831aca2a673416dfa51210b2fa1a2e713": "d5f274fe366dccbc7902676fbe7d0fd7",
".git/objects/33/bdc1169d5eeb5910e4badfcd24df9d6136915b": "86a104548589a8192129d990abfd4ca0",
".git/objects/cb/1c88bb5a47b2c346397f28965238583b8b1149": "19d5cca30992fec8e6f37c588910f21e",
".git/objects/d7/6432dfad649eea2ec5e701a838fdffe695ad93": "ce4a0782518d182cd7c388a4ce3cd59a",
".git/objects/d7/2636559fc74635a705c6eeb5fd34c3715814c5": "a413405b1690ec691d0e0e57add37e71",
".git/objects/6b/9ea9073cbd9df9868bed22d2143c3b77af985a": "0ce6515490ef354c0491fe2029522a6a",
".git/objects/1d/1aafc9872948eb9155099b59e58099dbb5a137": "d0f39beb5ba6f4b2065ef82d47ec93f2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/7a/e34fed4e4e072e50d93812d370aaecfa2af9c7": "aa43cb6c23715562d8e5df84de679b60",
".git/objects/23/88e46fb1c1d6b73cf5c146fa43ec418da859ad": "5b4e5b67caebc710850fb6a42efc46e9",
".git/objects/9e/587162aa586202cc7613cb1047e09c8bbeb16e": "f8f20de6dcc5e40ae42881859ba4ba8f",
".git/objects/9e/d730a2150ab5cd5f7a9e190fa631e8ba96b8b1": "dfa03da01cbe76a9d8ab1dd7c19ce651",
".git/objects/37/12736b0f552c412e6d67a48f6d7e29fcc4f21e": "f4fee59f6deff123c27bddbb0b1b3967",
".git/objects/c6/fea1cdcaf18e2ba554bdd1cf2b2520a1be1c44": "84bc8bbfe5ab073ea0ff94e0deff989e",
".git/objects/c6/16718f86fd9f480f265d6abdbf692973701717": "a9eb1676f215d6753eb1069429438761",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/8d9914016b42405696bd68c2a8a11c2ff0ad9b": "2b6ada95a0846f68cffaa7d7cc0967ed",
".git/objects/27/7eaf70f712c7b28ed05b03d8442a042bf7d558": "91ec867ca49d51e6dfe92e9e7968c30c",
".git/objects/9f/625b9e51bbdd597787a8abc87dc9d66b31212a": "ef7fb5e4ddfdf16ce659e416cd34b32f",
".git/objects/9f/eb5e6f2bd299dccf7e4fb2bc4db9bb51b09a9d": "c322d05e5b4702c299238484834de51a",
".git/objects/9f/436f0af5782ca565b9adab568c1958065c853d": "be6d3172d3036996cec28f2a9d330a32",
".git/objects/2d/f3a2ddfa53f17eb916c4047aed4abd2082f68f": "79557691efd2deb770289232f2272cdd",
".git/objects/7d/996607ae56c2a465dcc7325d7db5de5e53ddbb": "400b04e0651bd8b338641400eaa4a26d",
".git/objects/11/ee0b5e1efc29c81457e3c5ef128b30cccf6120": "05c90ca64df1a20424b3717cf95cb744",
".git/objects/11/8c9329bcb99928de4d345c095f695f7f71ce9e": "da9d29d41b2f9a95de13f2cc30ff8aa5",
".git/objects/c8/877693ae7ba237c37b0deedc3c2ea237a089cd": "88bffbe104478f0cde937b01b7faf3d2",
".git/objects/65/184fc86f6b47779a431a95b3081d69a67ed4a7": "1c0798f435828c6a50d76b605830a3f9",
".git/objects/bc/135d28929c299b8450b90647ddc23261a42445": "2849779be72ecdb99bd0b53a592513ca",
".git/objects/07/9c3cc9a4e3497f0a046556167de9777e7c6f43": "871ac387631fba76d69fa91c523dbb4b",
".git/objects/4d/2c231084c65ec4b488aa70998b5cdb9b6609df": "a8944e6677d06ac878817f2ac245ce11",
".git/objects/06/20845bb781efcde8e02628b7418d1d880b33df": "c0a117a0477970febfd7a620f0758979",
".git/objects/32/efe8ab85fd138ceb5c97908b9f70bf6fec193d": "e207586251a2c2eaa04f278f499483f8",
".git/objects/f3/7ee3ea552e949fa73cc382ac6ce3c6b0403f66": "4d2d44ddc3d913003a0669f02df2c846",
".git/objects/b3/5552cc15a2c27899a5167c07eb255e86e7cbc2": "acea97582956b7aca986e7460ba57812",
".git/objects/b3/9f56ba8a416e84c215d100cf3278b1b1ef1fdb": "cfc30546fef319d4457cbd9cb0e70adc",
".git/objects/45/ff4981b0a3e44c1b0547a3d5089c3d340f9cd7": "2e01d9e288f1017048d37c825c3dd48f",
".git/objects/ae/cb9b659bb9e9e5beb7474ccd1aa0a2b5d10196": "475ecd10939a19436eb8d1fbb6c78b6f",
".git/objects/39/357db7748c8ecd2d0cfbc1edf4c4abef6b3d8a": "6668ca2f5f7cfe837a078bcf4c820349",
".git/objects/04/53f9fc469cf16530ff8560b65ff688ac44d433": "c91e6fbbde5ee091f489f337e34074c7",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/bb/b26e23a0ea3c76fed867ff5454648133041ee8": "193b524ee9142b60b8e97a28f5bf57f7",
".git/objects/0b/a535a8e647296e03e77d6ad75794046e6fb274": "f9466a35c456f79031736ca73b02bb62",
".git/objects/ce/34edc7ac1bc993951047525949cb9a3eca5cea": "bf13381d5c118bb0fab1835e7673b3f9",
".git/objects/4c/bda6f278e37cf411e7e1c985461895412e199b": "4dc35a169b4faf0406f20328e0a22714",
".git/objects/4c/fe939113de347de9164b8e1ecb9232ca87de89": "a736c654583f4524399e5e0f1f98d89c",
".git/index": "4711c2fd9e4b8d56270fc38a2d3437b3",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/refs/remotes/origin/master": "a34074f6c7ac3819c2c431c2e445de52",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/heads/master": "a34074f6c7ac3819c2c431c2e445de52",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "880e7728e4c2ca61f01a83a0b32ecff6",
".git/logs/HEAD": "f8467c53421587c79786376982556ef5",
".git/logs/refs/remotes/origin/master": "1c3e4f1def7e54ffcf2a6c9f7bfe3ca1",
".git/logs/refs/remotes/origin/HEAD": "020b4aa2609cf8653f3b8a86775750cf",
".git/logs/refs/heads/master": "f8467c53421587c79786376982556ef5",
".git/packed-refs": "65061169a5badeb1fe7dc63ecb2d9b96",
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
"assets/NOTICES": "4d1827b2d091d13e5832627da59fe7bb",
"assets/AssetManifest.json": "004c24b0d1faa963c6bf7bf69e8594dd",
"assets/fonts/ExtraIcons.ttf": "a4c53a1a1a3fdc09fced7b7177323a0e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/FontManifest.json": "d8339c980407602ad42c3b022ed259ef",
"index.html": "b0501492aef5e1872b8162a3c8183a41",
"/": "b0501492aef5e1872b8162a3c8183a41",
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
