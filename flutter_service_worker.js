'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "1a6ad6647c994b3e604dba123f5bfdf7",
"/": "1a6ad6647c994b3e604dba123f5bfdf7",
"main.dart.js": "71118d83b23671212fe42f5fea127ecd",
"manifest.json": "dcd090a2db5fe64045eebc7f5d2db420",
".git/config": "2c6781de0b09b5befabdda0ef4c34412",
".git/objects/a0/e059d9b7bff786873fa5c8d7560a17e43407c0": "e2e08492c7f49c3fd568a9106e125ea6",
".git/objects/0a/e195bda0182b011f0dfa4dcdc3444f5bf8ec42": "c0211f5685d293fd52b78bd0072dbe7c",
".git/objects/0a/fe3337e403cccf4077efb8e813cd45d830bdb7": "c490befe6cbfc978a8ca59b19254f970",
".git/objects/1c/b188e2b3f9a4c234726cc6244e49276d40e061": "cab5a6d0b4e62ffb6ab8793bd36a9bf9",
".git/objects/71/3e39fece7b1ddf1982016872f36ac2874aca9d": "8b0b7305df3cc746774a23b9f3e0c388",
".git/objects/be/aa63af83c51259ae58a3f2408826d16ef664aa": "5b8fce1a9c0f54879131bf8a00dabb17",
".git/objects/ed/52e29d05e2acbd3a0b2abc8febab5a9aaadf78": "e4f0415319c0676170394f3f4a9ac2a4",
".git/objects/ed/3803a7300f5be66d8384ff6f1762228060f6e1": "feecbdbfd10b7ab7a9c66e15fa65ba00",
".git/objects/e4/39e60b5402ffb50dda3b29e62379919b5c79df": "17e5d07e5ca0fd77b7f6c45ed3bffadf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/f4/cc0fdde7ff9e4253227b22358237b0c2c73b28": "589150669b618888f526f3487308cb9f",
".git/objects/f4/4df2f974aa2cdddc22bdef5bba6718c7d354fb": "59b5cb0076a31bb653ca458ba781403b",
".git/objects/f7/2ccc05f8d28af62de3f0aac17a4fd697883d83": "f7d1f51f4717ddc226a81c4ec5190073",
".git/objects/86/37601ca684eba84467bdffe536c90d740da746": "c19bd948d143354c370a4e50796cd240",
".git/objects/13/bfd6112b9482470507bb60b353bed368abd823": "8aa7259f8779a5e3021175e58badaf98",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/89/d1fb999aa3ff17f3070079cc821f1ef82b051f": "28666424a4b97e986d0fea1ef2896b37",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/4a/c43cfa49f5519a2af1de7ab5a48329bd87df11": "36af84b1f4248c8599cfc601bf86acba",
".git/objects/7b/b5447abad53fca4dc9f45f1b6053f33e968fe3": "3bcb536f6f76d1750d8b692ca9701906",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/68/18b48ff706e67ec7658608419dc712a84ce0dd": "42fae2020d41ae6fd6bcb83f69b99e63",
".git/objects/3f/fd2d8ce47316df4a227c1aff7e3be4987a2572": "1360c2708026a6a09fa2c1d889c19896",
".git/objects/8a/8f13ba36e28cf824d87dcb846acae83463c3ea": "c71140147e6443ab6801844434e12459",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/5f0937af49a223e9cb49d302177752b6274ae3": "15ba060b091ebc7213dd898e6af544f7",
".git/objects/fc/f1f847c72803abb4e9ce321bb7a02d37a8eebf": "8bd1800d99003862be9d33d0e129214b",
".git/objects/9c/71764c3bd5b5235fa16eff1a2ae420c558ea78": "0ca9c08e2de1b78c1bad99de3487efac",
".git/objects/cd/0953b5c1ceaf7bdc46811aa42a8d205227a28a": "aad4e451cdc0c6f54010f36e326e4dec",
".git/objects/bf/4e546da229623025d8bff1006594e239209029": "f7ac3c52e7f38e5cf0ba4d9a4a017054",
".git/objects/a7/3fa49a4c043e98eeaffe7452b6329cf9d63a9d": "49fb20947e58099497375ec1df76ad99",
".git/objects/01/91134805df0716884439d9616b0396e4c6ac47": "05e660edde5f0f316ffe4a57405db54c",
".git/objects/01/c14a66e454cd530a9ce27224e5110313737643": "51c96489cc3e9c5df99f2022fad1e1f2",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/25/1f84f508b8f715913bd36efee234cce1b5ef38": "d32e21ac5210df181ac83e1edcb882d5",
".git/objects/25/8769d3fe14dced48c782795ffa2690af7ed47d": "9eb45835679de48f5fe9fc07de9c07cb",
".git/objects/67/bc0ed38ef4da85e12d0bd6ff18ab623fe1ee57": "82b5844e85afa1bdf96a1f370669e3bb",
".git/objects/d0/e1a9eb9f5e7db7191124998faabd6e452b691c": "38d767037be4aa797cf11aebbb24baf9",
".git/objects/51/45f555c3d86b16788f0587a164c0ba2b193639": "a00dcfdb3f691bbcfa7ac49c85b29161",
".git/objects/75/16110a72d272d280befc90a12e2709eb24f91f": "117b30f255394f2988a614f91eae95cb",
".git/objects/d7/1529362cc5c07dd50a95348fe0365e9fc2b349": "552ec1117ea21f2ab276eb5bf15171af",
".git/objects/69/d08de79483ae3dc5bf6a434d85df8b765fead0": "c18c7b3f03e5a735e9f46f547edc3f92",
".git/objects/69/63ad8f7173ec8b864cfbf8c37e619f4a2f2733": "b8dd6632aff71d5fb287af38403e6ed8",
".git/objects/5f/16c6a221c41ce0c263f5f719182fa6a72cff7b": "df45f456c294b71740e772cfd2145435",
".git/objects/c8/d0620853b342de71cbe51a349fc548663f0786": "335309cebbcfd26a0ec3159d411d7207",
".git/objects/5a/0e648d5c4b97ce87332b14720bb9ef73e57623": "0922c1a15d084808fcec42da8dc89f2b",
".git/objects/f3/2ae77216cde6b8142726b86fb876a64d97c7a7": "bdeb9e0dc128c587f27d1036c1e064fd",
".git/objects/04/53c169923efab5310a1ebb954604d1ea8454e4": "385b0aa1e6e3832f7086c8835813e407",
".git/objects/1a/5b7096356aa4f42484898fc997c2fb28d0adb4": "503e9d4e6bcd570cd1b9d4369fd559c2",
".git/objects/c6/bcf04cbe04ac1bd184ea00ba71baa5b61079df": "fa327b917dca142f7cac0c975d83a4e6",
".git/objects/c6/750f6f3aeee82a52899e8614e7cbf6690440fb": "8d517e1608262b3154aaedc3a1d456c0",
".git/objects/97/4f6e7eeafb52df7bca7bde4d61944b31dad05c": "6ea3065dbf97ce7cbec7bfa769c54151",
".git/objects/46/e291e4782bf5813bc42b3a2f7d340da185cf35": "6e596207eb6afb0714df7fd927ea6c3e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/98/01a5e07e1d3d7788a50c014f43bc4afd2d5416": "f282deb163f01e24ad4e44f31a73ef37",
".git/objects/6f/f34c251323085617bffdcffee6c6d4e7487df0": "b31e8eb3b9614acea9add4ddea080c86",
".git/objects/c3/2edda8a2caf339af1bc4138f6c47c40ace1d41": "310b1be307608406677d4d3ce2c247f3",
".git/objects/40/4c097db986cb7b24a096651532fb4a2f3dfaae": "87392888ea2df6d88a558c146172cc2d",
".git/objects/14/12e18e27449b013330b52b89de3f5f67d14d9d": "b78ddc71fd6557602435593c45b31f67",
".git/objects/14/84302a32be0abc7b82e60aaac3b0a2241ad500": "20ff0d30b0bda902d1f6dfac783ad259",
".git/objects/36/999052f708305a02ce93ce361845a37ffc4662": "31e7a8a57e5634ef0305d92f88dd7272",
".git/objects/4e/0fe567724c053162010451a73e8ebaf888924d": "1ee115c06c33c1baa6ff106849158272",
".git/objects/7d/bedd0b9f3bf0eac0f27f4a4c423fe57843436c": "98a048ec3d5d44a720fe30efcf8d2750",
".git/objects/b9/f9a5bf006cbb51385b2253fbdeb33367472606": "5de945c025e43ade53da18eb730f4bf2",
".git/objects/b9/59fa3a04e9cd031fb52f1f841b3d60a54b4720": "b877701cae33c1e21d6303eafff585fb",
".git/objects/38/71a9275d4d000cd41dbeb26ddb1d54a3fbb3a2": "175cd5a3cbbd2c5e47ccfbf4bc039448",
".git/objects/db/35182a239222e3d997f33b553534540277c01c": "8f510ff33f8a8ec5c26bb788990455e9",
".git/objects/95/d41ff86e1b4df275401c39f3346d8ebe363fce": "bbe7d4a0889fa8893bfa7aee90fdfc4a",
".git/objects/95/70ede91f936977f9cddb5d7abfca48e9f226ce": "2b51b628aed6e83a1e9dbb6446d2bca7",
".git/objects/8b/e7841aa702a2ebcfad88274cc7e4834dad904e": "417a90f037f73b4f3318ab3838dc3d89",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/b5/8cecba7da8a94ace9666dece27e4cef41140fd": "3688dce274a7dab9ab665c78d724c1a0",
".git/objects/1d/6f9dd0bb51a668a1b3acfe1c383009dc008c6e": "c48a5d8953addf6f88ecd64483524936",
".git/objects/83/231f91061ac4256c4cf68bedfd65c25e8c4165": "c97161c6f1da2b6f358da892cdda81fd",
".git/objects/0c/83ace9a8088ba44e5953dc9c2c0dfe3cb84b3e": "b6f3c12c292c88d628618ea27e1e398c",
".git/objects/94/62f0a85b713dd96a5231d4ab66ae12cf5e417e": "4c2aef4a16ab9fab3a1d6c33cdc81461",
".git/objects/82/479423693f0b41f4050d39ce686530c12687c7": "9a4291906757df5ff39fca10d4afd544",
".git/objects/82/b6e77e64da5c5b17e878f5c5900176ec166ec3": "2f3cee6437a9cb2c466be2a3a64208f4",
".git/objects/d8/39acbaa5a9ba47a33be497074725d5c5ca8ff8": "dc72c3b93b00e1bf7d7333b6e2357050",
".git/objects/cf/a7f1f66cd7091f3881a5dc4505537ca3358ef6": "52f3221c81572aead6bebb3a5a50ffd5",
".git/objects/6b/ca941c138d0c3b2c1a8f0e0ea8aa1d5f6e977a": "394a0515564f635931f3efd5673983fc",
".git/objects/b8/8274bc56b7a4090c0721ee50d10ed8df48e23d": "fa15e63a4d1bfc202253e64a178fd9e0",
".git/objects/c4/11435ab2ba9d9c2606e4f6e391be060cb76adc": "48cb068ef9416c55a499776238cd9943",
".git/objects/c4/9686649986fc08995207783a58bfe568f5367d": "bbb3cbeb1f663e98bdd9e7f15846be2a",
".git/objects/9f/2d13facb2c3373ed57646cde5e8f815fd5854f": "24590546bdff21318701f73b84ad1fcc",
".git/objects/93/1068513d621c1a97db0d828db5cce4737593eb": "3d3a59165fcc8ff2010a6e5742604f11",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/11/1244baae9013acc74204d27d9b5caed127b507": "035860e62aa3c50cf1a738435c435e9f",
".git/objects/52/c96c46a43bbb1047020ac30fd65b15cbe57d32": "797b37540250182f37297b6c400cead3",
".git/objects/b2/7d3f2cc6c8d2c4816df5986a62d5fa482fe69e": "e3730428c990717f38f305f6f4d8083b",
".git/objects/b2/a2d8ab8bccffdaf7749627b82c12d56d649445": "04268ccf396c23bce8e2cbf1653ff03f",
".git/objects/21/b256ca5d7e15afbd59b22d07226320ecb6b657": "b9a7a425ccf690519ee4b618430e7d32",
".git/objects/2c/879ac546620dc56c36b1227b2625bc15e12fb6": "9b6622b9eaefd0f54b70a27df69a36ff",
".git/objects/76/820384c68637e7367ab69e7900c459f3af34ba": "a60c7223b3b35d04be49ad094e466c8a",
".git/objects/0f/381ae87520de9c0491cda177b5a62b633a7659": "2e99cf89b3a0689a8eb5fb254e6f6352",
".git/objects/e7/8576b942c259f82226e3fcbdef69d62013cbd5": "2cff0f1d3ad7c4a7d5ae2214ad617445",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/1e/a35394974151fbc5ae710dbbfbf8f6f3d17ade": "f359e4aab696268ac18c544492e83113",
".git/objects/6d/1ee2846d109f2944da24735f13b88372559835": "a8a81988be58bfe124a2465b52667deb",
".git/objects/54/72eb670e0a63f1c669c57841b7e9ec54c7d9cf": "c672cf25704b9ad48683106fe01ab82f",
".git/objects/f2/dc2e213edac524027986e3c2416a4e53ada1a4": "5fae261b517eca0b34f8ede36f076ca8",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/index": "e5635f9f2afd78cfc37bfaed1f8ae52f",
".git/logs/refs/heads/master": "11f49c86cc4ef788c1b7909eb40180b1",
".git/logs/refs/remotes/origin/master": "036c5ad237afca03ccbe7dfa0903dd3d",
".git/logs/HEAD": "11f49c86cc4ef788c1b7909eb40180b1",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/master": "8b76e1a1ee263c952e572de532298c63",
".git/refs/remotes/origin/master": "8b76e1a1ee263c952e572de532298c63",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
