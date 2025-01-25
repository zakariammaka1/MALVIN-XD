const {
  cmd,
  commands
} = require("../command");
const os = require('os');
const {
  runtime
} = require("../functions");
cmd({
  'pattern': "system",
  'desc': "Check bot online or no.",
  'category': "main",
  'react': '📟',
  'filename': __filename
}, async (_0x3fb8e9, _0x40996e, _0x2bc59a, {
  from: _0xa465bf,
  quoted: _0x36d90f,
  body: _0x2546c9,
  isCmd: _0x4c584d,
  command: _0x158371,
  args: _0x579e13,
  q: _0x5a5607,
  isGroup: _0x5b21a8,
  sender: _0x584ff5,
  senderNumber: _0x547c2e,
  botNumber2: _0x23e8fe,
  botNumber: _0x34f3c5,
  pushname: _0x4ecf38,
  isMe: _0x2dc827,
  isOwner: _0x7f8f6a,
  groupMetadata: _0xd28e81,
  groupName: _0x5d9cd5,
  participants: _0x2bbcd5,
  groupAdmins: _0x1ec93b,
  isBotAdmins: _0x4f6f3e,
  isAdmins: _0x122f8c,
  reply: _0x5e2f63
}) => {
  try {
    let _0x2a1d34 = "\n───────────────────\n_*⚙️ ᴍᴀʟᴠɪɴ Ｓｙｓｔｅｍ  Ｉｎｆｏ ⚙️*_\n───────────────────\n\n┌────────────────\n│❖ *ᴜᴘᴛɪᴍᴇ :* _" + runtime(process.uptime()) + "_\n│❖ *ʀᴀᴍ ᴜꜱᴀɢᴇ :*  _" + (process.memoryUsage().heapUsed / 0x400 / 0x400).toFixed(0x2) + "MB / " + Math.round(require('os').totalmem / 0x400 / 0x400) + "MB_\n│❖ *ʜᴏꜱᴛ ɴᴀᴍᴇ :* _" + os.hostname() + "_\n│❖ *ᴏᴡɴᴇʀ :* _ᴍᴀʟᴠɪɴ ᴋɪɴɢ_\n└────────────────\n\n> ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ    \n";
    await _0x3fb8e9.sendMessage(_0xa465bf, {
      'image': {
        'url': "https://files.catbox.moe/7pg2gp.jpg"
      },
      'caption': _0x2a1d34,
      'contextInfo': {
        'mentionedJid': ['263714757857@s.whatsapp.net'],
        'groupMentions': [],
        'forwardingScore': 0x1,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363306168354073@newsletter",
          'newsletterName': "ᴍᴀʟᴠɪɴ-xᴅ ✻",
          'serverMessageId': 0x3e7
        },
        'externalAdReply': {
          'title': "MALVIN XD",
          'body': "ꜱᴀᴅᴇᴇꜱʜᴀ ᴛʜᴀʀᴜᴍɪɴ",
          'mediaType': 0x1,
          'sourceUrl': "https://github.com/kingmalvn",
          'thumbnailUrl': 'https://files.catbox.moe/7pg2gp.jpg',
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x40996e
    });
  } catch (_0x2e8630) {
    console.log(_0x2e8630);
    _0x5e2f63('' + _0x2e8630);
  }
});
cmd({
  'pattern': 'ping',
  'desc': "Check bot online or no.",
  'category': "main",
  'react': '🚀',
  'filename': __filename
}, async (_0xb42688, _0x4c0b85, _0x53a202, {
  from: _0x2bf279,
  quoted: _0x3ad2e7,
  body: _0x2a8426,
  isCmd: _0x5eea39,
  command: _0x4ea9bb,
  args: _0x5db5b1,
  q: _0x3dfe65,
  isGroup: _0x1942f8,
  sender: _0x35cdbf,
  senderNumber: _0x3d490f,
  botNumber2: _0x575a7c,
  botNumber: _0x42855e,
  pushname: _0x28e8b8,
  isMe: _0xa0839b,
  isOwner: _0x40cf6d,
  groupMetadata: _0x2d3bb9,
  groupName: _0x1f14e3,
  participants: _0x4e5b59,
  groupAdmins: _0x46a5c2,
  isBotAdmins: _0x5305ee,
  isAdmins: _0x448b76,
  reply: _0x42780f
}) => {
  try {
    const _0x5cb497 = Date.now();
    const _0x1eb8fe = Date.now();
    const _0x168e13 = _0x1eb8fe - _0x5cb497;
    await _0xb42688.sendMessage(_0x2bf279, {
      'text': "*⚬ᴍᴀʟᴠɪɴ-xᴅ ꜱᴘᴇᴇᴅ : " + _0x168e13 + 'ms*',
      'contextInfo': {
        'mentionedJid': ["263714757857@s.whatsapp.net"],
        'groupMentions': [],
        'forwardingScore': 0x1,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363306168354073@newsletter",
          'newsletterName': "ᴍᴀʟᴠɪɴ-xᴅ ✻",
          'serverMessageId': 0x3e7
        },
        'externalAdReply': {
          'title': "MALVIN XD",
          'body': "ꜱᴀᴅᴇᴇꜱʜᴀ ᴛʜᴀʀᴜᴍɪɴ",
          'mediaType': 0x1,
          'sourceUrl': "https://github.com/kingmalvn",
          'thumbnailUrl': "https://files.catbox.moe/7pg2gp.jpg",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x4c0b85
    });
  } catch (_0x3b4a2e) {
    console.log(_0x3b4a2e);
    _0x42780f('' + _0x3b4a2e);
  }
});
cmd({
  'pattern': "owner",
  'desc': "cmd",
  'category': 'system',
  'filename': __filename
}, async (_0x43c4c3, _0x312b5d, _0x4beaa9, {
  from: _0x2a4ec9,
  quoted: _0x5bad89,
  body: _0x177f71,
  isCmd: _0x88d5f0,
  command: _0x1e4dab,
  args: _0x2ae0d3,
  q: _0x3a41da,
  isGroup: _0x3116e1,
  sender: _0x921f52,
  senderNumber: _0x23e60,
  botNumber2: _0x3fd554,
  botNumber: _0x3fd736,
  pushname: _0x315818,
  isMe: _0x2db69a,
  isOwner: _0x3dc08a,
  groupMetadata: _0x4e1609,
  groupName: _0x4d63a0,
  participants: _0x5c1823,
  groupAdmins: _0x223d82,
  isBotAdmins: _0x6e1c90,
  isAdmins: _0x50931f,
  reply: _0x196b1d
}) => {
  try {
    return await _0x43c4c3.sendMessage(_0x2a4ec9, {
      'image': {
        'url': "https://files.catbox.moe/7pg2gp.jpg"
      },
      'caption': "\n┏━┫ *⚬ᴍᴀʟᴠɪɴ-xᴅ⚬* ┣━✾\n┃\n┣━━━━━━━━━━━━━━━\n- *ᴛᴇᴄʜ ʟᴏʀᴅ* 💗⃤\n        263780166288\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n- *ᴍᴀʟᴠɪɴ* 💗⃤\n        273714757857\n╰━━━━━━━━━━━━━━━\n> Lααɾα-ᴍᴅ\n",
      'contextInfo': {
        'mentionedJid': ["263714757857@s.whatsapp.net"],
        'groupMentions': [],
        'forwardingScore': 0x1,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': '120363306168354073@newsletter',
          'newsletterName': "ᴍᴀʟᴠɪɴ-xᴅ ✻",
          'serverMessageId': 0x3e7
        },
        'externalAdReply': {
          'title': "MALVIN XD",
          'body': "ᴍᴀʟᴠɪɴ ᴋɪɴɢ",
          'mediaType': 0x1,
          'sourceUrl': "https://github.com/kingmalvn",
          'thumbnailUrl': "https://files.catbox.moe/7pg2gp.jpg",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x312b5d
    });
  } catch (_0x17f485) {
    console.log(_0x17f485);
    _0x196b1d('' + _0x17f485);
  }
});
cmd({
  'pattern': 'restart',
  'desc': "restart the bot",
  'category': "owner",
  'filename': __filename
}, async (_0x70b1f9, _0x315c5e, _0x438274, {
  from: _0xa675a0,
  quoted: _0x353e4b,
  body: _0x465273,
  isCmd: _0x17ccee,
  command: _0x7b8c94,
  args: _0x609f74,
  q: _0x3a4f22,
  isGroup: _0x4247a1,
  sender: _0x8c0e83,
  senderNumber: _0x469f25,
  botNumber2: _0x332838,
  botNumber: _0x4dc0da,
  pushname: _0x15b876,
  isMe: _0x22aa51,
  isOwner: _0x3b5110,
  groupMetadata: _0x1f977c,
  groupName: _0x4a5e04,
  participants: _0x2193be,
  groupAdmins: _0x1492db,
  isBotAdmins: _0xc1517e,
  isAdmins: _0x59cc05,
  reply: _0x16653c
}) => {
  try {
    const {
      exec: _0x185313
    } = require("child_process");
    _0x16653c('*restarting...*');
    await sleep(0x5dc);
    _0x185313("pm2 restart all");
  } catch (_0x44638e) {
    console.log(_0x44638e);
    _0x16653c('' + _0x44638e);
  }
});