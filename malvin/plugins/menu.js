const {
  cmd,
  commands
} = require("../command");
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
  'pattern': "menu",
  'alias': "help",
  'desc': "Bot online test",
  'react': '🪀',
  'category': "download",
  'filename': __filename
}, async (_0x1c1d6e, _0xbbfb8a, _0x2d787e, {
  from: _0x5d3802,
  quoted: _0x38bd00,
  body: _0x55703a,
  isCmd: _0x11b9ea,
  command: _0x20eab8,
  args: _0x5549e7,
  q: _0x3bd4a6,
  isGroup: _0xf78590,
  sender: _0x51ada3,
  senderNumber: _0x1c1e9d,
  botNumber2: _0x1643f3,
  botNumber: _0x3ec454,
  pushname: _0x1db465,
  isMe: _0xb79f75,
  isOwner: _0x3a0357,
  groupMetadata: _0x444976,
  groupName: _0x448ae7,
  participants: _0x5ee4c,
  groupAdmins: _0x4157de,
  isBotAdmins: _0x3849dc,
  isAdmins: _0xa709b0,
  reply: _0x2848c1
}) => {
  try {
    let _0x3f8826 = [];
    {
      const _0x479355 = await prepareWAMessageMedia({
        'image': {
          'url': 'https://files.catbox.moe/7pg2gp.jpg'
        }
      }, {
        'upload': _0x1c1d6e.waUploadToServer
      });
      _0x3f8826.push({
        'body': proto.Message.InteractiveMessage.Body.fromObject({
          'text': "\n"
        }),
        'footer': proto.Message.InteractiveMessage.Footer.fromObject({
          'text': "© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ · · ·"
        }),
        'header': proto.Message.InteractiveMessage.Header.create({
          'title': "*Hi* " + _0x1db465,
          'subtitle': "Malvin",
          'hasMediaAttachment': true,
          ..._0x479355
        }),
        'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          'buttons': [{
            'name': "cta_url",
            'buttonParamsJson': "{\"display_text\":\"YouTube 🎊\",\"url\":\"https://youtube.com/@malvintech2\",\"merchant_url\":\"https://www.google.com\"}"
          }, {
            'name': "cta_url",
            'buttonParamsJson': "{\"display_text\":\"Developer 💙\",\"url\":\"263714757857@s.whatsapp.net\",\"merchant_url\":\"https://www.google.com\"}"
          }, {
            'name': "cta_url",
            'buttonParamsJson': "{\"display_text\":\"GitHub 📚\",\"url\":\"https://github.com/kingmalvn\",\"merchant_url\":\"https://www.google.com\"}"
          }, {
            'name': "cta_url",
            'buttonParamsJson': "{\"display_text\":\"WhatsApp 🪀\",\"url\":\"https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z\",\"merchant_url\":\"https://www.google.com\"}"
          }]
        })
      });
    }
    const _0x45ffd3 = generateWAMessageFromContent(_0x5d3802, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 0x2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.fromObject({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': "\n╭┈┅╡ *⚬ᴍᴀʟᴠɪɴ-xᴅ-ᴍᴇɴᴜ⚬* ╞┄┄✾\n┊           \n┻╭─────────────✑\n◉┊ *1*    *ᴅᴏᴡɴʟᴏᴀᴅ ᴄᴍᴅ*\n◉┊ *2*    *ꜱᴇᴀʀᴄʜ ᴄᴍᴅ*\n◉┊ *3*    *ᴀɴɪᴍᴇ ᴄᴍᴅ*\n◉┊ *4*    *ꜰᴜɴ ᴄᴍᴅ*\n◉┊ *5*    *ᴄᴏɴᴠᴇʀᴛᴇᴅ ᴄᴍᴅ*\n◉┊ *6*    *ᴀɪ ᴄᴍᴅ*\n◉┊ *7*    *ɢʀᴏᴜᴘ ᴄᴍᴅ*\n◉┊ *8*    *ᴏᴡɴᴇʀ ᴄᴍᴅ*\n◉┊ *9*    *ꜱʏꜱᴛᴇᴍ ᴄᴍᴅ*\n┳╰─────────────✑\n⁠⁠⁠⁠╰┄┅╡ *⚬ᴍᴀʟᴠɪɴ-xᴅ-ᴍᴇɴᴜ⚬* ╞┄✾\n\n*ᴍᴇɴᴛɪᴏɴ & ʀᴇᴘʟʏ ᴛᴏ ɴᴜᴍʙᴇʀ ꜱᴇʟᴇᴄᴛ ᴡɪᴛʜ ᴄᴀᴛᴇɢᴏʀʏ*\n\n> ᴍᴀʟᴠɪɴ-xᴅ ✻\n        "
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': "© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ · · ·"
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'hasMediaAttachment': false
            }),
            'carouselMessage': proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              'cards': _0x3f8826
            }),
            'contextInfo': {
              'mentionedJid': ["263714757857@s.whatsapp.net"],
              'forwardingScore': 0x1,
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
      'quoted': _0xbbfb8a
    });
    console.log("Button Send Sucsses");
    const _0xe97e6b = _0x45ffd3.key.id;
    _0x1c1d6e.ev.on("messages.upsert", async _0x1c1ca0 => {
      const _0x593f8e = _0x1c1ca0.messages[0x0];
      if (!_0x593f8e.message) {
        return;
      }
      const _0x221684 = _0x593f8e.message.conversation || _0x593f8e.message.extendedTextMessage?.['text'];
      const _0x1c9a90 = _0x593f8e.key.remoteJid;
      const _0x527186 = _0x593f8e.message.extendedTextMessage && _0x593f8e.message.extendedTextMessage.contextInfo.stanzaId === _0xe97e6b;
      if (_0x527186) {
        if (_0x221684 === '1') {
          await _0x1c1d6e.sendMessage(_0x1c9a90, {
            'image': {
              'url': "https://files.catbox.moe/7pg2gp.jpg"
            },
            'caption': "\n┄┄╣ᴍᴀʟᴠɪɴ xᴅ ᴅᴏᴡɴ ᴄᴍᴅs╠┄┄┄\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄\n  ┊ .sᴏɴɢ \n┊ .ᴠɪᴅᴇᴏ \n┊ .ғʙ \n┊ .ᴀᴘᴋ\n┊ .ᴍᴏᴠɪᴇ\n┊ .ᴛɪᴋᴛᴏᴋ\n┊ .ɢᴅʀɪᴠᴇ\n┊ .ᴛᴡᴅʟ\n┊ .ᴛɢ\n┊ .ʙɪᴏsᴄᴏᴘᴇ\n┊ .ɢɪɴɪsɪsɪʟᴀ\n┊ .xᴠᴅʟ\n┊ .xɴxxᴅʟ\n┊ .ᴍғɪʀᴇ\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄\n\n\n> ᴍᴀʟᴠɪɴ-xᴅ ✻\n",
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
                'body': "ᴍᴀʟᴠɪɴ ᴋɪɴɢ",
                'mediaType': 0x1,
                'sourceUrl': "https://github.com/kingmalvn",
                'thumbnailUrl': "https://files.catbox.moe/7pg2gp.jpg",
                'renderLargerThumbnail': false,
                'showAdAttribution': true
              }
            }
          }, {
            'quoted': _0x593f8e
          });
        } else {
          if (_0x221684 === '2') {
            await _0x1c1d6e.sendMessage(_0x1c9a90, {
              'image': {
                'url': 'https://files.catbox.moe/7pg2gp.jpg'
              },
              'caption': "\n┄┄╣ᴍᴀʟᴠɪɴ xᴅ sᴇᴀʀᴄʜ ᴄᴍᴅs╠┄┄┄\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄\n┊ .ɪᴍɢ\n┊ .ɢɪᴛʜᴜʙsᴛᴀʟᴋ\n┊ .ᴡᴇᴀᴛʜᴇʀ\n┊ .ᴍᴏᴠɪᴇ\n┊ .ʏᴛs\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄\n\n> ᴍᴀʟᴠɪɴ-xᴅ ✻\n",
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
                  'body': "ᴍᴀʟᴠɪɴ ᴋɪɴɢ",
                  'mediaType': 0x1,
                  'sourceUrl': 'https://github.com/kingmalvn',
                  'thumbnailUrl': 'https://files.catbox.moe/7pg2gp.jpg',
                  'renderLargerThumbnail': false,
                  'showAdAttribution': true
                }
              }
            }, {
              'quoted': _0x593f8e
            });
          } else {
            if (_0x221684 === '3') {
              await _0x1c1d6e.sendMessage(_0x1c9a90, {
                'image': {
                  'url': "https://files.catbox.moe/7pg2gp.jpg"
                },
                'caption': "\n┄┄╣ᴍᴀʟᴠɪɴ xᴅ ᴀɴɪᴍᴇ ᴄᴍᴅs╠┄┄┄\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄\n  ┊ .ɴᴇᴋᴏ\n┊ .ᴡᴀɪғᴜ\n┊ .ᴍᴇɢᴜᴍɪɴ\n┊ .ᴍᴀɪᴅ\n┊ .ᴀᴡᴏᴏ\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄\n\n> ᴍᴀʟᴠɪɴ-xᴅ ✻\n",
                'contextInfo': {
                  'mentionedJid': ["263714757857@s.whatsapp.net"],
                  'groupMentions': [],
                  'forwardingScore': 0x1,
                  'isForwarded': true,
                  'forwardedNewsletterMessageInfo': {
                    'newsletterJid': '120363306168354073@newsletter',
                    'newsletterName': "Lααɾα-ᴍᴅ ✻",
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
                'quoted': _0x593f8e
              });
            } else {
              if (_0x221684 === '4') {
                await _0x1c1d6e.sendMessage(_0x1c9a90, {
                  'image': {
                    'url': "https://files.catbox.moe/7pg2gp.jpg"
                  },
                  'caption': "\n┄┄╣ᴍᴀʟᴠɪɴ xᴅ ғᴜɴ ᴄᴍᴅs╠┄┄┄\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄\n┊ .ʜᴀᴄᴋ e.g (.hack xd)\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄\n\n> ᴍᴀʟᴠɪɴ-xᴅ ✻\n",
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
                      'body': "ᴍᴀʟᴠɪɴ ᴋɪɴɢ",
                      'mediaType': 0x1,
                      'sourceUrl': "https://github.com/kingmalvn",
                      'thumbnailUrl': "https://files.catbox.moe/7pg2gp.jpg",
                      'renderLargerThumbnail': false,
                      'showAdAttribution': true
                    }
                  }
                }, {
                  'quoted': _0x593f8e
                });
              } else {
                if (_0x221684 === '5') {
                  await _0x1c1d6e.sendMessage(_0x1c9a90, {
                    'image': {
                      'url': "https://files.catbox.moe/7pg2gp.jpg"
                    },
                    'caption': "\n┄┄╣ᴍᴀʟᴠɪɴ xᴅ ᴄᴏɴᴠᴇʀᴛ ᴄᴍᴅs╠┄┄┄\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄  \n┊ .sᴛɪᴄᴋᴇʀ\n┊ .ᴛᴛs\n┊ .ᴛʀᴛ\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄\n\n> ᴍᴀʟᴠɪɴ-xᴅ ✻\n",
                    'contextInfo': {
                      'mentionedJid': ["263714757857@s.whatsapp.net"],
                      'groupMentions': [],
                      'forwardingScore': 0x1,
                      'isForwarded': true,
                      'forwardedNewsletterMessageInfo': {
                        'newsletterJid': "120363306168354073@newsletter",
                        'newsletterName': "ᴍᴀʟᴠɪɴ-xᴅ✻",
                        'serverMessageId': 0x3e7
                      },
                      'externalAdReply': {
                        'title': "MALVIN XD",
                        'body': "ᴍᴀʟᴠɪɴ ᴋɪɴɢ",
                        'mediaType': 0x1,
                        'sourceUrl': 'https://github.com/kingmalvn',
                        'thumbnailUrl': "https://files.catbox.moe/7pg2gp.jpg",
                        'renderLargerThumbnail': false,
                        'showAdAttribution': true
                      }
                    }
                  }, {
                    'quoted': _0x593f8e
                  });
                } else {
                  if (_0x221684 === '6') {
                    await _0x1c1d6e.sendMessage(_0x1c9a90, {
                      'image': {
                        'url': "https://files.catbox.moe/7pg2gp.jpg"
                      },
                      'caption': "\n┄┄╣ᴍᴀʟᴠɪɴ xᴅ ᴀɪ ᴄᴍᴅs╠┄┄┄\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄  \n┊ .ᴀɪ\n┊ .ɢᴘᴛ\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄\n\n> ᴍᴀʟᴠɪɴ-xᴅ ✻\n",
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
                          'body': "ᴍᴀʟᴠɪɴ ᴛᴇᴄʜ🪀 ᴛʜᴀʀᴜᴍɪɴ",
                          'mediaType': 0x1,
                          'sourceUrl': "https://github.com/kingmalvn",
                          'thumbnailUrl': 'https://files.catbox.moe/7pg2gp.jpg',
                          'renderLargerThumbnail': false,
                          'showAdAttribution': true
                        }
                      }
                    }, {
                      'quoted': _0x593f8e
                    });
                  } else {
                    if (_0x221684 === '7') {
                      await _0x1c1d6e.sendMessage(_0x1c9a90, {
                        'image': {
                          'url': "https://files.catbox.moe/7pg2gp.jpg"
                        },
                        'caption': "\n┄╣ᴍᴀʟᴠɪɴ xᴅ ɢʀᴏᴜᴘ ᴄᴍᴅs╠┄┄┄\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄  \n┊ .ᴍᴜᴛᴇ\n┊ .ᴜɴᴍᴜᴛᴇ\n┊ .ᴘʀᴏᴍᴏᴛᴇ\n┊ .ᴛᴀɢᴀʟʟ\n┊ .ᴅᴇᴍᴏᴛᴇ\n┊ .ʜɪᴅᴇᴛᴀɢ\n┊ .ᴋɪᴄᴋ\n┊ .ᴀᴅᴅ\n┊ .ᴋɪᴄᴋᴀʟʟ\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄\n\n> ᴍᴀʟᴠɪɴ-xᴅ ✻\n",
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
                            'body': "ᴍᴀʟᴠɪɴ ᴋɪɴɢ",
                            'mediaType': 0x1,
                            'sourceUrl': "https://github.com/kingmalvn",
                            'thumbnailUrl': "https://files.catbox.moe/7pg2gp.jpg",
                            'renderLargerThumbnail': false,
                            'showAdAttribution': true
                          }
                        }
                      }, {
                        'quoted': _0x593f8e
                      });
                    } else {
                      if (_0x221684 === '8') {
                        await _0x1c1d6e.sendMessage(_0x1c9a90, {
                          'image': {
                            'url': "https://files.catbox.moe/7pg2gp.jpg"
                          },
                          'caption': "\n┄┄╣ᴍᴀʟᴠɪɴ xᴅ ᴏᴡɴᴇʀ ᴄᴍᴅs╠┄┄┄\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄  \n┊ .ʙʟᴏᴄᴋ\n┊ .ᴜɴʙʟᴏᴄᴋ\n┊ .ᴊɪᴅ\n┊ .ɢᴊɪᴅ\n┊ .ʀᴇsᴛᴀʀᴛ\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄\n\n> ᴍᴀʟᴠɪɴ-xᴅ ✻\n",
                          'contextInfo': {
                            'mentionedJid': ["263714757857@s.whatsapp.net"],
                            'groupMentions': [],
                            'forwardingScore': 0x1,
                            'isForwarded': true,
                            'forwardedNewsletterMessageInfo': {
                              'newsletterJid': '120363306168354073@newsletter',
                              'newsletterName': "Lααɾα-ᴍᴅ ✻",
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
                          'quoted': _0x593f8e
                        });
                      } else if (_0x221684 === '9') {
                        await _0x1c1d6e.sendMessage(_0x1c9a90, {
                          'image': {
                            'url': 'https://files.catbox.moe/7pg2gp.jpg'
                          },
                          'caption': "\n┄┄╣ᴍᴀʟᴠɪɴ xᴅ sʏsᴛᴇᴍ ᴄᴍᴅs╠┄┄┄\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄\n┊ .ᴘɪɴɢ\n┊ .sʏsᴛᴇᴍ\n┊ .ʀᴇsᴛᴀʀᴛ\n┊ .ᴏᴡɴᴇʀ\n┊ .ʀᴇᴘᴏ\n┊ .sʀᴄ\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄\n\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴᴇxᴜs ᴛᴇᴄʜ\n",
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
                              'body': "ᴍᴀʟᴠɪɴ ᴋɪɴɢ",
                              'mediaType': 0x1,
                              'sourceUrl': 'https://github.com/kingmalvn,
                              'thumbnailUrl': "https://files.catbox.moe/7pg2gp.jpg",
                              'renderLargerThumbnail': false,
                              'showAdAttribution': true
                            }
                          }
                        }, {
                          'quoted': _0x593f8e
                        });
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });
  } catch (_0x3113c6) {
    console.log(_0x3113c6);
    _0x2848c1('' + _0x3113c6);
  }
});