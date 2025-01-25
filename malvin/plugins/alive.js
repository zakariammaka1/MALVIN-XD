const {
  cmd,
  commands
} = require('../command');
const os = require('os');
const {
  runtime
} = require("../functions");
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
} = require("@whiskeysockets/baileys");
cmd({
  'pattern': "alive",
  'desc': "Bot online test",
  'react': '🕓',
  'category': "download",
  'filename': __filename
}, async (_0x3a427d, _0x3fa749, _0x4d2cad, {
  from: _0x2bace6,
  quoted: _0x3531ad,
  body: _0x20d1d3,
  isCmd: _0x455bdf,
  command: _0x1a0a7d,
  args: _0x178d35,
  q: _0x33d532,
  isGroup: _0x40b706,
  sender: _0x333def,
  senderNumber: _0x23c4f1,
  botNumber2: _0x29f426,
  botNumber: _0x150ad9,
  pushname: _0x1d9cd9,
  isMe: _0x47ab72,
  isOwner: _0x5c4946,
  groupMetadata: _0x3a2a93,
  groupName: _0x46b3ce,
  participants: _0x1751f2,
  groupAdmins: _0x5cc56d,
  isBotAdmins: _0x50460c,
  isAdmins: _0x3b92c2,
  reply: _0x5257de
}) => {
  try {
    let _0x1c9e50 = [];
    {
      let _0x366619 = "╭┈┅╣ *⚬ᴍᴀʟᴠɪɴ-xᴅ-ᴀʟɪᴠᴇ⚬* ╠┉┈✾\n ┋ *ʜɪ ᴍᴀʟᴠɪɴ-xᴅ ɪs ᴀʟɪᴠᴇ ✻\n  ┋ *ɪᴍ ᴍᴀʟᴠɪɴ-xᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*\n ┋ *ꜱɪᴍᴘᴀʟᴇ ᴊᴀᴠᴀ ꜱᴄʀɪᴘᴛ ʙᴏᴛ*\n┋ *ᴍᴀʟᴠɪɴ ɪꜱ ᴍʏ ᴄʀᴇᴀᴛᴏʀ*\n┋ *ɢᴇᴛ ᴍʏ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ ᴛᴏ ᴜꜱᴇ\n ┋ ᴜsɪɴɢ           *.ᴍᴇɴᴜ*\n╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n   *ᴍᴀʟᴠɪɴ-xᴅ ꜱʏꜱᴛᴇᴍ ɪɴꜰᴏ*\n ╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n❍*ʀᴜɴ ᴛɪᴍᴇ :* " + runtime(process.uptime()) + "\n❍*ʀᴀᴍ ᴜꜱᴇ :* " + (process.memoryUsage().heapUsed / 0x400 / 0x400).toFixed(0x2) + "MB / " + Math.round(require('os').totalmem / 0x400 / 0x400) + "MB\n❍*ᴘʟᴀᴛꜰᴏʀᴍ :* " + os.hostname() + "\n❍*ᴏᴡɴᴇʀ :* ᴍᴀʟᴠɪɴ ᴋɪɴɢ\n╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n";
      const _0x1d516d = await prepareWAMessageMedia({
        'image': {
          'url': "https://files.catbox.moe/7pg2gp.jpg"
        }
      }, {
        'upload': _0x3a427d.waUploadToServer
      });
      _0x1c9e50.push({
        'body': proto.Message.InteractiveMessage.Body.fromObject({
          'text': _0x366619
        }),
        'footer': proto.Message.InteractiveMessage.Footer.fromObject({
          'text': "© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ · · ·"
        }),
        'header': proto.Message.InteractiveMessage.Header.create({
          'title': "Hi " + _0x1d9cd9,
          'subtitle': "Malvin",
          'hasMediaAttachment': true,
          ..._0x1d516d
        }),
        'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          'buttons': [{
            'name': "cta_url",
            'buttonParamsJson': "{\"display_text\":\"YouTube 🎊\",\"url\":\"https://youtube.com/@malvintech2\",\"merchant_url\":\"https://www.google.com\"}"
          }, {
            'name': "cta_url",
            'buttonParamsJson': "{\"display_text\":\"Developer 💙\",\"url\":\"263714757857\",\"merchant_url\":\"https://www.google.com\"}"
          }, {
            'name': "cta_url",
            'buttonParamsJson': "{\"display_text\":\"GitHub 📚\",\"url\":\"https://github.com/kingmalvn\",\"merchant_url\":\"https://www.google.com\"}"
          }, {
            'name': 'cta_url',
            'buttonParamsJson': "{\"display_text\":\"WhatsApp 🪀\",\"url\":\"https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z\",\"merchant_url\":\"https://www.google.com\"}"
          }]
        })
      });
    }
    const _0x1d44d2 = generateWAMessageFromContent(_0x2bace6, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 0x2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.fromObject({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': "\n *ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ*\n\n *1* ┊    *ᴍᴇɴᴜ*\n        "
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': "© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ · · ·"
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'hasMediaAttachment': false
            }),
            'carouselMessage': proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              'cards': _0x1c9e50
            }),
            'contextInfo': {
              'mentionedJid': ["263714757857@s.whatsapp.net"],
              'forwardingScore': 0x3e7,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': '120363306168354073@newsletter',
                'newsletterName': "lara",
                'serverMessageId': 0x8f
              }
            }
          })
        }
      }
    }, {
      'quoted': _0x3fa749
    });
    console.log("Button Send Sucsses");
    const _0xd58589 = _0x1d44d2.key.id;
    _0x3a427d.ev.on("messages.upsert", async _0x410810 => {
      const _0x697bb9 = _0x410810.messages[0x0];
      if (!_0x697bb9.message) {
        return;
      }
      const _0x5e0e8c = _0x697bb9.message.conversation || _0x697bb9.message.extendedTextMessage?.['text'];
      const _0x12804c = _0x697bb9.key.remoteJid;
      const _0x1fdd06 = _0x697bb9.message.extendedTextMessage && _0x697bb9.message.extendedTextMessage.contextInfo.stanzaId === _0xd58589;
      if (_0x1fdd06) {
        if (_0x5e0e8c === '1') {
          await _0x3a427d.sendMessage(_0x12804c, {
            'image': {
              'url': 'https://files.catbox.moe/7pg2gp.jpg'
            },
            'caption': " ┄┄╣ᴍᴀʟᴠɪɴ xᴅ ᴅᴏᴡɴ ᴄᴍᴅs╠┄┄┄\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄\n  ┊ .sᴏɴɢ \n┊ .ᴠɪᴅᴇᴏ \n┊ .ғʙ \n┊ .ᴀᴘᴋ\n┊ .ᴍᴏᴠɪᴇ\n┊ .ᴛɪᴋᴛᴏᴋ\n┊ .ɢᴅʀɪᴠᴇ\n┊ .ᴛᴡᴅʟ\n┊ .ᴛɢ\n┊ .ʙɪᴏsᴄᴏᴘᴇ\n┊ .ɢɪɴɪsɪsɪʟᴀ\n┊ .xᴠᴅʟ\n┊ .xɴxxᴅʟ\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄\n\n┄┄╣ᴍᴀʟᴠɪɴ xᴅ sᴇᴀʀᴄʜ ᴄᴍᴅs╠┄┄┄\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄\n┊ .ɪᴍɢ\n┊ .ɢɪᴛʜᴜʙsᴛᴀʟᴋ\n┊ .ᴡᴇᴀᴛʜᴇʀ\n┊ .ᴍᴏᴠɪᴇ\n┊ .ʏᴛs\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄\n\n┄┄╣ᴍᴀʟᴠɪɴ xᴅ ᴀɴɪᴍᴇ ᴄᴍᴅs╠┄┄┄\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄\n  ┊ .ɴᴇᴋᴏ\n┊ .ᴡᴀɪғᴜ\n┊ .ᴍᴇɢᴜᴍɪɴ\n┊ .ᴍᴀɪᴅ\n┊ .ᴀᴡᴏᴏ\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄\n\n┄┄╣ᴍᴀʟᴠɪɴ xᴅ ғᴜɴ ᴄᴍᴅs╠┄┄┄\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄\n┊ .ʜᴀᴄᴋ e.g (.hack xd)\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄\n\n┄┄╣ᴍᴀʟᴠɪɴ xᴅ ᴄᴏɴᴠᴇʀᴛ ᴄᴍᴅs╠┄┄┄\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄  \n┊ .sᴛɪᴄᴋᴇʀ\n┊ .ᴛᴛs\n┊ .ᴛʀᴛ\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄\n\n ┄┄╣ᴍᴀʟᴠɪɴ xᴅ ᴀɪ ᴄᴍᴅs╠┄┄┄\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄  \n┊ .ᴀɪ\n┊ .ɢᴘᴛ\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄\n\n ┄┄╣ᴍᴀʟᴠɪɴ xᴅ ɢʀᴏᴜᴘ ᴄᴍᴅs╠┄┄┄\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄  \n┊ .ᴍᴜᴛᴇ\n┊ .ᴜɴᴍᴜᴛᴇ\n┊ .ᴘʀᴏᴍᴏᴛᴇ\n┊ .ᴛᴀɢᴀʟʟ\n┊ .ᴅᴇᴍᴏᴛᴇ\n┊ .ʜɪᴅᴇᴛᴀɢ\n┊ .ᴋɪᴄᴋ\n┊ .ᴀᴅᴅ\n┊ .ᴋɪᴄᴋᴀʟʟ\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄\n\n ┄┄╣ᴍᴀʟᴠɪɴ xᴅ ᴅᴏᴡɴ ᴄᴍᴅs╠┄┄┄\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄  \n┊ .ʙʟᴏᴄᴋ\n┊ .ᴜɴʙʟᴏᴄᴋ\n┊ .ᴊɪᴅ\n┊ .ɢᴊɪᴅ\n┊ .ʀᴇsᴛᴀʀᴛ\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄\n\n ┄┄╣ᴍᴀʟᴠɪɴ xᴅ sʏsᴛᴇᴍ ᴄᴍᴅs╠┄┄┄\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄\n┊ .ᴘɪɴɢ\n┊ .sʏsᴛᴇᴍ\n┊ .ʀᴇsᴛᴀʀᴛ\n┊ .ᴏᴡɴᴇʀ\n┊ .ʀᴇᴘᴏ\n┊ .sʀᴄ\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄\n\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴᴇxᴜs ᴛᴇᴄʜ\n`,
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
                'title': "ᎷᎪᏞᏙᏆΝ ХᎠ",
                'body': "ᴍᴀʟᴠɪɴ ᴋɪɴɢ",
                'mediaType': 0x1,
                'sourceUrl': 'https://github.com/kingmalvn',
                'thumbnailUrl': "https://files.catbox.moe/7pg2gp.jpg",
                'renderLargerThumbnail': false,
                'showAdAttribution': true
              }
            }
          }, {
            'quoted': _0x697bb9
          });
        }
      }
    });
  } catch (_0xe83058) {
    console.log(_0xe83058);
    _0x5257de('' + _0xe83058);
  }
});