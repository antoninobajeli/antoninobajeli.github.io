'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b636efabd4b035d02d325aaa01eb1a68",
"index.html": "afb607ed20dc570fb15b7d242bc6d965",
"/": "afb607ed20dc570fb15b7d242bc6d965",
"firebase-messaging-sw.js": "8b650d92a6d1ec4366eec43432698124",
"main.dart.js": "86c81e4d04b9a659ffe98ecd372bf597",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "88033c8efdd27971e47f5123f16f4175",
"icons/Icon-maskable-192.png": "de00b5c54c333c0abe8268b749748c34",
"icons/Icon-maskable-512.png": "8a6e9b1f12baef86e55be20ab23eda9d",
"icons/Icon-512.png": "4ecfd0adbe622daf28d1354d8f4b2a4a",
"manifest.json": "4292db31aa874a08d5167ea471090d3b",
"assets/AssetManifest.json": "6a32201c6f9c8974edc679c0e75f1a9f",
"assets/NOTICES": "be56eb2212eacc190659be7f7cabdb77",
"assets/FontManifest.json": "290ed1ea7c2f70c16c02717f1146dd4f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/esc_pos_utils/resources/capabilities.json": "ae5c3288b81125ab9c54fff02d30387e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/quisi_core_lib/fonts/Futura_Lt_BT_Light.ttf": "71228ce28727c0d166e6534790e2f3c6",
"assets/packages/quisi_core_lib/fonts/Futura_Bk_BT_Book.ttf": "15a271398d69dc5e1cffdf265a88128d",
"assets/packages/quisi_core_lib/fonts/AvantGarde_Bold.ttf": "4ca347f45e1f36fd455e0dc8048bf576",
"assets/packages/quisi_core_lib/fonts/Futura.ttf": "ad6a4626e6ad4952d3a04285262336c0",
"assets/packages/quisi_core_lib/assets/images/fast-easy-order-logo.png": "ed618fd85ddeeda6a447d2a2cd5cf11b",
"assets/packages/quisi_core_lib/assets/images/fast-easy-order-logo-.png": "2f33a268abeab50770324823afcb035d",
"assets/packages/quisi_core_lib/assets/images/foodicons/pistacchio.png": "6912c1fb2aea6121b4f7e732bee7f8b0",
"assets/packages/quisi_core_lib/assets/images/foodicons/mozzarella.png": "225e310d85cc898ba8336cf4b963fdf9",
"assets/packages/quisi_core_lib/assets/images/foodicons/verdure.png": "5797a6bb2ad83cdae94f9add9d7939eb",
"assets/packages/quisi_core_lib/assets/images/foodicons/mascarpone.png": "7d2c757e3358e4770b620101d76c6bd2",
"assets/packages/quisi_core_lib/assets/images/foodicons/birra.png": "216d2dd7293a8ade6ee746ea43ae4249",
"assets/packages/quisi_core_lib/assets/images/foodicons/sale.png": "ba63ea066338bb13ad4b3d4828455f64",
"assets/packages/quisi_core_lib/assets/images/foodicons/prosciutto_crudo.png": "78abf2ab64cbfd1f407f22c5228434c9",
"assets/packages/quisi_core_lib/assets/images/foodicons/prosciutto_cotto.png": "b22de4eb8adfd3d085f84a3409718614",
"assets/packages/quisi_core_lib/assets/images/foodicons/gambero.png": "cc2ecfee49a0bd9f7e1c09697e34465b",
"assets/packages/quisi_core_lib/assets/images/foodicons/acqua.png": "6bce39974a6f71a701566544c587ffcc",
"assets/packages/quisi_core_lib/assets/images/foodicons/tonno.png": "d4763404511d5eabd5c322322119f4df",
"assets/packages/quisi_core_lib/assets/images/foodicons/pepe.png": "e1619f1998553260389b0bd3a4d9cfd3",
"assets/packages/quisi_core_lib/assets/images/foodicons/bibita_lattina.png": "9dfff92ef53c0bdf9e16277b33cfdebf",
"assets/packages/quisi_core_lib/assets/images/foodicons/zest_lime.png": "3265a9a0380f214621afa582226bb895",
"assets/packages/quisi_core_lib/assets/images/foodicons/coca.png": "e47d91f5ccc509d5d01132ebebb205c2",
"assets/packages/quisi_core_lib/assets/images/foodicons/salmone.png": "c2913919f6c7809aeb55b221f61b7976",
"assets/packages/quisi_core_lib/assets/images/foodicons/pesce_bianco.png": "f5b19da12a8386e4d5c106fa1a3cb6d1",
"assets/packages/quisi_core_lib/assets/images/foodicons/basilico.png": "f6f628c55e3a1c1145ae26efac9bb2bc",
"assets/packages/quisi_core_lib/assets/images/foodicons/pomodoro.png": "fe063c32e899581e757d0ac5bf477bd6",
"assets/packages/quisi_core_lib/assets/images/foodicons/fragola.png": "4189342a2b8bc4c0f7be96de48b43fa0",
"assets/packages/quisi_core_lib/assets/images/foodicons/cetriolo.png": "a22fb7c04cd40200a44d541023f645e8",
"assets/packages/quisi_core_lib/assets/images/foodicons/bibita_bottiglia.png": "ebde85f8e5b3e37858fa7dcd729ad7c8",
"assets/packages/quisi_core_lib/assets/images/foodicons/edamame.png": "b140121673b7ad3c666668960dc8037e",
"assets/packages/quisi_core_lib/assets/images/foodicons/funghi.png": "06b7228cc37aa3b54fc599cf47d98a38",
"assets/packages/quisi_core_lib/assets/images/foodicons/cipolla.png": "e1958a2687f0a817d12b30e534e04810",
"assets/packages/quisi_core_lib/assets/images/foodicons/farina_grano_tenero.png": "a45b2a318b5a642d8db6b7642c8b84a8",
"assets/packages/quisi_core_lib/assets/images/foodicons/avocado.png": "0c35637bf9b26239aae435868988fc5b",
"assets/packages/quisi_core_lib/assets/images/foodicons/olio_oliva.png": "3777424a2006ab18b6566668609152e9",
"assets/packages/quisi_core_lib/assets/images/foodicons/farina_grano_duro.png": "d4025a662617e6090a2285c32764e9ca",
"assets/packages/quisi_core_lib/assets/images/foodicons/melanzana.png": "f5274265e83e7ee286d724f966a5ea20",
"assets/packages/quisi_core_lib/assets/images/foodicons/philadelphia.png": "97478dfaefee73b419c1e7e04ccf9919",
"assets/packages/quisi_core_lib/assets/images/foodicons/salsa_teriyaki.png": "f94e26341b65664e8a3609acf8163066",
"assets/packages/quisi_core_lib/assets/images/foodicons/salame.png": "069e50e72baba0e7af15c7a07e416b7b",
"assets/packages/quisi_core_lib/assets/images/foodicons/mandorle.png": "a5caeacf567d8ccde3e2513abff4a0ab",
"assets/packages/quisi_core_lib/assets/images/foodicons/riso.png": "f4b946a9e5296d6b2290ab7e2fb29667",
"assets/packages/quisi_core_lib/assets/images/foodicons/wakame.png": "a66483369f5af26d7769d7cd92f5332b",
"assets/packages/quisi_core_lib/assets/images/foodicons/semi.png": "cefac87718157fd6cd7e9d1fc8a995ee",
"assets/packages/quisi_core_lib/assets/images/foodicons/salsa.png": "ec90ca143bdf418abc153cda5f6e1178",
"assets/packages/quisi_core_lib/assets/images/foodicons/ricotta.png": "52be21b1a49722eb7ead81a5c76853d2",
"assets/packages/quisi_core_lib/assets/images/foodicons/maionese.png": "ec90ca143bdf418abc153cda5f6e1178",
"assets/packages/quisi_core_lib/assets/images/login_banner.jpg": "4e5029e7f21eeb0c7b97efa0a14e5e73",
"assets/packages/quisi_core_lib/assets/images/logo.png": "c47f78ea0f4c635c2cfae0034327eef9",
"assets/packages/quisi_core_lib/assets/images/base_wallpaper.png": "48a98528c34f7c8dd5c2bfefa0a3f7c3",
"assets/packages/quisi_core_lib/assets/icon/filters/3angies.jpeg": "d05f769cc67cc0eae12e3c745c088a79",
"assets/packages/quisi_core_lib/assets/icon/filters/1.jpeg": "4b06a2ca62935f87cdc54e9cd618e32e",
"assets/packages/quisi_core_lib/assets/icon/filters/4angies.jpeg": "78e41f4bbfe54e17fe1996817cea5269",
"assets/packages/quisi_core_lib/assets/icon/filters/1angies.jpeg": "abe97abf3ee7fc2b88ab984a61dcff80",
"assets/packages/quisi_core_lib/assets/icon/filters/Avatar4.png": "f32789406a7993961fbaf2c695a50dc0",
"assets/packages/quisi_core_lib/assets/icon/filters/2angies.jpeg": "4a3fcbab037b0dfdb77bf08106b512e8",
"assets/packages/quisi_core_lib/assets/icon/filters/4.jpeg": "5a552fbe702b1ca0c99a563f219b9308",
"assets/packages/quisi_core_lib/assets/icon/filters/Avatar3.png": "0fa683f287bfc4853ef9781c9b2f0b18",
"assets/packages/quisi_core_lib/assets/icon/filters/Avatar2.png": "6e36899ee42f2965f2c7dc076fa924de",
"assets/packages/quisi_core_lib/assets/icon/filters/Avatar1.png": "e9ea29978f2c545d15702f4f233da774",
"assets/packages/quisi_core_lib/assets/icon/filters/2.jpeg": "21b3c1aabc72ab85b14e12a73cfc1e38",
"assets/packages/quisi_core_lib/assets/icon/filters/3.jpeg": "327e6b6d0a9a2b9235ffca103e9e20e2",
"assets/packages/quisi_core_lib/assets/icon/salvati_vuoto_def.svg": "19627700dcaeff6f9c7ce011eceaf763",
"assets/packages/quisi_core_lib/assets/icon/calendariofin.svg": "f07f902db0eba38438d8d81a6575f5e0",
"assets/packages/quisi_core_lib/assets/icon/price_tag.svg": "2d88d077d693bb70993251c9ad17ef7f",
"assets/packages/quisi_core_lib/assets/icon/allaperto.svg": "6fc8ceae6b59cfe4aab6cfbe5da44f86",
"assets/packages/quisi_core_lib/assets/icon/ico_qr_club.png": "413b48b60f3eb2cdd2674dc77600d3de",
"assets/packages/quisi_core_lib/assets/icon/ordine_da_tavolo.svg": "64a11c706f03228bf2b069d1d5720456",
"assets/packages/quisi_core_lib/assets/icon/occhio_chiuso.jpeg": "22a4c3b586c4e0e92ceb869ab9d15cbd",
"assets/packages/quisi_core_lib/assets/icon/ico_ready.png": "15d9001bfb6a036549ef6503f7c6c2bf",
"assets/packages/quisi_core_lib/assets/icon/ico_vegano.svg": "e61ef9ea4dcab3f394a2b672496c30c5",
"assets/packages/quisi_core_lib/assets/icon/order_delivery.svg": "248359158180bbc1e51aacf49b33a244",
"assets/packages/quisi_core_lib/assets/icon/ing_filter_img_shape.png": "6d1fda0c854aaf6904dc506ad94ac1aa",
"assets/packages/quisi_core_lib/assets/icon/shop_bannerIco.png": "35d00723aa3d5863c68634bc0f9fea66",
"assets/packages/quisi_core_lib/assets/icon/ico_celiaco.svg": "4ff45741708118d72ac205f7ffadb22b",
"assets/packages/quisi_core_lib/assets/icon/ing_filter_empty_image.png": "8e3d5ef88bd2eef82136d7aa562578d3",
"assets/packages/quisi_core_lib/assets/icon/ordini.svg": "fc90569b077372c92ccbca2799e8969d",
"assets/packages/quisi_core_lib/assets/icon/alchiuso.svg": "2d9867db7c062fdbc3d17166b0135b14",
"assets/packages/quisi_core_lib/assets/icon/Logo_Google.svg": "686f8efa6e3e28e96d1c08399e8d353d",
"assets/packages/quisi_core_lib/assets/icon/shop_attivitaIco.png": "e79f9c3d585b780b382940965b5f8145",
"assets/packages/quisi_core_lib/assets/icon/occhio_chiuso.svg": "f78384436bf1c3ba6f3c8713a9528a0e",
"assets/packages/quisi_core_lib/assets/icon/intolleranze.svg": "8b1b1bc11d4744c906a807afca1373d2",
"assets/packages/quisi_core_lib/assets/icon/biglietto_prenotazione_vuoto.png": "80a687c3e0c8c1aea2c9058c22e7d695",
"assets/packages/quisi_core_lib/assets/icon/carrello.svg": "e5effdaa68ccfd97829bca48eefcd70c",
"assets/packages/quisi_core_lib/assets/icon/add-to-apple-wallet-logo.png": "fef8718c7d23e9acc09346e19080434f",
"assets/packages/quisi_core_lib/assets/icon/sole.svg": "1318f0ab523c63188c0320d8af989b25",
"assets/packages/quisi_core_lib/assets/icon/EdgeIcons_Regular.ttf": "5c37d88fbcc3736b88719d3e127c202e",
"assets/packages/quisi_core_lib/assets/icon/avatar.png": "86a0589ab4a7cf4debf0255ded8fb111",
"assets/packages/quisi_core_lib/assets/icon/allergens/soybeans.svg": "63bf9a7f6d8f6e5aa39582868f82e88a",
"assets/packages/quisi_core_lib/assets/icon/allergens/alcohol.svg": "86ebdc3c6c8769569baf5a108ece2a72",
"assets/packages/quisi_core_lib/assets/icon/allergens/honey.svg": "c35dac3df0cf728e8a77ff8283136d9b",
"assets/packages/quisi_core_lib/assets/icon/allergens/chicken.svg": "c0b1dff87e7978e1c4d06818d4d1a1db",
"assets/packages/quisi_core_lib/assets/icon/allergens/celery.svg": "108315ed29bca39aacc4009ee9a8b58b",
"assets/packages/quisi_core_lib/assets/icon/allergens/GMO.svg": "f9ef9754a5928f33cb78bab90ad1dcd2",
"assets/packages/quisi_core_lib/assets/icon/allergens/tree_nuts.svg": "5dbb56926cc436f412a410b1b938d6ed",
"assets/packages/quisi_core_lib/assets/icon/allergens/almonds.svg": "2439012d55d89bb97529f4f5517cccde",
"assets/packages/quisi_core_lib/assets/icon/allergens/dairy.svg": "e75ad63ab315c6f6491b2618a00663e3",
"assets/packages/quisi_core_lib/assets/icon/allergens/spicy.svg": "18b7f14bed1e4035076ce891202d676f",
"assets/packages/quisi_core_lib/assets/icon/allergens/clipboard.svg": "ff51ac9a44e4009bb1f8b8e56720648d",
"assets/packages/quisi_core_lib/assets/icon/allergens/corn.svg": "de02317db60ab4c92297220877bb105b",
"assets/packages/quisi_core_lib/assets/icon/allergens/sugar.svg": "e62c2b3aa7c948aedffb5de9960c731d",
"assets/packages/quisi_core_lib/assets/icon/allergens/mollusk.svg": "08db20fc1078dc747208550951b7d39a",
"assets/packages/quisi_core_lib/assets/icon/allergens/gluten.svg": "cb90dae7e67d3697d0a7639845bde25d",
"assets/packages/quisi_core_lib/assets/icon/allergens/mushroom.svg": "30565a8bc756f556a2d1fd440b1d33c4",
"assets/packages/quisi_core_lib/assets/icon/allergens/fish.svg": "c3ee75b10486979371384f72b3d3a852",
"assets/packages/quisi_core_lib/assets/icon/allergens/vitamins.svg": "c01bea1eb5b1c65542f03403c68df572",
"assets/packages/quisi_core_lib/assets/icon/allergens/crustacean_shellfish.svg": "07a67aef4a91982b930fdbb50a76298f",
"assets/packages/quisi_core_lib/assets/icon/allergens/egg.svg": "6f3a42ada6356c7c3c752ebb46925c6b",
"assets/packages/quisi_core_lib/assets/icon/allergens/mustard.svg": "72fcefa30cb31be8072a770e0036a19f",
"assets/packages/quisi_core_lib/assets/icon/allergens/sesame.svg": "4107f8c352560b9484037bfc0f4067a7",
"assets/packages/quisi_core_lib/assets/icon/allergens/fruit.svg": "5770653550d18ce5ddf831acb2d2846a",
"assets/packages/quisi_core_lib/assets/icon/allergens/chef_hat.svg": "324f92de37b28388eed126df7aeec153",
"assets/packages/quisi_core_lib/assets/icon/allergens/sulfate.svg": "5b86802bd2c922f6e2ae581e70d8f888",
"assets/packages/quisi_core_lib/assets/icon/allergens/lupins.svg": "eece9bfc12652147ae85b2f65262f2dc",
"assets/packages/quisi_core_lib/assets/icon/allergens/peanuts.svg": "c79353d0cf019b73f2b67d8cd74f5664",
"assets/packages/quisi_core_lib/assets/icon/allergens/fork_knife.svg": "dc07f4a4af61c83d9a5e15ec86f0f481",
"assets/packages/quisi_core_lib/assets/icon/allergens/weight.svg": "5ed4a2cc76b5e7d30dbc521282cb3da9",
"assets/packages/quisi_core_lib/assets/icon/salvati_pieno_def.svg": "0e7404856eb057c7734d85c6e765315c",
"assets/packages/quisi_core_lib/assets/icon/bodies.png": "e27bd9931e9c6f65faff21982243310e",
"assets/packages/quisi_core_lib/assets/icon/quisi_long_logo.svg": "5c601b196eb6781838866fa06b3d3c82",
"assets/packages/quisi_core_lib/assets/icon/ico_instagam_club.png": "fa90e1e7734e5bef1193daca074ad67c",
"assets/packages/quisi_core_lib/assets/icon/ico_telefono.png": "a54ce41be46021e143b3a32033028b65",
"assets/packages/quisi_core_lib/assets/icon/menufin.svg": "132356f0b25b315f9c488e980ec2cd7f",
"assets/packages/quisi_core_lib/assets/icon/Logo_Facebook.svg": "ce0c8188520a88e43c81e611847721ac",
"assets/packages/quisi_core_lib/assets/icon/occhio_aperto.jpeg": "65a33f2ad2f5aab0f189e045ebf30d09",
"assets/packages/quisi_core_lib/assets/icon/MyFlutterApp.ttf": "2a3964037a384f680af8c33c2b18948e",
"assets/packages/quisi_core_lib/assets/icon/biglietto_prenotazione_pieno.png": "592582cd2323b9ffeaa940b8e9af6854",
"assets/packages/quisi_core_lib/assets/icon/calendario.svg": "09a301c365614ba2f07bd74dfb11fad5",
"assets/packages/quisi_core_lib/assets/icon/granofin.svg": "1400ddd13f4c4f608dae0a8c49aa6380",
"assets/packages/quisi_core_lib/assets/icon/carrello_add.svg": "7961b3d0348abfc2d723711142436fe6",
"assets/packages/quisi_core_lib/assets/icon/Logo_Apple.svg": "00587615733dd4954be85d8bf79f1d6f",
"assets/packages/quisi_core_lib/assets/icon/shop_attivitaMapBtnIco.png": "e41bc50cd8d622619b0c2b3e7f272cc6",
"assets/packages/quisi_core_lib/assets/icon/diets/organic.svg": "e69d68562862bd33342dec9198d55315",
"assets/packages/quisi_core_lib/assets/icon/diets/kosher.svg": "ee6abb1ca8016967e7fdd273e4f7b9a2",
"assets/packages/quisi_core_lib/assets/icon/diets/vegetarian.svg": "2cadbd07cdf766f654610f2305f5eee2",
"assets/packages/quisi_core_lib/assets/icon/scatolafin.svg": "75315b53bf9be663eb4894a47705d31e",
"assets/packages/quisi_core_lib/assets/icon/add-to-google-calendar-logo.png": "054dc23a2bac701023550d57a495fef3",
"assets/packages/quisi_core_lib/assets/icon/carrellofin.svg": "aad8d783bf92442cc4f6495a8035c77b",
"assets/packages/quisi_core_lib/assets/icon/quisi_logo_trasp.png": "d739cfe74a272d3517f4dce010063452",
"assets/packages/quisi_core_lib/assets/icon/ico_delivered.png": "b80d9060e301a9fda29bbbc0346adccb",
"assets/packages/quisi_core_lib/assets/icon/quisi_logo.png": "7194bc72d2c6b3b148b47b00241c7c3a",
"assets/packages/quisi_core_lib/assets/icon/coin.png": "6845c2d6ca00288fc7c386d71a074a19",
"assets/packages/quisi_core_lib/assets/icon/luna.svg": "32dc492edf3c7a1e021242fcc3c1cc3e",
"assets/packages/quisi_core_lib/assets/icon/ico_lattosio.svg": "c044679d7b73ca88f6140e98c5446f4a",
"assets/packages/quisi_core_lib/assets/icon/menu.svg": "37fe965719a31f3b4eae0825d2dae53d",
"assets/packages/quisi_core_lib/assets/icon/price_tag2.svg": "51ec4ee84a77c97072bcebc0715e0f53",
"assets/packages/quisi_core_lib/assets/icon/shop_bkgImageIco.png": "ee9783b2b64ad12a8e679215a18982b5",
"assets/packages/quisi_core_lib/assets/icon/order_pick_up.svg": "6d976e096cecebb83386f6a1d4b392e7",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/audios/horn.mp3": "958974918b3b46a92a98f660da82b0ed",
"assets/assets/audios/sweep-trans.wav": "e1170564eb9917d4c35f67d3119374b2",
"assets/assets/audios/money.mp3": "a834aa50fa94be12a4c00553a98d3746",
"assets/assets/audios/money.mpeg": "e8b9207bd6c0689f9df1a3c186985ebc",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
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
