const axios = require("axios");
const {
  cmd,
  commands
} = require("../command");
const fs = require('fs');
const path = require('path');
const cheerio = require("cheerio");
const {
  sinhalaSub
} = require("mrnima-moviedl");
cmd({
  'pattern': "movie",
  'alias': ["sinhalasub"],
  'react': '📑',
  'category': "download",
  'desc': "Search movies on sinhalasub and get download links",
  'filename': __filename
}, async (_0x2f6766, _0x125962, _0x1dd5f8, {
  from: _0x24e18e,
  q: _0x3b52fc,
  reply: _0x226e44
}) => {
  try {
    if (!_0x3b52fc) {
      return await _0x226e44("*Please provide a search query! (e.g., Deadpool)*");
    }
    var _0x1704f6 = await sinhalaSub();
    const _0x204db2 = await _0x1704f6.search(_0x3b52fc);
    const _0x2cf3ff = _0x204db2.result.slice(0x0, 0xa);
    if (!_0x2cf3ff || _0x2cf3ff.length === 0x0) {
      return await _0x226e44("No results found for: " + _0x3b52fc);
    }
    let _0x5911b8 = "🔢 *Please reply with the number you want to select*\n\n📽️ *Search Results for* \"" + _0x3b52fc + "\":\n\n";
    _0x2cf3ff.forEach((_0x12e099, _0x3146fc) => {
      _0x5911b8 += '*' + (_0x3146fc + 0x1) + ".* " + _0x12e099.title + "\n🔗 Link: " + _0x12e099.link + "\n\n";
    });
    const _0x2a0f37 = await _0x2f6766.sendMessage(_0x24e18e, {
      'text': _0x5911b8,
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
          'title': "LARA MD",
          'body': "ᴍᴀʟᴠɪɴ ᴋɪɴɢ",
          'mediaType': 0x1,
          'sourceUrl': 'https://files.catbox.moe/7pg2gp.jpg',
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x1dd5f8
    });
    const _0x8838f6 = _0x2a0f37.key.id;
    _0x2f6766.ev.on("messages.upsert", async _0x3bab96 => {
      const _0x3214c2 = _0x3bab96.messages[0x0];
      if (!_0x3214c2.message) {
        return;
      }
      const _0x2b5988 = _0x3214c2.message.conversation || _0x3214c2.message.extendedTextMessage?.["text"];
      const _0x157959 = _0x3214c2.message.extendedTextMessage && _0x3214c2.message.extendedTextMessage.contextInfo.stanzaId === _0x8838f6;
      if (_0x157959) {
        const _0x5e2823 = parseInt(_0x2b5988.trim());
        if (!isNaN(_0x5e2823) && _0x5e2823 > 0x0 && _0x5e2823 <= _0x2cf3ff.length) {
          const _0x2c98b3 = _0x2cf3ff[_0x5e2823 - 0x1];
          const _0x41307f = "https://api-site-2.vercel.app/api/sinhalasub/movie?url=" + encodeURIComponent(_0x2c98b3.link);
          try {
            const _0x5d4a59 = await axios.get(_0x41307f);
            const _0x2bd24d = _0x5d4a59.data.result;
            const _0x429a85 = _0x2bd24d.dl_links || [];
            if (_0x429a85.length === 0x0) {
              return await _0x226e44("No PixelDrain links found.");
            }
            let _0x2ca2bc = "🔢 *Please reply with the number you want to select*\n\n🎥 *" + _0x2bd24d.title + "*\n\n";
            _0x2ca2bc += "*Available PixelDrain Download Links:*\n";
            _0x429a85.forEach((_0x38f181, _0x400b6f) => {
              _0x2ca2bc += '*' + (_0x400b6f + 0x1) + ".* " + _0x38f181.quality + " - " + _0x38f181.size + "\n🔗 Link: " + _0x38f181.link + "\n\n";
            });
            const _0x266dc6 = await _0x2f6766.sendMessage(_0x24e18e, {
              'text': _0x2ca2bc,
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
                  'thumbnailUrl': 'https://files.catbox.moe/7pg2gp.jpg',
                  'renderLargerThumbnail': false,
                  'showAdAttribution': true
                }
              }
            }, {
              'quoted': _0x3214c2
            });
            const _0x1b305b = _0x266dc6.key.id;
            _0x2f6766.ev.on("messages.upsert", async _0x3bac68 => {
              const _0x143aee = _0x3bac68.messages[0x0];
              if (!_0x143aee.message) {
                return;
              }
              const _0x2901f3 = _0x143aee.message.conversation || _0x143aee.message.extendedTextMessage?.['text'];
              const _0x528933 = _0x143aee.message.extendedTextMessage && _0x143aee.message.extendedTextMessage.contextInfo.stanzaId === _0x1b305b;
              if (_0x528933) {
                const _0x5ee7ba = parseInt(_0x2901f3.trim());
                if (!isNaN(_0x5ee7ba) && _0x5ee7ba > 0x0 && _0x5ee7ba <= _0x429a85.length) {
                  const _0x3c661c = _0x429a85[_0x5ee7ba - 0x1];
                  const _0x393546 = _0x3c661c.link.split('/').pop();
                  await _0x2f6766.sendMessage(_0x24e18e, {
                    'react': {
                      'text': '⬇️',
                      'key': _0x266dc6.key
                    }
                  });
                  _0x2f6766.sendMessage(_0x24e18e, {
                    'text': "*Downloading your movie...\n\n*Wait few minits...*\n\n© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ"
                  }, {
                    'quoted': _0x1dd5f8
                  });
                  const _0x1532b4 = 'https://pixeldrain.com/api/file/' + _0x393546;
                  await _0x2f6766.sendMessage(_0x24e18e, {
                    'react': {
                      'text': '⬆',
                      'key': _0x266dc6.key
                    }
                  });
                  await _0x2f6766.sendMessage(_0x24e18e, {
                    'document': {
                      'url': _0x1532b4
                    },
                    'mimetype': "video/mp4",
                    'fileName': _0x2bd24d.title + " - " + _0x3c661c.quality + ".mp4",
                    'caption': _0x2bd24d.title + "\nQuality: " + _0x3c661c.quality + "\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ*",
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
                        'thumbnailUrl': "https://files.catbox.moe/7pg2gp.jpg",
                        'renderLargerThumbnail': false,
                        'showAdAttribution': true
                      }
                    }
                  }, {
                    'quoted': _0x1dd5f8
                  });
                  await _0x2f6766.sendMessage(_0x24e18e, {
                    'react': {
                      'text': '✅',
                      'key': _0x1dd5f8.key
                    }
                  });
                } else {
                  await _0x226e44("Invalid selection. Please reply with a valid number.");
                }
              }
            });
          } catch (_0x287bbb) {
            console.error("Error fetching movie details:", _0x287bbb);
            await _0x226e44("An error occurred while fetching movie details. Please try again.");
          }
        } else {
          await _0x226e44("Invalid selection. Please reply with a valid number.");
        }
      }
    });
  } catch (_0x609c7b) {
    console.error("Error during search:", _0x609c7b);
    _0x226e44("*An error occurred while searching!*");
  }
});
cmd({
  'pattern': "ginisisila",
  'alias': ["cartoon"],
  'react': '📑',
  'category': "download",
  'desc': 'ginisisilacartoon.net',
  'filename': __filename
}, async (_0x1a62a5, _0x446c03, _0x1cef08, {
  from: _0x26a1f0,
  q: _0xdb6f0b,
  isDev: _0x4c4236,
  reply: _0x1b14dd
}) => {
  try {
    if (!_0xdb6f0b) {
      return await _0x1b14dd("*Please provide a search query! (e.g., Garfield)*");
    }
    const _0x2fb10d = "https://ginisisilacartoon.net/search.php?q=" + encodeURIComponent(_0xdb6f0b);
    const _0x556c94 = await axios.get(_0x2fb10d);
    const _0xdbf9b4 = cheerio.load(_0x556c94.data);
    let _0x22f4e1 = [];
    _0xdbf9b4('div.inner-video-cell').each((_0x5d9b0b, _0x421c98) => {
      const _0x2c4bd5 = _0xdbf9b4(_0x421c98).find("div.video-title > a").attr("title");
      const _0x1879d0 = _0xdbf9b4(_0x421c98).find("div.posted-time").text().trim();
      const _0x37feb9 = _0xdbf9b4(_0x421c98).find("div.video-title > a").attr('href');
      const _0xc404ae = _0xdbf9b4(_0x421c98).find("div.inner-video-thumb-wrapper img").attr('src');
      if (_0x2c4bd5 && _0x37feb9) {
        _0x22f4e1.push({
          'title': _0x2c4bd5,
          'postedTime': _0x1879d0,
          'episodeLink': 'https://ginisisilacartoon.net/' + _0x37feb9,
          'imageUrl': _0xc404ae
        });
      }
    });
    if (_0x22f4e1.length === 0x0) {
      return await _0x1b14dd("No results found for: " + _0xdb6f0b);
    }
    let _0x2ffbd8 = "🔢 *Please reply with the number you want to select*\n\n📺 Search Results for *" + _0xdb6f0b + ":*\n\n";
    _0x22f4e1.forEach((_0x99c8df, _0x5395bd) => {
      _0x2ffbd8 += '*' + (_0x5395bd + 0x1) + ".* " + _0x99c8df.title + "\n🗓️ Posted: " + _0x99c8df.postedTime + "\n🔗 Link: " + _0x99c8df.episodeLink + "\n\n";
    });
    const _0x4b1d66 = await _0x1a62a5.sendMessage(_0x26a1f0, {
      'text': _0x2ffbd8,
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
          'thumbnailUrl': 'https://files.catbox.moe/7pg2gp.jpg',
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x1cef08
    });
    const _0x3d1168 = _0x4b1d66.key.id;
    _0x1a62a5.ev.on("messages.upsert", async _0x4829c7 => {
      const _0x3a633a = _0x4829c7.messages[0x0];
      if (!_0x3a633a.message) {
        return;
      }
      const _0x183c0f = _0x3a633a.message.conversation || _0x3a633a.message.extendedTextMessage?.['text'];
      const _0x25543d = _0x3a633a.key.remoteJid;
      const _0x18cde5 = _0x3a633a.message.extendedTextMessage && _0x3a633a.message.extendedTextMessage.contextInfo.stanzaId === _0x3d1168;
      if (_0x18cde5) {
        const _0x4b8bd5 = parseInt(_0x183c0f.trim());
        if (!isNaN(_0x4b8bd5) && _0x4b8bd5 > 0x0 && _0x4b8bd5 <= _0x22f4e1.length) {
          const _0xd3dc45 = _0x22f4e1[_0x4b8bd5 - 0x1];
          const _0x27af4a = "*🪄 ɴᴀᴍᴇ:-* " + _0xd3dc45.title + "\n⏳ *ᴅᴀᴛᴇ:-* " + _0xd3dc45.postedTime + "\n📎 *ᴇᴘɪꜱᴏᴅᴇ ʟɪɴᴋ*:- " + _0xd3dc45.episodeLink + "\n\n☘ *We are uploading the Movie/Episode you requested.*";
          const _0x51c734 = {
            'image': {
              'url': _0xd3dc45.imageUrl
            },
            'caption': _0x27af4a
          };
          await _0x1a62a5.sendMessage(_0x25543d, _0x51c734, {
            'quoted': _0x3a633a
          });
          const _0xae23b = await axios.get(_0xd3dc45.episodeLink);
          const _0x5cad3e = cheerio.load(_0xae23b.data);
          const _0x2b11dd = _0x5cad3e("div#player-holder iframe").attr('src');
          if (_0x2b11dd) {
            const _0x1a8ecd = 'https://api.fgmods.xyz/api/downloader/gdrive?url=' + _0x2b11dd + "&apikey=mnp3grlZ";
            try {
              const _0xffe25f = await axios.get(_0x1a8ecd);
              const _0x5b4587 = _0xffe25f.data.result.downloadUrl;
              if (_0x5b4587) {
                await _0x1a62a5.sendMessage(_0x25543d, {
                  'document': {
                    'url': _0x5b4587
                  },
                  'mimetype': 'video/mp4',
                  'fileName': "Malvin | " + _0xd3dc45.title + ".mp4",
                  'caption': _0xd3dc45.title + " |  *MALVIN KING*\n\n> ᴍᴀʟᴠɪɴ-xᴅ",
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
                  'quoted': _0x3a633a
                });
              } else {
                await _0x1b14dd("Failed to retrieve the download link for this episode.");
              }
            } catch (_0x45ab72) {
              console.error("Error fetching the download link:", _0x45ab72);
              await _0x1b14dd("An error occurred while trying to fetch the download link.");
            }
          } else {
            await _0x1b14dd("No downloadable link found for this episode.");
          }
        } else {
          await _0x1b14dd("Please reply with a valid number from the list.");
        }
      }
    });
  } catch (_0x1023a1) {
    _0x1b14dd("*Error occurred while scraping!*");
    console.error(_0x1023a1);
  }
});
cmd({
  'pattern': 'baiscope',
  'react': '📑',
  'category': 'download',
  'desc': "baiscope.lk",
  'filename': __filename
}, async (_0x308d30, _0x5aed54, _0x101449, {
  from: _0x5888b0,
  q: _0x2cc6b4,
  isDev: _0x3d1d2a,
  reply: _0x1e9458
}) => {
  try {
    if (!_0x2cc6b4) {
      return await _0x1e9458("*Please provide a search query! (e.g., Avatar)*");
    }
    const _0xd040e8 = "https://www.baiscope.lk/?s=" + encodeURIComponent(_0x2cc6b4);
    const _0x4d9888 = await axios.get(_0xd040e8);
    const _0xc3e3eb = cheerio.load(_0x4d9888.data);
    let _0x3795ce = [];
    _0xc3e3eb("article.elementor-post").each((_0x5b03ef, _0x1aa1a4) => {
      const _0x18bd93 = _0xc3e3eb(_0x1aa1a4).find("h5.elementor-post__title > a").text().trim();
      const _0x17abbf = _0xc3e3eb(_0x1aa1a4).find("h5.elementor-post__title > a").attr("href");
      const _0x3856cb = _0xc3e3eb(_0x1aa1a4).find(".elementor-post__thumbnail img").attr("src");
      if (_0x18bd93 && _0x17abbf && _0x3856cb) {
        _0x3795ce.push({
          'title': _0x18bd93,
          'episodeLink': _0x17abbf,
          'imgUrl': _0x3856cb
        });
      }
    });
    if (_0x3795ce.length === 0x0) {
      return await _0x1e9458("No results found for: " + _0x2cc6b4);
    }
    let _0x3bb8e6 = "📺 Search Results for *" + _0x2cc6b4 + ":*\n\n";
    _0x3795ce.forEach((_0x4cdaa4, _0x3fc493) => {
      _0x3bb8e6 += '*' + (_0x3fc493 + 0x1) + ".* " + _0x4cdaa4.title + "\n🔗 Link: " + _0x4cdaa4.episodeLink + "\n\n";
    });
    const _0x224db9 = await _0x308d30.sendMessage(_0x5888b0, {
      'text': _0x3bb8e6
    }, {
      'quoted': _0x101449
    });
    const _0x4f4d2f = _0x224db9.key.id;
    _0x308d30.ev.on("messages.upsert", async _0x56ab0e => {
      const _0xc7c122 = _0x56ab0e.messages[0x0];
      if (!_0xc7c122.message) {
        return;
      }
      const _0x8d2343 = _0xc7c122.message.conversation || _0xc7c122.message.extendedTextMessage?.["text"];
      const _0x54a6b2 = _0xc7c122.key.remoteJid;
      const _0x49347d = _0xc7c122.message.extendedTextMessage && _0xc7c122.message.extendedTextMessage.contextInfo.stanzaId === _0x4f4d2f;
      if (_0x49347d) {
        const _0x1be48f = parseInt(_0x8d2343.trim());
        if (!isNaN(_0x1be48f) && _0x1be48f > 0x0 && _0x1be48f <= _0x3795ce.length) {
          const _0x557c01 = _0x3795ce[_0x1be48f - 0x1];
          const _0x2db964 = await axios.get(_0x557c01.episodeLink);
          const _0x394ad7 = cheerio.load(_0x2db964.data);
          const _0x4ffbd3 = _0x394ad7("a.dlm-buttons-button").attr("href");
          if (_0x4ffbd3) {
            await _0x308d30.sendMessage(_0x54a6b2, {
              'image': {
                'url': _0x557c01.imgUrl
              },
              'caption': "🎬 *" + _0x557c01.title + "*\n🔗 Link: " + _0x557c01.episodeLink + "\n⬇️ Download will follow."
            }, {
              'quoted': _0xc7c122
            });
            const _0x39d50a = path.join(__dirname, "downloaded_episode.zip");
            const _0xf412d = fs.createWriteStream(_0x39d50a);
            const _0x5d1545 = await axios({
              'url': _0x4ffbd3,
              'method': "GET",
              'responseType': "stream"
            });
            _0x5d1545.data.pipe(_0xf412d);
            _0xf412d.on("finish", async () => {
              await _0x308d30.sendMessage(_0x54a6b2, {
                'document': {
                  'url': _0x39d50a
                },
                'mimetype': "application/zip",
                'fileName': _0x557c01.title + ".zip",
                'caption': '*' + _0x557c01.title + "*\n\n> ᴍᴀʟᴠɪɴ-xᴅ ✻",
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
                'quoted': _0xc7c122
              });
              fs.unlinkSync(_0x39d50a);
            });
            _0xf412d.on("error", _0x34d6bf => {
              console.error("Error downloading ZIP file:", _0x34d6bf);
              _0x1e9458("*Error downloading the episode ZIP file.*");
            });
          } else {
            await _0x1e9458("*Download link not found for the selected episode.*");
          }
        } else {
          await _0x1e9458("*Invalid selection. Please choose a valid number.*");
        }
      }
    });
  } catch (_0x50c0b8) {
    console.error(_0x50c0b8);
    await _0x1e9458("*An error occurred while scraping the data.*");
  }
});