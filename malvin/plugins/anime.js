const {
  cmd,
  commands
} = require("../command");
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require("../functions");
const axios = require("axios");
cmd({
  'pattern': "loli",
  'alias': ["imgloli"],
  'react': '🧧',
  'desc': "Download anime loli images.",
  'category': "anime",
  'use': ".loli",
  'filename': __filename
}, async (_0x2c6e64, _0x2c7e14, _0x2fb489, {
  from: _0x1636a0,
  l: _0x150875,
  quoted: _0x30a91a,
  body: _0x17f836,
  isCmd: _0x12f1d6,
  command: _0x365c83,
  args: _0x471994,
  q: _0x1d5d79,
  isGroup: _0x354a19,
  sender: _0x5e2ea4,
  senderNumber: _0x9d1be9,
  botNumber2: _0x512f79,
  botNumber: _0x4330f9,
  pushname: _0x257ac3,
  isMe: _0x4b6a73,
  isOwner: _0x1f4bc5,
  groupMetadata: _0x659d61,
  groupName: _0x37b7a3,
  participants: _0x34c302,
  groupAdmins: _0x911da2,
  isBotAdmins: _0x51cc07,
  isAdmins: _0x3adc0c,
  reply: _0x8f95a8
}) => {
  try {
    let _0x586f2f = await axios.get('https://api.lolicon.app/setu/v2?num=1&r18=0&tag=lolicon');
    await _0x2c6e64.sendMessage(_0x1636a0, {
      'image': {
        'url': _0x586f2f.data.data[0x0].urls.original
      },
      'caption': "🧧 Random loli image\n\n*©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ..🧑🏻‍💻*"
    }, {
      'quoted': _0x2c7e14
    });
  } catch (_0x56e7a6) {
    _0x8f95a8("I cant find this anime.");
    console.log(_0x56e7a6);
  }
});
cmd({
  'pattern': "waifu",
  'alias': ['imgwaifu'],
  'react': '🧧',
  'desc': "Download anime waifu images.",
  'category': "anime",
  'use': ".waifu",
  'filename': __filename
}, async (_0x535ea4, _0x7fc73a, _0x26b3e0, {
  from: _0x4ea376,
  l: _0x4ce75f,
  quoted: _0x361907,
  body: _0x2c9310,
  isCmd: _0x18d1a4,
  command: _0x472d7b,
  args: _0x538d5d,
  q: _0x5c6495,
  isGroup: _0x18be28,
  sender: _0x57049c,
  senderNumber: _0xba2368,
  botNumber2: _0x2c58a5,
  botNumber: _0x4b9d6c,
  pushname: _0x533ccc,
  isMe: _0x5df595,
  isOwner: _0x1982f8,
  groupMetadata: _0x2c8d80,
  groupName: _0x548cd5,
  participants: _0x1ee0e4,
  groupAdmins: _0x19659e,
  isBotAdmins: _0x46ed8a,
  isAdmins: _0x2d8804,
  reply: _0x1e27fb
}) => {
  try {
    let _0x4b529d = await axios.get("https://api.waifu.pics/sfw/waifu");
    await _0x535ea4.sendMessage(_0x4ea376, {
      'image': {
        'url': _0x4b529d.data.url
      },
      'caption': "🧧 Random Waifu image\n\n*©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ɴᴇxᴜs ᴛᴇᴄʜ..🧑🏻‍💻*"
    }, {
      'quoted': _0x7fc73a
    });
  } catch (_0x4aee60) {
    _0x1e27fb("I cant find this anime.");
    console.log(_0x4aee60);
  }
});
cmd({
  'pattern': "neko",
  'alias': ["imgneko"],
  'react': '💫',
  'desc': "Download anime neko images.",
  'category': "anime",
  'use': ".neko",
  'filename': __filename
}, async (_0xd075d9, _0x45ed88, _0x10cfea, {
  from: _0x44d741,
  l: _0xd11532,
  quoted: _0x5c1937,
  body: _0x189774,
  isCmd: _0x2afdda,
  command: _0x362d43,
  args: _0x1a8e95,
  q: _0x3f8795,
  isGroup: _0x5bbab2,
  sender: _0x1317ea,
  senderNumber: _0x3fe94e,
  botNumber2: _0x2bb0a1,
  botNumber: _0x1c04f9,
  pushname: _0x34e7cf,
  isMe: _0x24c090,
  isOwner: _0x241824,
  groupMetadata: _0x81a49a,
  groupName: _0x25b84f,
  participants: _0x5f0be1,
  groupAdmins: _0x5049ec,
  isBotAdmins: _0x155a5b,
  isAdmins: _0x954ce5,
  reply: _0x22c643
}) => {
  try {
    let _0x5547bc = await axios.get('https://api.waifu.pics/sfw/neko');
    await _0xd075d9.sendMessage(_0x44d741, {
      'image': {
        'url': _0x5547bc.data.url
      },
      'caption': "🧧 Random neko image\n\n*©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ..🧑🏻‍💻*"
    }, {
      'quoted': _0x45ed88
    });
  } catch (_0x8ea0e9) {
    _0x22c643("I cant find this anime.");
    console.log(_0x8ea0e9);
  }
});
cmd({
  'pattern': "megumin",
  'alias': ["imgmegumin"],
  'react': '🧧',
  'desc': "Download anime megumin images.",
  'category': "anime",
  'use': '.megumin',
  'filename': __filename
}, async (_0xdd3d49, _0x1b376e, _0x4cf892, {
  from: _0x5c2a92,
  l: _0x585beb,
  quoted: _0x47e731,
  body: _0x54581a,
  isCmd: _0x3b8608,
  command: _0xcfd79b,
  args: _0x3364ac,
  q: _0x2a2ed9,
  isGroup: _0x47bea0,
  sender: _0xe191a2,
  senderNumber: _0x1615f7,
  botNumber2: _0x546dfe,
  botNumber: _0x541712,
  pushname: _0x4ed5d1,
  isMe: _0x3575f6,
  isOwner: _0x3e3219,
  groupMetadata: _0x30ba0c,
  groupName: _0x59e656,
  participants: _0x4c952e,
  groupAdmins: _0x1d3e90,
  isBotAdmins: _0x3d4b4d,
  isAdmins: _0x2b4b47,
  reply: _0x23762c
}) => {
  try {
    let _0x2f41a3 = await axios.get("https://api.waifu.pics/sfw/megumin");
    await _0xdd3d49.sendMessage(_0x5c2a92, {
      'image': {
        'url': _0x2f41a3.data.url
      },
      'caption': "🧧 Random megumin image\n\n*©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ..🧑🏻‍💻*"
    }, {
      'quoted': _0x1b376e
    });
  } catch (_0x28d1ba) {
    _0x23762c("I cant find this anime.");
    console.log(_0x28d1ba);
  }
});
cmd({
  'pattern': "maid",
  'alias': ['imgmaid'],
  'react': '💫',
  'desc': "Download anime maid images.",
  'category': "anime",
  'use': ".maid",
  'filename': __filename
}, async (_0x3ce583, _0x5e3741, _0xefc63e, {
  from: _0x560146,
  l: _0x482d7e,
  quoted: _0x4100de,
  body: _0x2a12b1,
  isCmd: _0x4ac8c0,
  command: _0x4122d1,
  args: _0x5bba0c,
  q: _0x1145c4,
  isGroup: _0x20949a,
  sender: _0x5bc66c,
  senderNumber: _0x3ac75a,
  botNumber2: _0x543d48,
  botNumber: _0x3c9f6a,
  pushname: _0x3ca8fc,
  isMe: _0xd4afb8,
  isOwner: _0x5e8cc3,
  groupMetadata: _0x3c3862,
  groupName: _0x17b7b0,
  participants: _0x2e960c,
  groupAdmins: _0x386f37,
  isBotAdmins: _0x545ac5,
  isAdmins: _0x2e8ddb,
  reply: _0x3c27f2
}) => {
  try {
    let _0x131ef4 = await axios.get("https://api.waifu.im/search/?included_tags=maid");
    await _0x3ce583.sendMessage(_0x560146, {
      'image': {
        'url': _0x131ef4.data.images[0x0].url
      },
      'caption': "🧧 Random maid image\n\n*©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ..🧑🏻‍💻*"
    }, {
      'quoted': _0x5e3741
    });
  } catch (_0x2a7db3) {
    _0x3c27f2("I cant find this anime.");
    console.log(_0x2a7db3);
  }
});
cmd({
  'pattern': "awoo",
  'alias': ["imgawoo"],
  'react': '🧧',
  'desc': "Download anime awoo images.",
  'category': "anime",
  'use': ".awoo",
  'filename': __filename
}, async (_0x587982, _0x304925, _0x5f434b, {
  from: _0x1b996e,
  l: _0x4eec40,
  quoted: _0x34f66b,
  body: _0x1f43bc,
  isCmd: _0x4a31ed,
  command: _0x4ca5e9,
  args: _0x2496e2,
  q: _0x292776,
  isGroup: _0x267de6,
  sender: _0x5e5160,
  senderNumber: _0xb71bc7,
  botNumber2: _0x43b9ad,
  botNumber: _0x5abb70,
  pushname: _0x1074fd,
  isMe: _0x49e397,
  isOwner: _0x11eac2,
  groupMetadata: _0x17a204,
  groupName: _0x5c061c,
  participants: _0x275ee6,
  groupAdmins: _0x1e805b,
  isBotAdmins: _0x5bc3f7,
  isAdmins: _0x375dbf,
  reply: _0x2b00ae
}) => {
  try {
    let _0x1baef7 = await axios.get("https://api.waifu.pics/sfw/awoo");
    await _0x587982.sendMessage(_0x1b996e, {
      'image': {
        'url': _0x1baef7.data.url
      },
      'caption': "🧧 Random awoo image\n\n*©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ..🧑🏻‍💻*"
    }, {
      'quoted': _0x304925
    });
  } catch (_0x398be5) {
    _0x2b00ae("I cant find this anime.");
    console.log(_0x398be5);
  }
});