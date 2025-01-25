const {
  cmd,
  commands
} = require("../command");
const yts = require("yt-search");
const {
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  getBinaryNodeChildren,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType,
  downloadContentFromMessage
} = require('@whiskeysockets/baileys');
cmd({
  'pattern': "yts",
  'alias': "ytsearch",
  'desc': "button test",
  'react': '📨',
  'category': 'download',
  'filename': __filename
}, async (_0x147952, _0x4c8513, _0x5a4415, {
  from: _0x4c77dc,
  quoted: _0x582289,
  body: _0x5c6301,
  isCmd: _0x1bbfd0,
  command: _0x46bd0d,
  args: _0x3e4f36,
  q: _0x3016c9,
  isGroup: _0x30cd47,
  sender: _0x45bebd,
  senderNumber: _0x40a6a3,
  botNumber2: _0x29c639,
  botNumber: _0x470e3c,
  pushname: _0x3a52bf,
  isMe: _0x326d03,
  isOwner: _0x3ca224,
  groupMetadata: _0x38e12e,
  groupName: _0x2375c0,
  participants: _0x40be98,
  groupAdmins: _0x2ba84,
  isBotAdmins: _0x5cfaa8,
  isAdmins: _0x2a61a4,
  reply: _0x443039
}) => {
  try {
    if (!_0x3016c9) {
      return _0x443039("*Need title*");
    }
    let _0x3f8109 = await yts(_0x3016c9);
    let _0x2435c8 = _0x3f8109.all;
    console.log(_0x2435c8);
    if (!_0x2435c8 || _0x2435c8.length === 0x0) {
      _0x443039("No video found");
      return;
    }
    const _0x24a40e = Math.min(_0x2435c8.length, Math.floor(Math.random() * 0xa) + 0x1);
    const _0x3c47c0 = [];
    while (_0x3c47c0.length < _0x24a40e) {
      const _0x1e23da = Math.floor(Math.random() * _0x2435c8.length);
      const _0x46c0d3 = _0x2435c8.splice(_0x1e23da, 0x1)[0x0];
      _0x3c47c0.push(_0x46c0d3);
    }
    let _0x51df49 = [];
    for (let _0x417f74 = 0x0; _0x417f74 < _0x3c47c0.length; _0x417f74++) {
      let _0x2ba2ab = _0x3c47c0[_0x417f74];
      let _0x582af9 = "ᴛɪᴛʟᴇ : " + _0x2ba2ab.title + " \nᴅᴜʀᴀᴛɪᴏɴ : " + _0x2ba2ab.timestamp + " \nᴠɪᴇᴡꜱ : " + _0x2ba2ab.views + " \nᴀɢᴏ : " + _0x2ba2ab.ago;
      const _0x205b1a = await prepareWAMessageMedia({
        'image': {
          'url': _0x2ba2ab.thumbnail
        }
      }, {
        'upload': _0x147952.waUploadToServer
      });
      _0x51df49.push({
        'body': proto.Message.InteractiveMessage.Body.fromObject({
          'text': _0x582af9
        }),
        'footer': proto.Message.InteractiveMessage.Footer.fromObject({
          'text': "© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ · · ·"
        }),
        'header': proto.Message.InteractiveMessage.Header.create({
          'title': "Video " + (_0x417f74 + 0x1),
          'subtitle': '',
          'hasMediaAttachment': true,
          ..._0x205b1a
        }),
        'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          'buttons': [{
            'name': "cta_copy",
            'buttonParamsJson': "{\"display_text\":\"Copy Url 📑\",\"id\":\"1234\",\"copy_code\":\"" + _0x2ba2ab.url + "\"}"
          }]
        })
      });
    }
    const _0x2da33a = generateWAMessageFromContent(_0x4c77dc, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 0x2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.fromObject({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': "MALVIN - XD"
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': "ᴍᴀʟᴠɪɴ ᴋɪɴɢ · · ·"
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'hasMediaAttachment': false
            }),
            'carouselMessage': proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              'cards': _0x51df49
            }),
            'contextInfo': {
              'mentionedJid': ['263714757857@s.whatsapp.net'],
              'forwardingScore': 0x3e7,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': '120363306168354073@newsletter',
                'newsletterName': "ᴍᴀʟᴠɪɴ",
                'serverMessageId': 0x8f
              }
            }
          })
        }
      }
    }, {
      'quoted': _0x4c8513
    });
    await _0x147952.relayMessage(_0x4c77dc, _0x2da33a.message, {
      'messageId': _0x2da33a.key.id
    });
    console.log("Button Send Sucsses");
  } catch (_0x231720) {
    console.log(_0x231720);
    _0x443039('' + _0x231720);
  }
});