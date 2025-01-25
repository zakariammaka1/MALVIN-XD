const fs = require('fs');
const fileType = require("file-type");
const googleTTS = require('google-tts-api');
const axios = require('axios');
const {
  Sticker,
  createSticker,
  StickerTypes
} = require('wa-sticker-formatter');
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
const {
  cmd,
  commands
} = require("../command");
const path = require("path");
const {
  tmpdir
} = require('os');
const fetch = require("node-fetch");
const Crypto = require("crypto");
const ffmpeg = require("fluent-ffmpeg");
async function videoToWebp(_0x3a8543) {
  const _0x21d0a4 = path.join(tmpdir(), Crypto.randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + '.webp');
  const _0x4073aa = path.join(tmpdir(), Crypto.randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + ".mp4");
  fs.writeFileSync(_0x4073aa, _0x3a8543);
  await new Promise((_0x5aff55, _0x3557f8) => {
    ffmpeg(_0x4073aa).on("error", _0x3557f8).on("end", () => _0x5aff55(true)).addOutputOptions(['-vcodec', 'libwebp', '-vf', "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse", '-loop', '0', "-ss", "00:00:00", '-t', '00:00:05', "-preset", "default", "-an", "-vsync", '0']).toFormat("webp").save(_0x21d0a4);
  });
  const _0x501a00 = fs.readFileSync(_0x21d0a4);
  fs.unlinkSync(_0x21d0a4);
  fs.unlinkSync(_0x4073aa);
  return _0x501a00;
}
function toAudio(_0x262d3d, _0xe5bfc) {
  return ffmpeg(_0x262d3d, ["-vn", "-ac", '2', '-b:a', "128k", '-ar', "44100", '-f', "mp3"], _0xe5bfc, "mp3");
}
function toPTT(_0x1b4a3c, _0x2e6135) {
  return ffmpeg(_0x1b4a3c, ["-vn", "-c:a", "libopus", "-b:a", "128k", "-vbr", 'on', "-compression_level", '10'], _0x2e6135, "opus");
}
function toVideo(_0x16286f, _0x557dc0) {
  return ffmpeg(_0x16286f, ['-c:v', 'libx264', '-c:a', "aac", "-ab", "128k", "-ar", "44100", "-crf", '32', "-preset", "slow"], _0x557dc0, "mp4");
}
const commandConfig = {
  'pattern': "toimg",
  'react': '🔮',
  'alias': ['photo', "stic"],
  'desc': "Convert sticker to image",
  'category': 'convert',
  'use': ".sticker <Reply to sticker>",
  'filename': __filename
};
cmd(commandConfig, async (_0x521e06, _0x383c07, _0x52ddbb, {
  from: _0x386358,
  quoted: _0x37f45b,
  reply: _0x592a24
}) => {
  try {
    const _0x272555 = _0x37f45b ? _0x37f45b.type === "stickerMessage" : false;
    if (_0x272555) {
      const _0x2d6b40 = getRandom('');
      const _0x34e225 = await _0x37f45b.download(_0x2d6b40);
      const _0x398aac = await fileType.fromBuffer(_0x34e225);
      await fs.promises.writeFile('./' + _0x398aac.ext, _0x34e225);
      const _0x3c4638 = {
        'quoted': _0x383c07
      };
      await _0x521e06.sendMessage(_0x386358, {
        'image': fs.readFileSync('./' + _0x398aac.ext),
        'caption': "> © ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ · · · 💭"
      }, _0x3c4638);
      fs.unlinkSync('./' + _0x398aac.ext);
    } else {
      return await _0x592a24("Please reply to a sticker to convert it into an image.");
    }
  } catch (_0x47f4e0) {
    _0x592a24("*Error !!*");
    console.error(_0x47f4e0);
  }
});
cmd({
  'pattern': "trt",
  'desc': "Translate text between languages",
  'react': '🌐',
  'use': ".trt <language code> <text>",
  'category': "convert",
  'filename': __filename
}, async (_0x352030, _0x349a40, _0x5f0697, {
  from: _0x2591ef,
  q: _0x439ed5,
  reply: _0x56a24c
}) => {
  try {
    const _0x31b0ff = _0x439ed5.split(" ");
    if (_0x31b0ff.length < 0x2) {
      return _0x56a24c("❗ Please provide a language code and text. Usage: .trt <language code> <text>");
    }
    const _0x54af10 = _0x31b0ff[0x0];
    const _0x199539 = _0x31b0ff.slice(0x1).join(" ");
    const _0x474c32 = "https://api.mymemory.translated.net/get?q=" + encodeURIComponent(_0x199539) + '&langpair=en|' + _0x54af10;
    const _0x1e6cf5 = await axios.get(_0x474c32);
    const _0x5683bd = _0x1e6cf5.data.responseData.translatedText;
    const _0x5f37eb = "\n🌍 *Translation* 🌍\n\n🔤 *Original*: " + _0x199539 + "\n🔠 *Translated*: " + _0x5683bd + "\n🌐 *Language*: " + _0x54af10.toUpperCase() + "\n";
    return _0x56a24c(_0x5f37eb);
  } catch (_0x552fd7) {
    console.error(_0x552fd7);
    return _0x56a24c("⚠️ An error occurred while translating the text. Please try again later.");
  }
});
cmd({
  'pattern': 'sticker',
  'react': "🤹‍♀️",
  'alias': ['s', "stic"],
  'desc': "ʟααɾα-ᴍᴅ",
  'category': "convert",
  'use': ".sticker <Reply to image>",
  'filename': __filename
}, async (_0x57aa6d, _0x331e1f, _0x49a36f, {
  from: _0x180e32,
  reply: _0x2eee66,
  isCmd: _0xbe5150,
  command: _0x4e6fef,
  args: _0x8e5453,
  q: _0x1c1ecd,
  isGroup: _0x187ac7,
  pushname: _0x5d99fb
}) => {
  try {
    const _0x10b7c6 = _0x49a36f.quoted && (_0x49a36f.quoted.type === "imageMessage" || _0x49a36f.quoted.type === "viewOnceMessage" && _0x49a36f.quoted.msg.type === "imageMessage");
    const _0x252c71 = _0x49a36f.quoted && _0x49a36f.quoted.type === "stickerMessage";
    if (_0x49a36f.type === "imageMessage" || _0x10b7c6) {
      const _0x2cb428 = getRandom(".jpg");
      const _0x1a3798 = _0x10b7c6 ? await _0x49a36f.quoted.download() : await _0x49a36f.download();
      await require('fs').promises.writeFile(_0x2cb428, _0x1a3798);
      let _0x5bd7fb = new Sticker(_0x2cb428, {
        'pack': _0x5d99fb,
        'author': "ᴍᴀʟᴠɪɴ ᴋɪɴɢ",
        'type': _0x1c1ecd.includes('--crop') || _0x1c1ecd.includes('-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
        'categories': ['🤩', '🎉'],
        'id': '12345',
        'quality': 0x4b,
        'background': "transparent"
      });
      const _0x29ed92 = await _0x5bd7fb.toBuffer();
      return _0x57aa6d.sendMessage(_0x180e32, {
        'sticker': _0x29ed92
      }, {
        'quoted': _0x331e1f
      });
    } else {
      if (_0x252c71) {
        const _0x30282d = getRandom(".webp");
        const _0x4f0c63 = await _0x49a36f.quoted.download();
        await require('fs').promises.writeFile(_0x30282d, _0x4f0c63);
        let _0x113b31 = new Sticker(_0x30282d, {
          'pack': _0x5d99fb,
          'author': "ᴍᴀʟᴠɪɴ ᴋɪɴɢ,
          'type': _0x1c1ecd.includes("--crop") || _0x1c1ecd.includes('-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
          'categories': ['🤩', '🎉'],
          'id': "12345",
          'quality': 0x4b,
          'background': "transparent"
        });
        const _0x38f397 = await _0x113b31.toBuffer();
        return _0x57aa6d.sendMessage(_0x180e32, {
          'sticker': _0x38f397
        }, {
          'quoted': _0x331e1f
        });
      } else {
        return await _0x2eee66("*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ · · ·*");
      }
    }
  } catch (_0x340378) {
    _0x2eee66("Error !!");
    console.error(_0x340378);
  }
});
cmd({
  'pattern': "tts",
  'desc': "download songs",
  'category': "download",
  'react': '👧',
  'filename': __filename
}, async (_0x34bba5, _0x51fc5c, _0x136adc, {
  from: _0x494b11,
  quoted: _0x434430,
  body: _0xe45643,
  isCmd: _0x8fcac4,
  command: _0x3d13c6,
  args: _0x302310,
  q: _0x5c3f54,
  isGroup: _0x182fd8,
  sender: _0x401f87,
  senderNumber: _0x768e79,
  botNumber2: _0x4264fa,
  botNumber: _0x26e453,
  pushname: _0x21fb95,
  isMe: _0x32bdbc,
  isOwner: _0x5303cd,
  groupMetadata: _0x362071,
  groupName: _0x23bf38,
  participants: _0x4cdffd,
  groupAdmins: _0x190347,
  isBotAdmins: _0x5b6598,
  isAdmins: _0x4c6c76,
  reply: _0x41aecf
}) => {
  try {
    if (!_0x5c3f54) {
      return _0x41aecf("Need some text.");
    }
    const _0x3b5928 = googleTTS.getAudioUrl(_0x5c3f54, {
      'lang': "hi-IN",
      'slow': false,
      'host': 'https://translate.google.com'
    });
    await _0x34bba5.sendMessage(_0x494b11, {
      'audio': {
        'url': _0x3b5928
      },
      'mimetype': "audio/mpeg",
      'ptt': true
    }, {
      'quoted': _0x51fc5c
    });
  } catch (_0x1f7fd6) {
    _0x41aecf('' + _0x1f7fd6);
  }
});
cmd({
  'pattern': 'tempmail',
  'desc': "Generate a temporary email address.",
  'use': ".tempmail",
  'category': "convert",
  'react': '✉️',
  'filename': __filename
}, async (_0xcaad73, _0x148022, _0x2063cb, {
  from: _0x16e2ed,
  quoted: _0x3307e7,
  isCmd: _0x265f21,
  command: _0x5ea2fd,
  isGroup: _0x145af3,
  sender: _0x20aebd,
  senderNumber: _0x483d00,
  reply: _0x38df49
}) => {
  try {
    const _0x1c9468 = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1");
    const _0x421c12 = _0x1c9468.data;
    if (!_0x421c12 || _0x421c12.length === 0x0) {
      return _0x38df49("Error: Unable to generate a temporary email. Please try again later.");
    }
    const _0x1387c8 = _0x421c12[0x0];
    await _0xcaad73.sendMessage(_0x16e2ed, {
      'text': "✉️ *Temporary Email Generated*\n\n📧 Email: " + _0x1387c8,
      'footer': "test"
    }, {
      'quoted': _0x148022
    });
  } catch (_0x79c6a8) {
    console.error(_0x79c6a8);
    _0x38df49("Error: " + _0x79c6a8.message);
  }
});
cmd({
  'pattern': 'npm',
  'desc': "Search for a package on npm.",
  'react': '📦',
  'use': ".npm < name >",
  'category': "convert",
  'filename': __filename
}, async (_0x86c270, _0x266055, _0x2491f4, {
  from: _0x28f23f,
  args: _0x103708,
  reply: _0x2012ec
}) => {
  if (!_0x103708.length) {
    return _0x2012ec("Please provide the name of the npm package you want to search for. Example: !npm express");
  }
  const _0x4c1ede = _0x103708.join(" ");
  const _0x1380e8 = "https://registry.npmjs.org/" + encodeURIComponent(_0x4c1ede);
  try {
    let _0x357068 = await fetch(_0x1380e8);
    if (!_0x357068.ok) {
      throw new Error("Package not found or an error occurred.");
    }
    let _0x35ea94 = await _0x357068.json();
    const _0x23dea3 = _0x35ea94['dist-tags'].latest;
    const _0x5c6ba9 = _0x35ea94.description || "No description available.";
    const _0x44dbe6 = "https://www.npmjs.com/package/" + _0x4c1ede;
    const _0x20a48d = _0x35ea94.license || "Unknown";
    const _0x2bb23e = _0x35ea94.repository ? _0x35ea94.repository.url || "Not available" : "Not available";
    let _0x3a4162 = "\n*ＮＰＭ ＳＥＡＲＣＨ ツ*\n\n\n*🔰Npm package :* " + _0x4c1ede + "\n\n*📄Description :* " + _0x5c6ba9 + "\n\n*⏸️ Last version :* " + _0x23dea3 + "\n\n*🪪 License :* " + _0x20a48d + "\n\n*🪩Repostory :* " + _0x2bb23e + "\n\n*🔗Npm url :* " + _0x44dbe6 + "\n\n";
    await _0x86c270.sendMessage(_0x28f23f, {
      'text': _0x3a4162
    }, {
      'quoted': _0x266055
    });
  } catch (_0x831001) {
    console.error(_0x831001);
    _0x2012ec("An error occurred: " + _0x831001.message);
  }
});
cmd({
  'pattern': 'mp3',
  'react': '🔊',
  'alias': ["toaudio", "tomp3"],
  'desc': "convert to audio",
  'category': 'convert',
  'use': ".toptt <Reply to video>",
  'filename': __filename
}, async (_0x15bcdc, _0x77b5c3, _0x57ca70, _0x369294) => {
  const {
    from: _0x3046cd,
    quoted: _0x4be8de,
    body: _0x3fb960,
    command: _0x1c5ff4,
    reply: _0x3b7cd7,
    sender: _0x21b48f
  } = _0x369294;
  try {
    const _0x54a323 = _0x4be8de ? _0x4be8de.type === "videoMessage" : _0x77b5c3.type === 'videoMessage';
    if (!_0x54a323) {
      await _0x3b7cd7("Please reply to a video.");
      return;
    }
    const _0x16300a = _0x4be8de ? await _0x4be8de.download() : await _0x77b5c3.download();
    const _0x2e459c = await ffmpeg(_0x16300a, ["-vn", "-c:a", 'libopus', "-b:a", "128k", "-vbr", 'on', "-compression_level", '10'], 'mp4', "opus");
    const _0x1865ca = await _0x15bcdc.sendMessage(_0x77b5c3.chat, {
      'audio': _0x2e459c.options,
      'mimetype': "audio/mpeg"
    }, {
      'quoted': _0x77b5c3
    });
    await _0x15bcdc.sendMessage(_0x3046cd, {
      'react': {
        'text': '🎼',
        'key': _0x1865ca.key
      }
    });
  } catch (_0x956732) {
    await _0x3b7cd7("*Error!!*");
    console.error(_0x956732);
  }
});
cmd({
  'pattern': "attp",
  'react': '✨',
  'alias': ["texttogif"],
  'desc': "Text to convert sticker",
  'category': 'convert',
  'use': ".attp HI",
  'filename': __filename
}, async (_0x2c5278, _0x1e0626, _0x593648, {
  from: _0x3d0a26,
  body: _0x558ed8,
  isCmd: _0xa478dd,
  command: _0x10c676,
  args: _0x5f9d7c,
  q: _0x3e7088,
  isGroup: _0x39c739,
  senderName: _0x3650d9,
  senderNumber: _0x2a9e77,
  botNumber2: _0x46d851,
  botNumber: _0x39d4c8,
  pushname: _0xdec7ea,
  isMe: _0x1bae3b,
  isOwner: _0x718b69,
  groupMetadata: _0x5f24a1,
  groupName: _0x39bb92,
  participants: _0x1a9ad2,
  groupAdmins: _0x2c1c9c,
  isBotAdmins: _0x4b4a6,
  isAdmins: _0x235a24,
  reply: _0x158a9f
}) => {
  try {
    if (!_0x558ed8) {
      return await _0x158a9f("Please provide text to convert to a sticker.");
    }
    let _0x43d679 = await getBuffer("https://api-fix.onrender.com/api/maker/attp?text=" + _0x558ed8);
    await _0x2c5278.sendMessage(_0x3d0a26, {
      'sticker': await videoToWebp(_0x43d679)
    }, {
      'quoted': _0x1e0626
    });
  } catch (_0x22b448) {
    console.log(_0x22b448);
  }
});