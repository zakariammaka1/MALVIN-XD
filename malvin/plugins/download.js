const {
  fetchJson
} = require("../functions");
const {
  downloadTiktok
} = require('@mrnima/tiktok-downloader');
const {
  facebook
} = require('@mrnima/facebook-downloader');
const cheerio = require("cheerio");
const {
  igdl
} = require('ruhend-scraper');
const axios = require("axios");
const {
  cmd,
  commands
} = require("../command");
cmd({
  'pattern': "tiktok",
  'alias': ['tt'],
  'react': '🎥',
  'desc': "download tt videos",
  'category': "download",
  'filename': __filename
}, async (_0xd05a5a, _0x26ba21, _0x35be1e, {
  from: _0x5f33b,
  quoted: _0x3a2f84,
  body: _0x49efaa,
  isCmd: _0x14d3d6,
  command: _0x49c2e2,
  args: _0x18be43,
  q: _0x223eda,
  isGroup: _0x4ded70,
  sender: _0x2933b9,
  senderNumber: _0x1be002,
  botNumber2: _0x206c79,
  botNumber: _0x506b81,
  pushname: _0x11c26c,
  isMe: _0x472063,
  isOwner: _0x2ad664,
  groupMetadata: _0x8f9729,
  groupName: _0x2a6196,
  participants: _0x19d9ed,
  groupAdmins: _0x5161f5,
  isBotAdmins: _0x2f11d4,
  isAdmins: _0xd15949,
  reply: _0x28200b
}) => {
  try {
    if (!_0x223eda && !_0x223eda.startsWith("https://")) {
      return _0x28200b("*`Need url`*");
    }
    _0x35be1e.react('⬇️');
    let _0x46bc71 = await downloadTiktok(_0x223eda);
    let _0x160966 = "\n┏━┫*⚬ᴍᴀʟᴠɪɴ-ᴍxᴅ-ᴛɪᴋᴛᴏᴋ⚬*┣━✾\n┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┻\n*ᴛɪᴛʟᴇ*:  " + _0x46bc71.result.title + "\n\n*🔢 ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ*\n\n*ᴠɪᴅᴇᴏ ꜰɪʟᴇ* 🎬\n\n*1*     ┃  *ꜱᴅ Qᴜᴀʟɪᴛʏ*\n*2*     ┃  *ʜᴅ Qᴜᴀʟɪᴛʏ*\n\n*ᴀᴜᴅɪᴏ ꜰɪʟᴇ*🎧\n\n*3*     ┃  *ᴀᴜᴅɪᴏ*\n\n> ᴍᴀʟᴠɪɴ-ᴍxᴅ ✻\n     ";
    const _0x4205bd = await _0xd05a5a.sendMessage(_0x5f33b, {
      'image': {
        'url': _0x46bc71.result.image
      },
      'caption': _0x160966,
      'contextInfo': {
        'mentionedJid': ["263714757857@s.whatsapp.net"],
        'groupMentions': [],
        'forwardingScore': 0x1,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363306168354073@newsletter",
          'newsletterName': "ᴍᴀʟᴠɪɴ-ᴍxᴅ ✻",
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
      'quoted': _0x26ba21
    });
    const _0x14c7c6 = _0x4205bd.key.id;
    _0xd05a5a.ev.on("messages.upsert", async _0x1d5bf1 => {
      const _0x2a892f = _0x1d5bf1.messages[0x0];
      if (!_0x2a892f.message) {
        return;
      }
      const _0x2f17cf = _0x2a892f.message.conversation || _0x2a892f.message.extendedTextMessage?.["text"];
      const _0x3c0e00 = _0x2a892f.key.remoteJid;
      const _0x5325db = _0x2a892f.message.extendedTextMessage && _0x2a892f.message.extendedTextMessage.contextInfo.stanzaId === _0x14c7c6;
      if (_0x5325db) {
        await _0xd05a5a.sendMessage(_0x3c0e00, {
          'react': {
            'text': '⬇️',
            'key': _0x2a892f.key
          }
        });
        let _0x52c5df = _0x46bc71.result;
        await _0xd05a5a.sendMessage(_0x3c0e00, {
          'react': {
            'text': '⬆️',
            'key': _0x2a892f.key
          }
        });
        if (_0x2f17cf === '1') {
          await _0xd05a5a.sendMessage(_0x3c0e00, {
            'video': {
              'url': _0x52c5df.dl_link.download_mp4_1
            },
            'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ · · ·*",
            'contextInfo': {
              'mentionedJid': ["263714757857@s.whatsapp.net"],
              'groupMentions': [],
              'forwardingScore': 0x1,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "120363306168354073@newsletter",
                'newsletterName': "ᴍᴀʟᴠɪɴ-ᴍxᴅ ✻",
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
            'quoted': _0x2a892f
          });
        } else {
          if (_0x2f17cf === '2') {
            await _0xd05a5a.sendMessage(_0x3c0e00, {
              'video': {
                'url': _0x52c5df.dl_link.download_mp4_2
              },
              'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ · · ·*",
              'contextInfo': {
                'mentionedJid': ["263714757857@s.whatsapp.net"],
                'groupMentions': [],
                'forwardingScore': 0x1,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "120363306168354073@newsletter",
                  'newsletterName': "ᴍᴀʟᴠɪɴ-ᴍxᴅ ✻",
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
              'quoted': _0x2a892f
            });
          } else if (_0x2f17cf === '3') {
            await _0xd05a5a.sendMessage(_0x3c0e00, {
              'audio': {
                'url': _0x52c5df.dl_link.download_mp3
              },
              'mimetype': "audio/mpeg"
            }, {
              'quoted': _0x2a892f
            });
          }
        }
      }
    });
  } catch (_0x27c628) {
    console.log(_0x27c628);
    _0x28200b('' + _0x27c628);
  }
});
cmd({
  'pattern': 'fb',
  'alias': ["facebook"],
  'desc': "Download Facebook videos",
  'category': "download",
  'filename': __filename
}, async (_0x4156dd, _0x2489d7, _0x47ae72, {
  from: _0x4abbc8,
  quoted: _0x8eb015,
  body: _0xf21044,
  isCmd: _0x5b283b,
  command: _0x26ab99,
  args: _0x365e96,
  q: _0x5de73e,
  isGroup: _0x4ff620,
  sender: _0x24dde4,
  senderNumber: _0x562cb6,
  botNumber2: _0x5c5185,
  botNumber: _0x3589b3,
  pushname: _0x589f42,
  isMe: _0x200066,
  isOwner: _0x2aa22e,
  groupMetadata: _0x2097d6,
  groupName: _0x5f052c,
  participants: _0xb5269d,
  groupAdmins: _0x4efbee,
  isBotAdmins: _0x1f887f,
  isAdmins: _0x54d548,
  reply: _0x3c2400
}) => {
  try {
    if (!_0x5de73e || !_0x5de73e.startsWith("https://")) {
      return _0x4156dd.sendMessage(_0x4abbc8, {
        'text': "*`Need URL`*"
      }, {
        'quoted': _0x2489d7
      });
    }
    await _0x4156dd.sendMessage(_0x4abbc8, {
      'react': {
        'text': '⏳',
        'key': _0x2489d7.key
      }
    });
    const _0x6314e3 = await facebook(_0x5de73e);
    const _0x152e2d = "\n┏━┫*⚬ᴍᴀʟᴠɪɴ-ᴍxᴅ-ꜰʙ⚬*┣━✾\n┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┻\n*⌛ᴅᴜʀᴀᴛɪᴏɴ* : " + _0x6314e3.result.duration + "\n\n*🔢 ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ*\n\n*ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅ 🎬*\n\n*1.1*     ┃  *ꜱᴅ Qᴜᴀʟɪᴛʏ*\n*1.2*     ┃  *ʜᴅ Qᴜᴀʟɪᴛʏ*\n\n*ᴀᴜᴅɪᴏ ᴅᴏᴡɴʟᴏᴀᴅ 🎧*\n\n*2.1*     ┃  *ᴀᴜᴅɪᴏ*\n*2.2*     ┃  *ᴅᴏᴄᴜᴍᴇɴᴛ*\n*2.3*     ┃  *ᴠᴏɪᴄᴇ*\n\n> ᴍᴀʟᴠɪɴ-ᴍxᴅ✻\n";
    const _0x23a7c5 = await _0x4156dd.sendMessage(_0x4abbc8, {
      'image': {
        'url': _0x6314e3.result.thumbnail
      },
      'caption': _0x152e2d,
      'contextInfo': {
        'mentionedJid': ["263714757857@s.whatsapp.net"],
        'groupMentions': [],
        'forwardingScore': 0x1,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363306168354073@newsletter",
          'newsletterName': "ᴍᴀʟᴠɪɴ-ᴍxᴅ ✻",
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
      'quoted': _0x2489d7
    });
    const _0x1173da = _0x23a7c5.key.id;
    _0x4156dd.ev.on("messages.upsert", async _0x2fb933 => {
      const _0x1d6a56 = _0x2fb933.messages[0x0];
      if (!_0x1d6a56.message) {
        return;
      }
      const _0x52cadb = _0x1d6a56.message.conversation || _0x1d6a56.message.extendedTextMessage?.['text'];
      const _0x4661c9 = _0x1d6a56.key.remoteJid;
      const _0x3676ae = _0x1d6a56.message.extendedTextMessage && _0x1d6a56.message.extendedTextMessage.contextInfo.stanzaId === _0x1173da;
      if (_0x3676ae) {
        await _0x4156dd.sendMessage(_0x4661c9, {
          'react': {
            'text': '⬇️',
            'key': _0x1d6a56.key
          }
        });
        let _0x46a3fc = _0x6314e3.result;
        await _0x4156dd.sendMessage(_0x4661c9, {
          'react': {
            'text': '⬆️',
            'key': _0x1d6a56.key
          }
        });
        if (_0x52cadb === "1.1") {
          await _0x4156dd.sendMessage(_0x4661c9, {
            'video': {
              'url': _0x46a3fc.links.SD
            },
            'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ · · ·*",
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
            'quoted': _0x1d6a56
          });
        } else {
          if (_0x52cadb === '1.2') {
            await _0x4156dd.sendMessage(_0x4661c9, {
              'video': {
                'url': _0x46a3fc.links.HD
              },
              'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ· · ·*",
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
              'quoted': _0x1d6a56
            });
          } else {
            if (_0x52cadb === "2.1") {
              await _0x4156dd.sendMessage(_0x4661c9, {
                'audio': {
                  'url': _0x46a3fc.links.SD
                },
                'mimetype': "audio/mpeg"
              }, {
                'quoted': _0x1d6a56
              });
            } else {
              if (_0x52cadb === '2.2') {
                await _0x4156dd.sendMessage(_0x4661c9, {
                  'document': {
                    'url': _0x46a3fc.links.SD
                  },
                  'mimetype': "audio/mpeg",
                  'fileName': 'MALVIN XD/FBDL.mp3',
                  'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ · · ·*",
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
                  'quoted': _0x1d6a56
                });
              } else if (_0x52cadb === "2.3") {
                await _0x4156dd.sendMessage(_0x4661c9, {
                  'audio': {
                    'url': _0x46a3fc.links.SD
                  },
                  'mimetype': "audio/mp4",
                  'ptt': true
                }, {
                  'quoted': _0x1d6a56
                });
              }
            }
          }
        }
      }
    });
  } catch (_0x3e7997) {
    console.log(_0x3e7997);
    _0x3c2400('' + _0x3e7997);
  }
});
cmd({
  'pattern': "twitter",
  'alias': ['tweet', 'twdl'],
  'desc': "Download Twitter videos",
  'category': 'download',
  'filename': __filename
}, async (_0x4d5c93, _0x861314, _0x1edd81, {
  from: _0x58a3be,
  quoted: _0x226f94,
  body: _0x4da849,
  isCmd: _0x4f6446,
  command: _0x467ecb,
  args: _0x1514b1,
  q: _0x268801,
  isGroup: _0x29355c,
  sender: _0x8b432a,
  senderNumber: _0x5c85fd,
  botNumber2: _0x32da97,
  botNumber: _0x4b48d6,
  pushname: _0x362c1e,
  isMe: _0x1fdf72,
  isOwner: _0x14df52,
  groupMetadata: _0x121599,
  groupName: _0x42369e,
  participants: _0x4c26f7,
  groupAdmins: _0x1dd3ae,
  isBotAdmins: _0x1c3361,
  isAdmins: _0x232fb7,
  reply: _0x1905cf
}) => {
  try {
    if (!_0x268801 || !_0x268801.startsWith("https://")) {
      return _0x4d5c93.sendMessage(_0x58a3be, {
        'text': "❌ Please provide a valid Twitter URL."
      }, {
        'quoted': _0x861314
      });
    }
    await _0x4d5c93.sendMessage(_0x58a3be, {
      'react': {
        'text': '⏳',
        'key': _0x861314.key
      }
    });
    const _0x564240 = await axios.get('https://www.dark-yasiya-api.site/download/twitter?url=' + _0x268801);
    const _0x5f10b0 = _0x564240.data;
    if (!_0x5f10b0 || !_0x5f10b0.status || !_0x5f10b0.result) {
      return _0x1edd81.reply("Failed to retrieve Twitter video. Please check the link and try again.");
    }
    const {
      desc: _0x52a1cb,
      thumb: _0x4a5be7,
      video_sd: _0x3fcee7,
      video_hd: _0x36c35b
    } = _0x5f10b0.result;
    const _0x5d034c = await _0x4d5c93.sendMessage(_0x58a3be, {
      'image': {
        'url': _0x4a5be7
      },
      'caption': "\n┏━┫*⚬ᴍᴀʟᴠɪɴ-xᴅ-ᴛᴡɪᴛᴇʀ⚬*┣━✾\n┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┻\n*🔢 ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ*\n\n*ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅ 🎬*\n\n*1.1*     ┃  *ꜱᴅ Qᴜᴀʟɪᴛʏ*\n*1.2*     ┃  *ʜᴅ Qᴜᴀʟɪᴛʏ*\n\n*ᴀᴜᴅɪᴏ ᴅᴏᴡɴʟᴏᴀᴅ 🎧*\n\n*2.1*     ┃  *ᴀᴜᴅɪᴏ*\n*2.2*     ┃  *ᴅᴏᴄᴜᴍᴇɴᴛ*\n*2.3*     ┃  *ᴠᴏɪᴄᴇ*\n\n> ᴍᴀʟᴠɪɴ-xᴅ ✻\n",
      'contextInfo': {
        'mentionedJid': ["263714757857@s.whatsapp.net"],
        'groupMentions': [],
        'forwardingScore': 0x1,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363306168354073@newsletter",
          'newsletterName': "Lααɾα-ᴍᴅ ✻",
          'serverMessageId': 0x3e7
        },
        'externalAdReply': {
          'title': "MALVIN XD",
          'body': "ᴍᴀʟᴠɪɴ ᴋɪɴɢ",
          'mediaType': 0x1,
          'sourceUrl': 'https://github.com/kingmalvn',
          'thumbnailUrl': "https://raw.githubusercontent.com/https://files.catbox.moe/7pg2gp.jpg",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x861314
    });
    const _0x5323c5 = _0x5d034c.key.id;
    _0x4d5c93.ev.on("messages.upsert", async _0x4c81a2 => {
      const _0x2cf831 = _0x4c81a2.messages[0x0];
      if (!_0x2cf831.message) {
        return;
      }
      const _0x3c82cd = _0x2cf831.message.conversation || _0x2cf831.message.extendedTextMessage?.["text"];
      const _0xff2bce = _0x2cf831.key.remoteJid;
      const _0x28431c = _0x2cf831.message.extendedTextMessage && _0x2cf831.message.extendedTextMessage.contextInfo.stanzaId === _0x5323c5;
      if (_0x28431c) {
        await _0x4d5c93.sendMessage(_0xff2bce, {
          'react': {
            'text': '⬇️',
            'key': _0x2cf831.key
          }
        });
        if (_0x3c82cd === "1.1") {
          await _0x4d5c93.sendMessage(_0xff2bce, {
            'video': {
              'url': _0x3fcee7
            },
            'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ · · ·*"
          }, {
            'quoted': _0x2cf831
          });
        } else {
          if (_0x3c82cd === "1.2") {
            await _0x4d5c93.sendMessage(_0xff2bce, {
              'video': {
                'url': _0x36c35b
              },
              'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ · · ·*"
            }, {
              'quoted': _0x2cf831
            });
          } else {
            if (_0x3c82cd === '2.1') {
              await _0x4d5c93.sendMessage(_0xff2bce, {
                'audio': {
                  'url': _0x3fcee7
                },
                'mimetype': 'audio/mpeg'
              }, {
                'quoted': _0x2cf831
              });
            } else {
              if (_0x3c82cd === "2.2") {
                await _0x4d5c93.sendMessage(_0xff2bce, {
                  'document': {
                    'url': _0x3fcee7
                  },
                  'mimetype': "audio/mpeg",
                  'fileName': 'ᴍᴀʟᴠɪɴ-xᴅ/TWDL.mp3',
                  'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ · · ·*",
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
                  'quoted': _0x2cf831
                });
              } else if (_0x3c82cd === "2.3") {
                await _0x4d5c93.sendMessage(_0xff2bce, {
                  'audio': {
                    'url': _0x3fcee7
                  },
                  'mimetype': 'audio/mp4',
                  'ptt': true
                }, {
                  'quoted': _0x2cf831
                });
              }
            }
          }
        }
      }
    });
  } catch (_0xd532e7) {
    console.log(_0xd532e7);
    _0x1905cf("An error occurred: " + _0xd532e7);
  }
});
cmd({
  'pattern': "mediafire",
  'alias': 'mfire',
  'desc': "To download MediaFire files.",
  'react': '🎥',
  'category': 'download',
  'filename': __filename
}, async (_0x410b5b, _0x544f4c, _0x28dd7b, {
  from: _0x5d45bf,
  quoted: _0x26b95e,
  body: _0xfb0b19,
  isCmd: _0x12eb85,
  command: _0x10814e,
  args: _0x399dd9,
  q: _0x113cac,
  isGroup: _0x59fe21,
  sender: _0x43a605,
  senderNumber: _0xab7654,
  botNumber2: _0x267360,
  botNumber: _0x569996,
  pushname: _0x58d301,
  isMe: _0x277e86,
  isOwner: _0x300604,
  groupMetadata: _0x4089e1,
  groupName: _0x470720,
  participants: _0x1373cb,
  groupAdmins: _0x4186ff,
  isBotAdmins: _0x49d0de,
  isAdmins: _0x4594ca,
  reply: _0x8b71cc
}) => {
  try {
    if (!_0x113cac) {
      return _0x28dd7b.reply("Please provide a valid MediaFire link.");
    }
    _0x28dd7b.react('⬇️');
    const _0x1641f3 = await axios.get("https://www.dark-yasiya-api.site/download/mfire?url=" + _0x113cac);
    const _0x2ff6c6 = _0x1641f3.data;
    if (!_0x2ff6c6 || !_0x2ff6c6.status || !_0x2ff6c6.result || !_0x2ff6c6.result.dl_link) {
      return _0x28dd7b.reply("Failed to fetch MediaFire download link. Ensure the link is valid and public.");
    }
    const _0x4fa38f = _0x2ff6c6.result.dl_link;
    const _0x3ed302 = _0x2ff6c6.result.fileName || "mediafire_download";
    const _0x203bee = _0x2ff6c6.result.fileType || "application/octet-stream";
    _0x28dd7b.react('⬆️');
    let _0x5b95f1 = "\n┏━┫*⚬ᴍᴀʟᴠɪɴ-xᴅ-ᴍꜰɪʀᴇ⚬*┣━✾\n┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┻\n*ꜰɪʟᴇ ɴᴀᴍᴇ :* " + _0x3ed302 + "\n\n*ꜰɪʟᴇ ᴛʏᴘᴇ :* " + _0x203bee + "\n\n> ᴍᴀʟᴠɪɴ-xᴅ ✻\n        ";
    await _0x410b5b.sendMessage(_0x5d45bf, {
      'document': {
        'url': _0x4fa38f
      },
      'mimetype': _0x203bee,
      'fileName': _0x3ed302,
      'caption': _0x5b95f1,
      'contextInfo': {
        'mentionedJid': ["263714757857@s.whatsapp.net"],
        'groupMentions': [],
        'forwardingScore': 0x1,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363306168354073@newsletter",
          'newsletterName': "Lααɾα-ᴍᴅ ✻",
          'serverMessageId': 0x3e7
        },
        'externalAdReply': {
          'title': "MALVIN XD",
          'body': "ᴍᴀʟᴠɪɴ ᴋɪɴɢ",
          'mediaType': 0x1,
          'sourceUrl': "https://github.com/kingmalvn",
          'thumbnailUrl': 'https://files.catbox.moe/7pg2gp.jpg',
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x544f4c
    });
  } catch (_0x5f045e) {
    console.error(_0x5f045e);
    _0x8b71cc("An error occurred: " + _0x5f045e.message);
  }
});
cmd({
  'pattern': 'ig',
  'desc': "To download instagram videos.",
  'react': '🎥',
  'category': "download",
  'filename': __filename
}, async (_0x5e13d6, _0x531635, _0xf40869, {
  from: _0x1922bf,
  quoted: _0x1e3189,
  body: _0x41f777,
  isCmd: _0x33c79d,
  command: _0x1a6f63,
  args: _0x1c6626,
  q: _0x287315,
  isGroup: _0x4654a0,
  sender: _0x22bd06,
  senderNumber: _0x5e7e44,
  botNumber2: _0x343fc6,
  botNumber: _0x4f7e98,
  pushname: _0x1e9b23,
  isMe: _0x23b6b4,
  isOwner: _0x1926bc,
  groupMetadata: _0x1fd48c,
  groupName: _0x3cf890,
  participants: _0x1145c8,
  groupAdmins: _0x509bfc,
  isBotAdmins: _0x1ed57d,
  isAdmins: _0x57096b,
  reply: _0x1c3f33
}) => {
  try {
    if (!_0x287315) {
      return _0xf40869.reply("Please Give Me a vaild Link...");
    }
    _0xf40869.react('⬇️');
    let _0x12fb36 = await igdl(_0x287315);
    let _0x24c1b0 = await _0x12fb36.data;
    for (let _0x49fc82 = 0x0; _0x49fc82 < 0x14; _0x49fc82++) {
      let _0x20b107 = _0x24c1b0[_0x49fc82];
      let _0x1ecbb9 = _0x20b107.url;
      _0xf40869.react('⬆️');
      await _0x5e13d6.sendMessage(_0x1922bf, {
        'video': {
          'url': _0x1ecbb9
        },
        'mimetype': "video/mp4",
        'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ · · ·*",
        'contextInfo': {
          'mentionedJid': ["263714757857@s.whatsapp.net"],
          'groupMentions': [],
          'forwardingScore': 0x1,
          'isForwarded': true,
          'forwardedNewsletterMessageInfo': {
            'newsletterJid': "120363306168354073@newsletter",
            'newsletterName': "Lααɾα-ᴍᴅ ✻",
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
        'quoted': _0x531635
      });
      _0xf40869.react('✅');
    }
  } catch (_0x1cf4a5) {
    console.log(_0x1cf4a5);
  }
});
async function xdl(_0x338b67) {
  return new Promise((_0x1b431f, _0x135d88) => {
    fetch('' + _0x338b67, {
      'method': 'get'
    }).then(_0xbd412a => _0xbd412a.text()).then(_0x45a807 => {
      const _0x2081a1 = cheerio.load(_0x45a807, {
        'xmlMode': false
      });
      const _0x5b8b27 = _0x2081a1("meta[property=\"og:title\"]").attr("content");
      const _0x48abab = _0x2081a1("meta[property=\"og:duration\"]").attr("content");
      const _0x19f7a4 = _0x2081a1("meta[property=\"og:image\"]").attr("content");
      const _0x32d295 = _0x2081a1("meta[property=\"og:video:type\"]").attr("content");
      const _0x109f97 = _0x2081a1("meta[property=\"og:video:width\"]").attr("content");
      const _0x317650 = _0x2081a1("meta[property=\"og:video:height\"]").attr('content');
      const _0xf457b8 = _0x2081a1("span.metadata").text();
      const _0x29920a = _0x2081a1("#video-player-bg > script:nth-child(6)").html();
      const _0x1ae2ff = {
        'low': (_0x29920a.match("html5player.setVideoUrlLow\\('(.*?)'\\);") || [])[0x1],
        'high': _0x29920a.match("html5player.setVideoUrlHigh\\('(.*?)'\\);" || [])[0x1],
        'HLS': _0x29920a.match("html5player.setVideoHLS\\('(.*?)'\\);" || [])[0x1],
        'thumb': _0x29920a.match("html5player.setThumbUrl\\('(.*?)'\\);" || [])[0x1],
        'thumb69': _0x29920a.match("html5player.setThumbUrl169\\('(.*?)'\\);" || [])[0x1],
        'thumbSlide': _0x29920a.match("html5player.setThumbSlide\\('(.*?)'\\);" || [])[0x1],
        'thumbSlideBig': _0x29920a.match("html5player.setThumbSlideBig\\('(.*?)'\\);" || [])[0x1]
      };
      _0x1b431f({
        'status': true,
        'result': {
          'title': _0x5b8b27,
          'URL': _0x338b67,
          'duration': _0x48abab,
          'image': _0x19f7a4,
          'videoType': _0x32d295,
          'videoWidth': _0x109f97,
          'videoHeight': _0x317650,
          'info': _0xf457b8,
          'files': _0x1ae2ff
        }
      });
    })["catch"](_0x3ffff1 => _0x135d88({
      'status': false,
      'result': _0x3ffff1
    }));
  });
}
cmd({
  'pattern': 'xnxxdown',
  'alias': ["dlxnxx", "xnxxdl"],
  'react': '🫣',
  'desc': "Download xnxx videos",
  'category': "nsfw",
  'use': ".xnxx <xnxx link>",
  'filename': __filename
}, async (_0x49cf18, _0x1772a1, _0x519aee, {
  from: _0x50bf7d,
  l: _0x49af75,
  quoted: _0x10a5d9,
  body: _0x2250d2,
  isCmd: _0x599f9f,
  command: _0x365b55,
  args: _0x3f5cfc,
  q: _0x71d9b6,
  isGroup: _0x336005,
  sender: _0x5db03f,
  senderNumber: _0x32c012,
  botNumber2: _0x5d955b,
  botNumber: _0x268fa2,
  pushname: _0x329a9e,
  isMe: _0x27a17e,
  isOwner: _0x4fe60e,
  groupMetadata: _0x283acd,
  groupName: _0x193319,
  participants: _0x43611f,
  groupAdmins: _0x5b0782,
  isBotAdmins: _0xfa533f,
  isAdmins: _0x3f22f1,
  reply: _0x2a4293
}) => {
  try {
    if (!_0x71d9b6) {
      return _0x2a4293("*Please give me url !!*");
    }
    let _0x407107 = await xdl(_0x71d9b6);
    let _0x48852b = _0x407107.result.title;
    await _0x49cf18.sendMessage(_0x50bf7d, {
      'video': {
        'url': _0x407107.result.files.high
      },
      'caption': _0x48852b,
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
          'body': "ᴍᴀʟᴠɪɴ ᴋɪɴɢ",
          'mediaType': 0x1,
          'sourceUrl': "https://github.com/kingmalvn",
          'thumbnailUrl': 'https://files.catbox.moe/7pg2gp.jpg',
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x1772a1
    });
  } catch (_0x4af443) {
    _0x2a4293("*Error !!*");
    console.log(_0x4af443);
  }
});
cmd({
  'pattern': 'xvdown',
  'alias': ["dlxv", "xvdl"],
  'react': '🫣',
  'desc': "Download xvideos videos",
  'category': "nsfw",
  'use': ".xv <xvideos link>",
  'filename': __filename
}, async (_0x53bee9, _0x5db294, _0x5e5fdd, {
  from: _0x17e801,
  l: _0x41f57a,
  quoted: _0x1459f7,
  body: _0x66bc1a,
  isCmd: _0x21ce44,
  command: _0xbffda6,
  args: _0x9513a6,
  q: _0x232bb8,
  isGroup: _0x19f349,
  sender: _0x3095bc,
  senderNumber: _0x2f4ea2,
  botNumber2: _0x21206d,
  botNumber: _0x1f992e,
  pushname: _0x34ae45,
  isMe: _0x51f6d2,
  isOwner: _0xa322e6,
  groupMetadata: _0x35c082,
  groupName: _0x1743c2,
  participants: _0x233b02,
  groupAdmins: _0x4aa3c4,
  isBotAdmins: _0x43e90e,
  isAdmins: _0x221e72,
  reply: _0x343b4e
}) => {
  try {
    if (!_0x232bb8) {
      return _0x343b4e("*Please give me url !!*");
    }
    let _0x4dc1f4 = await fetchJson("https://www.dark-yasiya-api.site/download/xvideo?url=" + _0x232bb8);
    const _0xefde7e = "\n   🔞 *XVIDEO DOWNLOADER* 🔞\n\n     \n• *Title* - " + _0x4dc1f4.result.title + "\n\n• *Views* - " + _0x4dc1f4.result.views + "\n\n• *Like* - " + _0x4dc1f4.result.like + "\n\n• *Deslike* - " + _0x4dc1f4.result.deslike + "\n\n• *Size* - " + _0x4dc1f4.result.size;
    await _0x53bee9.sendMessage(_0x17e801, {
      'video': {
        'url': _0x4dc1f4.result.dl_link
      },
      'caption': _0xefde7e,
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
      'quoted': _0x5db294
    });
  } catch (_0x433def) {
    _0x343b4e("*Error !!*");
    console.log(_0x433def);
  }
});
cmd({
  'pattern': "apk",
  'desc': "Download apk.",
  'category': "download",
  'filename': __filename
}, async (_0x31eeae, _0x356ec7, _0x1947e5, {
  from: _0x455e10,
  quoted: _0x1c5d81,
  body: _0x358ebc,
  isCmd: _0x16d34b,
  command: _0x5db7a2,
  args: _0x4feb66,
  q: _0x20a62a,
  isGroup: _0x4350a4,
  sender: _0x2aa266,
  senderNumber: _0x585d87,
  botNumber2: _0x38a7ac,
  botNumber: _0x2d0db0,
  pushname: _0x15f664,
  isMe: _0x4c571e,
  isOwner: _0x558135,
  groupMetadata: _0x2af2fd,
  groupName: _0x5b8aa4,
  participants: _0x17bf3f,
  groupAdmins: _0x5ed59a,
  isBotAdmins: _0x5f46ac,
  isAdmins: _0x5ee8f5,
  reply: _0x43e163
}) => {
  try {
    await _0x1947e5.react('⬇');
    const _0x5c62c8 = 'http://ws75.aptoide.com/api/7/apps/search/query=' + _0x20a62a + "/limit=1";
    const _0x997882 = await axios.get(_0x5c62c8);
    const _0x133cf0 = _0x997882.data;
    let _0x55122c = _0x133cf0.datalist.list[0x0].size % 0xf4240;
    let _0x1a4e68 = '.' + _0x55122c;
    let _0x503e81 = _0x133cf0.datalist.list[0x0].size / 0xf4240;
    let _0xe88a95 = _0x503e81 - _0x1a4e68;
    let _0x3a6517 = "\n┏━┫*⚬ᴍᴀʟᴠɪɴ-xᴅ-ᴀᴘᴋ⚬*┣━✾\n┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┻\n*🏷️ Nᴀᴍᴇ :* " + _0x133cf0.datalist.list[0x0].name + "\n\n*📦 Sɪᴢᴇ :* " + _0xe88a95 + "MB\n\n*🔖 Pᴀᴄᴋᴀɢᴇ :* " + _0x133cf0.datalist.list[0x0]["package"] + "\n\n*📆 Lᴀꜱᴛ Uᴘᴅᴀᴛᴇ :* " + _0x133cf0.datalist.list[0x0].updated + "\n\n*👤 Dᴇᴠᴇʟᴏᴘᴇʀꜱ :* " + _0x133cf0.datalist.list[0x0].developer.name + "\n\n> ᴍᴀʟᴠɪɴ-xᴅ ✻\n";
    await _0x1947e5.react('⬆');
    await _0x31eeae.sendMessage(_0x455e10, {
      'document': {
        'url': _0x133cf0.datalist.list[0x0].file.path_alt
      },
      'fileName': _0x133cf0.datalist.list[0x0].name,
      'mimetype': "application/vnd.android.package-archive",
      'caption': _0x3a6517,
      'contextInfo': {
        'mentionedJid': ["263714757857@s.whatsapp.net"],
        'groupMentions': [],
        'forwardingScore': 0x1,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363306168354073@newsletter",
          'newsletterName': "Lααɾα-ᴍᴅ ✻",
          'serverMessageId': 0x3e7
        },
        'externalAdReply': {
          'title': "MALVIN XD",
          'body': "ᴍᴀʟᴠɪɴ ᴋɪɴɢ",
          'mediaType': 0x1,
          'sourceUrl': "https://github.com/kingmalvn",
          'thumbnailUrl': "httpshttps://files.catbox.moe/7pg2gp.jpg",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x356ec7
    });
    await _0x1947e5.react('✅');
  } catch (_0x5e3f8a) {
    console.log(_0x5e3f8a);
    _0x43e163('' + _0x5e3f8a);
  }
});
cmd({
  'pattern': 'gdrive',
  'desc': "To download Gdrive files.",
  'react': '🌐',
  'category': "download",
  'filename': __filename
}, async (_0x38e79e, _0x4288fb, _0x401b01, {
  from: _0x20d682,
  quoted: _0x36f5b1,
  body: _0x3bea1f,
  isCmd: _0x22d4cd,
  command: _0xe61b8b,
  args: _0xec97d8,
  q: _0x20d560,
  isGroup: _0xa656c6,
  sender: _0x3947ce,
  senderNumber: _0xb8b21b,
  botNumber2: _0x3fc61a,
  botNumber: _0x14e4b3,
  pushname: _0x1e1556,
  isMe: _0x1b9bc9,
  isOwner: _0x193040,
  groupMetadata: _0x2c0099,
  groupName: _0x52d27c,
  participants: _0x1c51d8,
  groupAdmins: _0x1e775e,
  isBotAdmins: _0x4b1f04,
  isAdmins: _0xdf738e,
  reply: _0x255a47
}) => {
  try {
    await _0x38e79e.sendMessage(_0x20d682, {
      'react': {
        'text': '⬇️',
        'key': _0x4288fb.key
      }
    });
    if (!_0x20d560) {
      return _0x401b01.reply("Please Give Me a vaild Link...");
    }
    const _0x1f1177 = "https://api.fgmods.xyz/api/downloader/gdrive?url=" + _0x20d560 + "&apikey=mnp3grlZ";
    const _0x539c16 = await axios.get(_0x1f1177);
    const _0x342118 = _0x539c16.data.result.downloadUrl;
    if (_0x342118) {
      await _0x38e79e.sendMessage(_0x20d682, {
        'react': {
          'text': '⬆️',
          'key': _0x4288fb.key
        }
      });
      await _0x38e79e.sendMessage(_0x20d682, {
        'document': {
          'url': _0x342118
        },
        'mimetype': _0x539c16.data.result.mimetype,
        'fileName': _0x539c16.data.result.fileName,
        'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ · · ·*\n\n> ᴍᴀʟᴠɪɴ-xᴅ ✻",
        'contextInfo': {
          'mentionedJid': ["263714757857@s.whatsapp.net"],
          'groupMentions': [],
          'forwardingScore': 0x1,
          'isForwarded': true,
          'forwardedNewsletterMessageInfo': {
            'newsletterJid': "120363306168354073@newsletter",
            'newsletterName': "Lααɾα-ᴍᴅ ✻",
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
        'quoted': _0x4288fb
      });
    }
    await _0x38e79e.sendMessage(_0x20d682, {
      'react': {
        'text': '✅',
        'key': _0x4288fb.key
      }
    });
  } catch (_0xecfe7a) {
    console.log(_0xecfe7a);
  }
});