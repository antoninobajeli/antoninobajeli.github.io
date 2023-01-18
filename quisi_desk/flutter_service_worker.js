'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ac9ffb552b56d978bf0b08e232d02cff",
"index.html": "35b3edd3532d48b461194e4b0434da19",
"/": "35b3edd3532d48b461194e4b0434da19",
"firebase-messaging-sw.js": "5c5b7cb117d5caf4b5f7699dfb37a6ce",
"main.dart.js": "f6993aaabcc3d32efb36d3c1027c6c7c",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5f9441042e15e154d6e47b81e6460e1d",
"icons/Icon-192.png": "88033c8efdd27971e47f5123f16f4175",
"icons/Icon-maskable-192.png": "de00b5c54c333c0abe8268b749748c34",
"icons/Icon-maskable-512.png": "8a6e9b1f12baef86e55be20ab23eda9d",
"icons/Icon-512.png": "4ecfd0adbe622daf28d1354d8f4b2a4a",
"manifest.json": "d0758b74a06eebf0f57234e290c8d0c9",
"assets/AssetManifest.json": "2e722e381740c632dc64cf98292c28b0",
"assets/NOTICES": "81fc843a9ac2f6814cdffbaa141aefb6",
"assets/FontManifest.json": "96bc6a1bbccd7c216caa66d1414927f6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/flutter_signin_button/assets/logos/google_dark.png": "c32e2778b1d6552b7b4055e49407036f",
"assets/packages/flutter_signin_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_dark.png": "937022ea241c167c8ce463d2ef7ed105",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_light.png": "8f10eb93525f0c0259c5e97271796b3c",
"assets/packages/flutter_signin_button/assets/logos/2.0x/facebook_new.png": "83bf0093719b2db2b16e2839aee1069f",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_dark.png": "ac553491f0002941159b405c2d37e8c6",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_light.png": "fe46d37e7d6a16ecd15d5908a795b4ee",
"assets/packages/flutter_signin_button/assets/logos/3.0x/facebook_new.png": "12531aa3541312b7e5ddd41223fc60cb",
"assets/packages/flutter_signin_button/assets/logos/facebook_new.png": "e1dff5c319a9d7898aee817f624336e3",
"assets/packages/esc_pos_utils/resources/capabilities.json": "ae5c3288b81125ab9c54fff02d30387e",
"assets/packages/flutter_multi_formatter/flags/png/tg.png": "ae49203ef3de781e34c2b1ab072b18bb",
"assets/packages/flutter_multi_formatter/flags/png/me.png": "451723e36ee8fb7052985302601f0ee7",
"assets/packages/flutter_multi_formatter/flags/png/la.png": "8437e3b007e993d0689452dbef8dec5a",
"assets/packages/flutter_multi_formatter/flags/png/mr.png": "c290de341ec04121f81f1d92128f65b3",
"assets/packages/flutter_multi_formatter/flags/png/ni.png": "41e2831687e9997fa4d5f4eb0700cc84",
"assets/packages/flutter_multi_formatter/flags/png/lv.png": "4370f6f09eecc21db000bd09191f3ff3",
"assets/packages/flutter_multi_formatter/flags/png/om.png": "b16ebc34417eb7a6ad7ed0e3c79a71c0",
"assets/packages/flutter_multi_formatter/flags/png/af.png": "aca8b607d5f7f7de283db4a20ca3f845",
"assets/packages/flutter_multi_formatter/flags/png/cy.png": "0a99780a720e253aac2e45e476458ba8",
"assets/packages/flutter_multi_formatter/flags/png/bj.png": "6a699b2a3de19ea9cbe7742a7eb742b6",
"assets/packages/flutter_multi_formatter/flags/png/aq.png": "d18febf275fd13385c1915ab0165af86",
"assets/packages/flutter_multi_formatter/flags/png/cn.png": "9d1e0784dcefa3513fb60071df2e04b8",
"assets/packages/flutter_multi_formatter/flags/png/gb-sct.png": "58267a46e412d0e2e92d76b00f3bddb5",
"assets/packages/flutter_multi_formatter/flags/png/co.png": "1f1228902d0fd2b6fd23d5ead00860d3",
"assets/packages/flutter_multi_formatter/flags/png/cx.png": "d5a6ca51e490d03b06a647d652d3fdb0",
"assets/packages/flutter_multi_formatter/flags/png/ag.png": "62c9310edb9dc04193b3a24b4edce8e2",
"assets/packages/flutter_multi_formatter/flags/png/ms.png": "438b3ae48465543239a679ef915378de",
"assets/packages/flutter_multi_formatter/flags/png/md.png": "d579fff3f3b7644d54cdad3fbcdd501e",
"assets/packages/flutter_multi_formatter/flags/png/zm.png": "7d304f13f136589bd6f825c07237676c",
"assets/packages/flutter_multi_formatter/flags/png/vn.png": "0feb7f0e73d4d3802e45cfb1bb1544c6",
"assets/packages/flutter_multi_formatter/flags/png/tf.png": "5cc7bee04686cd239815544e4c75a254",
"assets/packages/flutter_multi_formatter/flags/png/td.png": "11d75e01b66659fe74372765f7c82521",
"assets/packages/flutter_multi_formatter/flags/png/yt.png": "590296857fc9d61220d0155243075daa",
"assets/packages/flutter_multi_formatter/flags/png/lb.png": "46b6c0d58c4b99070e190ce95a7250eb",
"assets/packages/flutter_multi_formatter/flags/png/mf.png": "590296857fc9d61220d0155243075daa",
"assets/packages/flutter_multi_formatter/flags/png/lu.png": "31349218e6c2a6e900a3a83baa8f61d2",
"assets/packages/flutter_multi_formatter/flags/png/mq.png": "ae9ad4364a913e81c9787560c3b167fd",
"assets/packages/flutter_multi_formatter/flags/png/cz.png": "bbafde1489e7a263006c9c6dbf878743",
"assets/packages/flutter_multi_formatter/flags/png/ae.png": "1439ab85e1ef23242fe7885da8a19091",
"assets/packages/flutter_multi_formatter/flags/png/cm.png": "2f8725d49955a64285d7bbd2bff02e2d",
"assets/packages/flutter_multi_formatter/flags/png/bi.png": "2c1d426f4b941b9638303c34145ba672",
"assets/packages/flutter_multi_formatter/flags/png/ar.png": "0836bad77d30f355fc2064f6df069b8c",
"assets/packages/flutter_multi_formatter/flags/png/as.png": "d3ee7d8aeade5f87a5ab6ea1c53c1181",
"assets/packages/flutter_multi_formatter/flags/png/bh.png": "7533d290739c20bd2d0250414a74c19d",
"assets/packages/flutter_multi_formatter/flags/png/cl.png": "2ed34ecb10a528bffc6908fd65996d2b",
"assets/packages/flutter_multi_formatter/flags/png/ad.png": "77ce19646f93c63a2387f2840bc9686e",
"assets/packages/flutter_multi_formatter/flags/png/mp.png": "895e2aea9e8a9fb4a3db09ba75b2ae11",
"assets/packages/flutter_multi_formatter/flags/png/lt.png": "d79eb564dd857c66ddd65a41f4cdfe4e",
"assets/packages/flutter_multi_formatter/flags/png/mg.png": "4e20926e9ba5478d189f28adc813cd15",
"assets/packages/flutter_multi_formatter/flags/png/lc.png": "32e5433954c7a99cd53c1e67f2ac604a",
"assets/packages/flutter_multi_formatter/flags/png/tr.png": "ea664a8b19fa4bd81145900d57e53fda",
"assets/packages/flutter_multi_formatter/flags/png/ua.png": "2dc383ba79588bd5a15a519a26ef204a",
"assets/packages/flutter_multi_formatter/flags/png/tv.png": "d45cf6c6f6ec53ae9b52f77848dc6bf9",
"assets/packages/flutter_multi_formatter/flags/png/vi.png": "bfe5691810c27983346bf52eb5149bb4",
"assets/packages/flutter_multi_formatter/flags/png/mt.png": "5eecdcd5c105f26d27903fbb2a1d8b36",
"assets/packages/flutter_multi_formatter/flags/png/no.png": "13708df2028ac76d28ec0eb35383ea4f",
"assets/packages/flutter_multi_formatter/flags/png/mc.png": "6375a336b1fd53d0e918ae945523078c",
"assets/packages/flutter_multi_formatter/flags/png/ch.png": "fe8519b23bed3b2e8669dac779c3cb55",
"assets/packages/flutter_multi_formatter/flags/png/bl.png": "072a0baffbf28632650627d339bf9c5b",
"assets/packages/flutter_multi_formatter/flags/png/aw.png": "410a04614d4176ea71f886f823fd35b5",
"assets/packages/flutter_multi_formatter/flags/png/bz.png": "820836c383ff34a06d3ac9f4bff68bd4",
"assets/packages/flutter_multi_formatter/flags/png/bm.png": "c348252e17350e0f8ef4f52e0791ca62",
"assets/packages/flutter_multi_formatter/flags/png/ci.png": "ad0d9306aab54c24a6b2146c3a74b954",
"assets/packages/flutter_multi_formatter/flags/png/mu.png": "ac855f82fe1038c119a25a07998fbb83",
"assets/packages/flutter_multi_formatter/flags/png/us.png": "2171e21640cef63bd1296158f01a70cd",
"assets/packages/flutter_multi_formatter/flags/png/tw.png": "ec53e0e988f816e4841bd1ab3c27ed04",
"assets/packages/flutter_multi_formatter/flags/png/ye.png": "026c7294278c64c3b39dc085e8a96f3c",
"assets/packages/flutter_multi_formatter/flags/png/mw.png": "bbfeb66a5eed87cb6e72ea2686857df1",
"assets/packages/flutter_multi_formatter/flags/png/nl.png": "1cf2f5a0a4421b2f0c8597c91c354d80",
"assets/packages/flutter_multi_formatter/flags/png/ls.png": "ca6e2dfcf32adaea9d5e93d5391fb373",
"assets/packages/flutter_multi_formatter/flags/png/bo.png": "509a86a7d4d578c257766b8a06ef716f",
"assets/packages/flutter_multi_formatter/flags/png/at.png": "8bc220081abdf5fe2139dcf052fb922f",
"assets/packages/flutter_multi_formatter/flags/png/ck.png": "882bc3896cdd040757972bcbbf75e4bb",
"assets/packages/flutter_multi_formatter/flags/png/by.png": "c5d14943250d54b4a630794c5648c687",
"assets/packages/flutter_multi_formatter/flags/png/au.png": "63084e9484c0b6db451a1d68ad5adeb9",
"assets/packages/flutter_multi_formatter/flags/png/bn.png": "1f1c5a29f9a6fd77963f7bb3de5946c2",
"assets/packages/flutter_multi_formatter/flags/png/ma.png": "f60e4b79249dd35e15514d0148182e23",
"assets/packages/flutter_multi_formatter/flags/png/nz.png": "d22c137d0038c20c1fa98ae2ed3729b0",
"assets/packages/flutter_multi_formatter/flags/png/lr.png": "d64e3e67b0c90e2ef83ed9868f7c29b4",
"assets/packages/flutter_multi_formatter/flags/png/mv.png": "018b26f7521c2b3db9624f40e9e1f563",
"assets/packages/flutter_multi_formatter/flags/png/tc.png": "0faabda1411738e572144aaeed24aadd",
"assets/packages/flutter_multi_formatter/flags/png/ug.png": "18981ef65248d3bb97deda3fc30b7030",
"assets/packages/flutter_multi_formatter/flags/png/tt.png": "2633904bd4718afeecfa0503057a7f65",
"assets/packages/flutter_multi_formatter/flags/png/pl.png": "68252741ff7ad66838559050eb9c6b96",
"assets/packages/flutter_multi_formatter/flags/png/rs.png": "b8ef69ae6caf134436c2756f65736433",
"assets/packages/flutter_multi_formatter/flags/png/in.png": "6811ad48652c371323b8a540703ddf39",
"assets/packages/flutter_multi_formatter/flags/png/ge.png": "4ef3f738568d8503bde5f647e77cac2e",
"assets/packages/flutter_multi_formatter/flags/png/gr.png": "efeed503130172fadbace1481caab4bb",
"assets/packages/flutter_multi_formatter/flags/png/gs.png": "42f0c6f9ed997ae6902823a8418ed3b3",
"assets/packages/flutter_multi_formatter/flags/png/gd.png": "7d4b72f73674133acb00c0ea3959e16b",
"assets/packages/flutter_multi_formatter/flags/png/io.png": "d4910e28f0164bc879999c17024d543c",
"assets/packages/flutter_multi_formatter/flags/png/hk.png": "3be1f46b75533ab2d423fe274cc398f0",
"assets/packages/flutter_multi_formatter/flags/png/kp.png": "8fcc8f2fc646b484b4a47cdc0ff21cab",
"assets/packages/flutter_multi_formatter/flags/png/gb-nir.png": "09af1c5f1433c02e97a95286ce24f4d4",
"assets/packages/flutter_multi_formatter/flags/png/kg.png": "660be92bf4794cf3207e33005212f272",
"assets/packages/flutter_multi_formatter/flags/png/pm.png": "590296857fc9d61220d0155243075daa",
"assets/packages/flutter_multi_formatter/flags/png/sv.png": "753e9326b9b68202b481b88dbb14e2d4",
"assets/packages/flutter_multi_formatter/flags/png/re.png": "590296857fc9d61220d0155243075daa",
"assets/packages/flutter_multi_formatter/flags/png/sa.png": "c1bcb7b3a1dbff8f6fffb9929f458ea1",
"assets/packages/flutter_multi_formatter/flags/png/sc.png": "fce9893562cbe99d2e62a46b03e42007",
"assets/packages/flutter_multi_formatter/flags/png/st.png": "5abecf1202ef9f7b33bdb9d0e3913f80",
"assets/packages/flutter_multi_formatter/flags/png/ke.png": "be246664f01fa71c4b8a359305bf6d36",
"assets/packages/flutter_multi_formatter/flags/png/im.png": "df5f4c630542e241989ac64324374e42",
"assets/packages/flutter_multi_formatter/flags/png/kr.png": "938f9cb1029a71863e88011f3e79a00d",
"assets/packages/flutter_multi_formatter/flags/png/gf.png": "91f3e592fea6812f87ca5e5994924230",
"assets/packages/flutter_multi_formatter/flags/png/dj.png": "b3887992b38f208e22159d34b7cb36b5",
"assets/packages/flutter_multi_formatter/flags/png/gq.png": "7ee7587ec0dcf50180ddaad9cbb10cac",
"assets/packages/flutter_multi_formatter/flags/png/gp.png": "590296857fc9d61220d0155243075daa",
"assets/packages/flutter_multi_formatter/flags/png/dk.png": "1c6b350f84ce03775de43f8dadb3dd6f",
"assets/packages/flutter_multi_formatter/flags/png/gg.png": "c9d9c382e727a7a867fa824a0dd74d56",
"assets/packages/flutter_multi_formatter/flags/png/il.png": "5497e2fc32b1174d37f9bbbeacd6265b",
"assets/packages/flutter_multi_formatter/flags/png/pn.png": "20a24767371c336d18ad9800c523c45a",
"assets/packages/flutter_multi_formatter/flags/png/sb.png": "12cccb421defca5c7a4d19661f98f06f",
"assets/packages/flutter_multi_formatter/flags/png/py.png": "4dca66b598604fb3af9dee2fd9622ac4",
"assets/packages/flutter_multi_formatter/flags/png/ru.png": "7eb6cedfbcc7f6448e54850279ff5baf",
"assets/packages/flutter_multi_formatter/flags/png/kw.png": "ff36685c5fa06a2896307a5074e74914",
"assets/packages/flutter_multi_formatter/flags/png/do.png": "a877d29919ed6e1814b07835d7806f61",
"assets/packages/flutter_multi_formatter/flags/png/gt.png": "5b45ad96fdb90c56d2cd39abefd394d0",
"assets/packages/flutter_multi_formatter/flags/png/gb.png": "09af1c5f1433c02e97a95286ce24f4d4",
"assets/packages/flutter_multi_formatter/flags/png/gu.png": "99e5df9e745605fbb1f93155535a2964",
"assets/packages/flutter_multi_formatter/flags/png/je.png": "04ae403448836c13eaddd26fa9e64d55",
"assets/packages/flutter_multi_formatter/flags/png/hm.png": "63084e9484c0b6db451a1d68ad5adeb9",
"assets/packages/flutter_multi_formatter/flags/png/sg.png": "a90e323283257b28b19372e19bda950d",
"assets/packages/flutter_multi_formatter/flags/png/pk.png": "e7bb9a64f3581f8f2d5aa93489009a80",
"assets/packages/flutter_multi_formatter/flags/png/sr.png": "1b7f101242df10cf44ef9b91acd4de97",
"assets/packages/flutter_multi_formatter/flags/png/se.png": "d96d54ba355a0427d2dc84e380c56e2c",
"assets/packages/flutter_multi_formatter/flags/png/jp.png": "d843ce06dae06e8cf9780b71d6e3d43b",
"assets/packages/flutter_multi_formatter/flags/png/gw.png": "806f63c256bddd4f1680529f054f4043",
"assets/packages/flutter_multi_formatter/flags/png/eh.png": "53c935334ea149b54d38341cacb06a17",
"assets/packages/flutter_multi_formatter/flags/png/dz.png": "e8359823a7ce2e1b2d1ef79361bdbebc",
"assets/packages/flutter_multi_formatter/flags/png/ga.png": "7a9bd1b751a4c92c4a00897dbb973214",
"assets/packages/flutter_multi_formatter/flags/png/fr.png": "4d9d99a113066b97f91654f17d671dac",
"assets/packages/flutter_multi_formatter/flags/png/dm.png": "abcbefc6234d640787ef0f0cbfd78c32",
"assets/packages/flutter_multi_formatter/flags/png/hn.png": "5a183482f4faea009e4d524c1e470397",
"assets/packages/flutter_multi_formatter/flags/png/sd.png": "40572a05b7cd8ea53cee59c6be331588",
"assets/packages/flutter_multi_formatter/flags/png/rw.png": "0bd92f502b566eb99a537e88e0c5294f",
"assets/packages/flutter_multi_formatter/flags/png/ph.png": "158bd50b6f2d18f398e8600f6663b488",
"assets/packages/flutter_multi_formatter/flags/png/ss.png": "bfc79aa44e6d2b026717f7aae4431639",
"assets/packages/flutter_multi_formatter/flags/png/qa.png": "db8bdadc6a164ef1e4f1deda1e9fb965",
"assets/packages/flutter_multi_formatter/flags/png/pe.png": "0291aca80c2a0f52d66177d16e0da63c",
"assets/packages/flutter_multi_formatter/flags/png/pr.png": "a55695e2970e758c9b2f468275e548c8",
"assets/packages/flutter_multi_formatter/flags/png/si.png": "9fa57dc95640bcd67051d7ff63caa828",
"assets/packages/flutter_multi_formatter/flags/png/ht.png": "a49a27479ed8be33d962898febc049f1",
"assets/packages/flutter_multi_formatter/flags/png/es.png": "28c7e07bba944889c1870dfc88a4c6a8",
"assets/packages/flutter_multi_formatter/flags/png/gl.png": "c36a016c88239ab5815e8ef2674182fe",
"assets/packages/flutter_multi_formatter/flags/png/gm.png": "fc1129765b7fe093c978e83cbb0f9de1",
"assets/packages/flutter_multi_formatter/flags/png/er.png": "300cbfb7dda5e2eea87e9b03660a6077",
"assets/packages/flutter_multi_formatter/flags/png/fi.png": "b267e5dee2f81cd260b74cd6f4a80921",
"assets/packages/flutter_multi_formatter/flags/png/ee.png": "d2beb66602072a33aa332ac906241838",
"assets/packages/flutter_multi_formatter/flags/png/kn.png": "8b078bf876eca8c26e471dbcd74f4058",
"assets/packages/flutter_multi_formatter/flags/png/hu.png": "ff1d0e2bc549da022f2312c4ac7ca109",
"assets/packages/flutter_multi_formatter/flags/png/iq.png": "9434c17a6d4653df965e3276137764a1",
"assets/packages/flutter_multi_formatter/flags/png/ky.png": "bacc27cd23c1e359244533ecb9043de6",
"assets/packages/flutter_multi_formatter/flags/png/sh.png": "09af1c5f1433c02e97a95286ce24f4d4",
"assets/packages/flutter_multi_formatter/flags/png/ps.png": "e3e006d28f6b72169c717c1dba49b4d5",
"assets/packages/flutter_multi_formatter/flags/png/pf.png": "2bcb58685c72a0ea189ed6f24787fcd8",
"assets/packages/flutter_multi_formatter/flags/png/sj.png": "13708df2028ac76d28ec0eb35383ea4f",
"assets/packages/flutter_multi_formatter/flags/png/id.png": "20a48e5d6a67edfcae769c22cead8b75",
"assets/packages/flutter_multi_formatter/flags/png/is.png": "9fce179e688579504fb8210c51aed66d",
"assets/packages/flutter_multi_formatter/flags/png/eg.png": "f15be21bf64894f0c0db33336558fd64",
"assets/packages/flutter_multi_formatter/flags/png/fk.png": "f6489fb8240437330e0cec337c67ea3e",
"assets/packages/flutter_multi_formatter/flags/png/fj.png": "eab0bde840b3aedac9fade235301123c",
"assets/packages/flutter_multi_formatter/flags/png/gn.png": "3aa100d1196e50836442e4e41f56f866",
"assets/packages/flutter_multi_formatter/flags/png/gy.png": "64f3007da6bdc84a25d8ad6b5d7f3094",
"assets/packages/flutter_multi_formatter/flags/png/ir.png": "a84a156345dadcab5aeda5db9462447c",
"assets/packages/flutter_multi_formatter/flags/png/km.png": "c631326a464f21c51fbfd767be9bcf39",
"assets/packages/flutter_multi_formatter/flags/png/ie.png": "3882cc83555457cd3cdfbf1a285f7d39",
"assets/packages/flutter_multi_formatter/flags/png/kz.png": "caba66830ed539d3f86431ddf4006e72",
"assets/packages/flutter_multi_formatter/flags/png/ro.png": "4fcdf6021d56e82f0067a13e6cbd78a2",
"assets/packages/flutter_multi_formatter/flags/png/sk.png": "12494ad86edebb64916831a7fcdc45e4",
"assets/packages/flutter_multi_formatter/flags/png/pg.png": "96c8233f13b1f4e7200d6ac4173de697",
"assets/packages/flutter_multi_formatter/flags/png/pt.png": "f7c4f806d879f5044fcc700029a20fcb",
"assets/packages/flutter_multi_formatter/flags/png/so.png": "15ce03e7b634c7c93f922ef4553f19ca",
"assets/packages/flutter_multi_formatter/flags/png/sx.png": "195a32986e11f1d0411a5fc20abd0c5e",
"assets/packages/flutter_multi_formatter/flags/png/hr.png": "3175463c3e7e42116d5b59bc1da19a3f",
"assets/packages/flutter_multi_formatter/flags/png/ki.png": "a93bda4f0f004d9c865f93d25c81ce18",
"assets/packages/flutter_multi_formatter/flags/png/jm.png": "87dbf861e528586787fdf8b6617e2f61",
"assets/packages/flutter_multi_formatter/flags/png/eu.png": "2c370e3de950262a37b025374cfaebce",
"assets/packages/flutter_multi_formatter/flags/png/ec.png": "9d139a75b21aaa301124ad846b7390f7",
"assets/packages/flutter_multi_formatter/flags/png/et.png": "7bc0f7bd7b4c252b375fc5bd94fe6a3f",
"assets/packages/flutter_multi_formatter/flags/png/fo.png": "7b2aa7754ea3a43b6372b2c7d93da023",
"assets/packages/flutter_multi_formatter/flags/png/kh.png": "a6ddda12068511bce8e99d2b82c13b49",
"assets/packages/flutter_multi_formatter/flags/png/sy.png": "3b05b2bf6694eadbdd84f89065cbb7f4",
"assets/packages/flutter_multi_formatter/flags/png/sn.png": "abaea692165cc3e890df7b736cf37a76",
"assets/packages/flutter_multi_formatter/flags/png/pw.png": "191c97390c0c0407c99b9d5fb9d98f34",
"assets/packages/flutter_multi_formatter/flags/png/sl.png": "460ba6dfd434d06bfbe2e3bc4944c24c",
"assets/packages/flutter_multi_formatter/flags/png/gb-eng.png": "0d9f2a6775fd52b79e1d78eb1dda10cf",
"assets/packages/flutter_multi_formatter/flags/png/fm.png": "ad0f179f11aabd724f0f00c3ad26ad25",
"assets/packages/flutter_multi_formatter/flags/png/gi.png": "987d065705257febe56bdbe05a294749",
"assets/packages/flutter_multi_formatter/flags/png/de.png": "e2227152ece494eabbb6b184dfb9f9a9",
"assets/packages/flutter_multi_formatter/flags/png/gh.png": "bc7dc85567546d0191df4d4fcc892a8a",
"assets/packages/flutter_multi_formatter/flags/png/jo.png": "79a73b63a1e0d78a08da882b146a2224",
"assets/packages/flutter_multi_formatter/flags/png/it.png": "b8242dd6b72444e3a5b6a9b5e4b95407",
"assets/packages/flutter_multi_formatter/flags/png/pa.png": "0c91186f67333cece25b7b6f114aebce",
"assets/packages/flutter_multi_formatter/flags/png/sz.png": "491394c84dbb654442e0ad63296f3cd2",
"assets/packages/flutter_multi_formatter/flags/png/sm.png": "48e98ad719be013cadf5139a5f2e2d79",
"assets/packages/flutter_multi_formatter/flags/png/tn.png": "e71d23c64e7407651f805fa14262999e",
"assets/packages/flutter_multi_formatter/flags/png/ml.png": "7378ecc1a8b6c91aa5d9a26c982e4f0a",
"assets/packages/flutter_multi_formatter/flags/png/cg.png": "e5a127b0915eff11a439a9757f484dd6",
"assets/packages/flutter_multi_formatter/flags/png/ax.png": "7a8b9f688330386f5437b9e4bdf3c3e2",
"assets/packages/flutter_multi_formatter/flags/png/ao.png": "91660ff95663f3ea8f6ddfc0c97c2ab3",
"assets/packages/flutter_multi_formatter/flags/png/bt.png": "9857d9fa48b572226e9c4275fb0f3804",
"assets/packages/flutter_multi_formatter/flags/png/an.png": "cccd19a062794a67af709a59b91a9ae2",
"assets/packages/flutter_multi_formatter/flags/png/bb.png": "bad762779f71fb00e9dbc0f4a971816f",
"assets/packages/flutter_multi_formatter/flags/png/cf.png": "0da7e59a85d78ca89a3a45f68f967a92",
"assets/packages/flutter_multi_formatter/flags/png/mm.png": "5afdb2c6123f2bec3fdecd638409ab06",
"assets/packages/flutter_multi_formatter/flags/png/li.png": "1abb7f4421487e6f40007c97ccf98c3d",
"assets/packages/flutter_multi_formatter/flags/png/na.png": "67421813025b783b38ce65fb66f330ec",
"assets/packages/flutter_multi_formatter/flags/png/mz.png": "6e98a2bf86f2d8d0f4eaffaf8bd591b7",
"assets/packages/flutter_multi_formatter/flags/png/to.png": "4229da15117671214ec83c6365dce0b5",
"assets/packages/flutter_multi_formatter/flags/png/vg.png": "420edc09fba1878f87336f8ebcdcee66",
"assets/packages/flutter_multi_formatter/flags/png/ve.png": "2e8670420a607b77ebb5df3a6d9ce16a",
"assets/packages/flutter_multi_formatter/flags/png/tz.png": "466bbbf4023c5cb013d202f74f19e743",
"assets/packages/flutter_multi_formatter/flags/png/tm.png": "153c0223e88169e2d988afa1ba74d0b9",
"assets/packages/flutter_multi_formatter/flags/png/mx.png": "0763a52cbbb6f882d1c7b67097bd35ee",
"assets/packages/flutter_multi_formatter/flags/png/nc.png": "b94385d139bf8b82b5b3f20559feece5",
"assets/packages/flutter_multi_formatter/flags/png/mo.png": "6e18ce749771587d8effc18479e000d2",
"assets/packages/flutter_multi_formatter/flags/png/lk.png": "b7ab4259e284bb6f4f30cb8ec5e9b1b6",
"assets/packages/flutter_multi_formatter/flags/png/cd.png": "f0b60b807ec62ebfc391ff50c79ec30e",
"assets/packages/flutter_multi_formatter/flags/png/al.png": "3a69913f1180f063cc70c2d09c43a882",
"assets/packages/flutter_multi_formatter/flags/png/bw.png": "53fede7a11b197c2cf5cc9667544d323",
"assets/packages/flutter_multi_formatter/flags/png/cr.png": "40dc5bc52eb9391bd6d1bf895b107a65",
"assets/packages/flutter_multi_formatter/flags/png/bv.png": "13708df2028ac76d28ec0eb35383ea4f",
"assets/packages/flutter_multi_formatter/flags/png/am.png": "55d71092c291a382a8fb4e0dae4b76a0",
"assets/packages/flutter_multi_formatter/flags/png/az.png": "98833fec449ef8d633ef934e63080891",
"assets/packages/flutter_multi_formatter/flags/png/ba.png": "4b5ad282e533a2e75d8b6ce8cff43db0",
"assets/packages/flutter_multi_formatter/flags/png/mn.png": "3942d1f8bfa86fd13115a70543c6c188",
"assets/packages/flutter_multi_formatter/flags/png/nu.png": "146c66c2ede3bd38ec680f76ef6525a0",
"assets/packages/flutter_multi_formatter/flags/png/my.png": "72f82829eb4588404d519b84bfd5ad58",
"assets/packages/flutter_multi_formatter/flags/png/tl.png": "5519f1e7173e1f345d1580bab1b34d51",
"assets/packages/flutter_multi_formatter/flags/png/ws.png": "d8e4ad3af401330e3f11db4be39dbf32",
"assets/packages/flutter_multi_formatter/flags/png/th.png": "626cf312c47ded97bf5dbb4339e9f02c",
"assets/packages/flutter_multi_formatter/flags/png/xk.png": "df22513149a597035238f0f0c9f06014",
"assets/packages/flutter_multi_formatter/flags/png/nf.png": "3391aec8dc77dd300f835bae7ffccd17",
"assets/packages/flutter_multi_formatter/flags/png/ly.png": "fdb3cba16a701d5471dd3bbcc6a31473",
"assets/packages/flutter_multi_formatter/flags/png/ai.png": "7112379111bbf96dae31e0b13a62b926",
"assets/packages/flutter_multi_formatter/flags/png/br.png": "0a7988dc68c66634f9e95ad0d878f7ba",
"assets/packages/flutter_multi_formatter/flags/png/cv.png": "0be7f55dcf12a903fc49a72a1071b901",
"assets/packages/flutter_multi_formatter/flags/png/be.png": "92d0285f6ed8a74a8fa6ea4b3770daac",
"assets/packages/flutter_multi_formatter/flags/png/ca.png": "e20a51380b2da69353e3755edead340d",
"assets/packages/flutter_multi_formatter/flags/png/bd.png": "0ca802e7f67045161047607b20c6490e",
"assets/packages/flutter_multi_formatter/flags/png/cw.png": "a0fc17a5c96bc82996fa70d50aa9b339",
"assets/packages/flutter_multi_formatter/flags/png/bs.png": "4a88a47c73294f193cf7ad5fabfcb7ea",
"assets/packages/flutter_multi_formatter/flags/png/ng.png": "eeb857562b3dfcd105aef9ec371a916f",
"assets/packages/flutter_multi_formatter/flags/png/mk.png": "644972c75548c32b4b99593b48d32791",
"assets/packages/flutter_multi_formatter/flags/png/np.png": "761c731a0b63ab006273b4a1910ccf86",
"assets/packages/flutter_multi_formatter/flags/png/va.png": "e84a6f9dc08930a11d1e4b9d25b6234f",
"assets/packages/flutter_multi_formatter/flags/png/uz.png": "475189379e4a67b29e9ab9a1d71f3cdd",
"assets/packages/flutter_multi_formatter/flags/png/um.png": "2171e21640cef63bd1296158f01a70cd",
"assets/packages/flutter_multi_formatter/flags/png/tk.png": "fcbceb6da21d71232ad719d05b6bb71b",
"assets/packages/flutter_multi_formatter/flags/png/vc.png": "9ff42949ac191ee0adcab3815779b748",
"assets/packages/flutter_multi_formatter/flags/png/zw.png": "94d25ac1764b0895f20405bc253b3647",
"assets/packages/flutter_multi_formatter/flags/png/nr.png": "09c7da9ea9f49dea55d2bdb853cc543c",
"assets/packages/flutter_multi_formatter/flags/png/ne.png": "f29940c4d22aed2105d362d5c7dc735e",
"assets/packages/flutter_multi_formatter/flags/png/cu.png": "82ec98ab8b9832e6a182367a5dd16f93",
"assets/packages/flutter_multi_formatter/flags/png/bq.png": "1cf2f5a0a4421b2f0c8597c91c354d80",
"assets/packages/flutter_multi_formatter/flags/png/bf.png": "54bb2c64b28b60df100b8abfb4b71777",
"assets/packages/flutter_multi_formatter/flags/png/bg.png": "6b473783a5c5b427e668a2048022663e",
"assets/packages/flutter_multi_formatter/flags/png/cc.png": "5d1c266d4620dc7203023882a7b647e5",
"assets/packages/flutter_multi_formatter/flags/png/gb-wls.png": "eb929cd0fe93fab638ea3f3c4b655593",
"assets/packages/flutter_multi_formatter/flags/png/mh.png": "d5ab4a201a322f99454e184699037506",
"assets/packages/flutter_multi_formatter/flags/png/za.png": "6cd7101a5f0d4b167af862b92ba8e19e",
"assets/packages/flutter_multi_formatter/flags/png/uy.png": "98db711aa764b56a68a37820995a7685",
"assets/packages/flutter_multi_formatter/flags/png/wf.png": "8e40a0c5be4080ffea10070744837d43",
"assets/packages/flutter_multi_formatter/flags/png/vu.png": "043330591a2b97ba1ef46ea08bfbbe24",
"assets/packages/flutter_multi_formatter/flags/png/tj.png": "a9e427318b756c0c03bec3f3ff976fa3",
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
"assets/shaders/ink_sparkle.frag": "1b86ec71e042d79259a8bc2fa16749f3",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/data/DemoSushi.json": "304a5b25764a4fa64cfc86744f8a550f",
"assets/data/Pizzeria8+.json": "c6ec8e32a9570ef609f731efddc3c02c",
"assets/data/global_ingredients_data.json": "7dd85654ba2a13f26eae95376fd77354",
"assets/data/DemoClub.json": "4076a8af16721da37674c50e8ecd0d94",
"assets/data/shops_data.json": "744b950489c4931a8026570d1c86387d",
"assets/data/basket_data.json": "75ec4c0c6d27efa470f5ddf9a8d730aa",
"assets/data/DemoRistorante.json": "7ed63dfc3058430bf137d30973b3f493",
"assets/data/prodotti_sushi.json": "0b1e0e0aa1dfa96cfc518c9d64378270",
"assets/data/DemoClub2.json": "562028801710cd38ddee138bb2a87a64",
"assets/data/DemoPizzeria.json": "f89d58d0177d19043e975920dcfa3699",
"assets/data/SushiAndGo8_0.json": "35a0c6a2c2723ca1a2b806823cbc0f64",
"assets/data/prodotti_data.json": "49ca00116885da4a94f1b7e457d0db08",
"assets/assets/audios/horn.mp3": "958974918b3b46a92a98f660da82b0ed",
"assets/assets/audios/sweep-trans.wav": "e1170564eb9917d4c35f67d3119374b2",
"assets/assets/audios/money.mp3": "a834aa50fa94be12a4c00553a98d3746",
"assets/assets/audios/money.mpeg": "e8b9207bd6c0689f9df1a3c186985ebc",
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
