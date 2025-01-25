const {
  default: makeWASocket,
  getAggregateVotesInPollMessage,
  useMultiFileAuthState,
  DisconnectReason,
  getDevice,
  fetchLatestBaileysVersion,
  jidNormalizedUser,
  getContentType,
  Browsers,
  delay,
  makeInMemoryStore,
  makeCacheableSignalKeyStore,
  downloadContentFromMessage,
  generateForwardMessageContent,
  generateWAMessageFromContent,
  prepareWAMessageMedia,
  proto
} = require("@whiskeysockets/baileys");
const fs = require('fs');
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
const FileType = require("file-type");
const {
  cmd,
  commands
} = require("../command");
cmd({
  'pattern': 'vv',
  'react': '😁',
  'alias': ["lassanai", "patta", "mekada", "supiri", "maru"],
  'desc': "To ViewOnceMessage",
  'category': 'convert',
  'use': '.vv',
  'filename': __filename
}, async (_0x5d7573, _0x436bf4, _0x31fb93, {
  from: _0x51d0ff,
  prefix: _0x132b68,
  quoted: _0x28383f,
  body: _0x5216f9,
  isCmd: _0x339ead,
  command: _0x1a936d,
  args: _0x1d3a0a,
  q: _0x48be7d,
  isGroup: _0x1fbcb7,
  sender: _0x1558ba,
  senderNumber: _0x14582d,
  botNumber2: _0x19fae1,
  botNumber: _0x2fb85f,
  pushname: _0x1a4c79,
  isMe: _0x4f0a2d,
  isOwner: _0x5b4600,
  groupMetadata: _0x475ec0,
  groupName: _0x329167,
  participants: _0x526b6f,
  groupAdmins: _0x29524b,
  isBotAdmins: _0x2ecd13,
  isAdmins: _0xbbd9ad,
  reply: _0x18add6
}) => {
  try {
    _0x5d7573.downloadAndSaveMediaMessage = async (_0x474877, _0x45f2aa, _0x421d6b = true) => {
      let _0x2e3176 = _0x474877.msg ? _0x474877.msg : _0x474877;
      let _0x19b45f = (_0x474877.msg || _0x474877).mimetype || '';
      let _0x35a690 = _0x474877.mtype ? _0x474877.mtype.replace(/Message/gi, '') : _0x19b45f.split('/')[0x0];
      const _0x37075c = await downloadContentFromMessage(_0x2e3176, _0x35a690);
      let _0x5b5421 = Buffer.from([]);
      for await (const _0x4e8d87 of _0x37075c) {
        _0x5b5421 = Buffer.concat([_0x5b5421, _0x4e8d87]);
      }
      let _0x3f676f = await FileType.fromBuffer(_0x5b5421);
      trueFileName = _0x421d6b ? _0x45f2aa + '.' + _0x3f676f.ext : _0x45f2aa;
      await fs.writeFileSync(trueFileName, _0x5b5421);
      return trueFileName;
    };
    const _0x3b8b49 = _0x436bf4.msg.contextInfo.quotedMessage.viewOnceMessageV2;
    if (_0x3b8b49) {
      if (_0x3b8b49.message.imageMessage) {
        console.log("Quot Entered");
        let _0xf55dda = _0x3b8b49.message.imageMessage.caption;
        let _0x14c909 = await _0x5d7573.downloadAndSaveMediaMessage(_0x3b8b49.message.imageMessage);
        return _0x5d7573.sendMessage(_0x51d0ff, {
          'image': {
            'url': _0x14c909
          },
          'caption': _0xf55dda
        });
      }
      if (_0x3b8b49.message.videoMessage) {
        let _0x58e780 = _0x3b8b49.message.videoMessage.caption;
        let _0x14059e = await _0x5d7573.downloadAndSaveMediaMessage(_0x3b8b49.message.videoMessage);
        return _0x5d7573.sendMessage(_0x51d0ff, {
          'video': {
            'url': _0x14059e
          },
          'caption': _0x58e780
        });
      }
    }
    if (!_0x436bf4.quoted) {
      return _0x436bf4.reply("```Uh Please Reply A ViewOnce Message```");
    }
    if (_0x436bf4.quoted.mtype === "viewOnceMessage") {
      console.log("ViewOnce Entered");
      if (_0x436bf4.quoted.message.imageMessage) {
        let _0x119fb4 = _0x436bf4.quoted.message.imageMessage.caption;
        let _0x3f8d64 = await _0x5d7573.downloadAndSaveMediaMessage(_0x436bf4.quoted.message.imageMessage);
        _0x5d7573.sendMessage(_0x51d0ff, {
          'image': {
            'url': _0x3f8d64
          },
          'caption': _0x119fb4
        });
      } else {
        if (_0x436bf4.quoted.message.videoMessage) {
          let _0x4cd5f1 = _0x436bf4.quoted.message.videoMessage.caption;
          let _0x5bde82 = await _0x5d7573.downloadAndSaveMediaMessage(_0x436bf4.quoted.message.videoMessage);
          _0x5d7573.sendMessage(_0x51d0ff, {
            'video': {
              'url': _0x5bde82
            },
            'caption': _0x4cd5f1
          });
        }
      }
    } else {
      return _0x436bf4.reply("```This is Not A ViewOnce Message```");
    }
    await _0x5d7573.sendMessage(_0x51d0ff, {
      'react': {
        'text': '✅',
        'key': _0x436bf4.key
      }
    });
  } catch (_0x55707c) {
    console.log(_0x55707c);
    _0x18add6("*please try againg⭕*");
  }
});