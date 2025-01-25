const {
  cmd
} = require("../command");
const config = require("../../settings");
cmd({
  'on': 'body'
}, async (_0x433969, _0x22d300, _0x3f51f6, {
  from: _0x8dea5a,
  body: _0x8ee069,
  isGroup: _0x77eab7,
  isAdmins: _0x3d3c1c,
  isBotAdmins: _0x2bd0a2,
  reply: _0x232882,
  sender: _0x342901
}) => {
  try {
    const _0x5a0849 = ['wtf', "mia", 'xxx', "fuck", "sex", "huththa", "pakaya", "ponnaya", "hutto", "lol"];
    if (!_0x77eab7 || _0x3d3c1c || !_0x2bd0a2) {
      return;
    }
    const _0x399928 = _0x8ee069.toLowerCase();
    const _0x13ae3b = _0x5a0849.some(_0x46a0be => _0x399928.includes(_0x46a0be));
    if (_0x13ae3b & config.ANTI_BAD === "true") {
      await _0x433969.sendMessage(_0x8dea5a, {
        'delete': _0x22d300.key
      }, {
        'quoted': _0x22d300
      });
      await _0x433969.sendMessage(_0x8dea5a, {
        'text': "ðŸš« âš ï¸BAD WORDS NOT ALLOWEDâš ï¸ ðŸš«",
        'contextInfo': {
          'mentionedJid': ['263714757857@s.whatsapp.net'],
          'groupMentions': [],
          'forwardingScore': 0x1,
          'isForwarded': true,
          'forwardedNewsletterMessageInfo': {
            'newsletterJid': "120363306168354073@newsletter",
            'newsletterName': "ɴᴇxᴜs ᴡᴀ ᴛᴇᴄʜ»",
            'serverMessageId': 0x3e7
          },
          'externalAdReply': {
            'title': "MALVIN XD",
            'body': "ᴊᴏɪɴ ɴᴇxᴜs ᴛᴇᴄʜ",
            'mediaType': 0x1,
            'sourceUrl': "https://github.com/kingmalvn",
            'thumbnailUrl': "https://files.catbox.moe/7pg2gp.jpg",
            'renderLargerThumbnail': false,
            'showAdAttribution': true
          }
        }
      }, {
        'quoted': _0x22d300
      });
    }
  } catch (_0x1b5e5b) {
    console.error(_0x1b5e5b);
    _0x232882("An error occurred while processing the message.");
  }
});
const linkPatterns = [/https?:\/\/(?:chat\.whatsapp\.com|wa\.me)\/\S+/gi, /^https?:\/\/(www\.)?whatsapp\.com\/channel\/([a-zA-Z0-9_-]+)$/];
cmd({
  'on': "body"
}, async (_0x1cf720, _0x452794, _0x4b172b, {
  from: _0x5c69e7,
  body: _0x1602e9,
  sender: _0x345e10,
  isGroup: _0x1672ac,
  isAdmins: _0x28a5a7,
  isBotAdmins: _0x4734cf,
  reply: _0x12ff81
}) => {
  try {
    if (!_0x1672ac || _0x28a5a7 || !_0x4734cf) {
      return;
    }
    const _0x4513f0 = linkPatterns.some(_0x3f818c => _0x3f818c.test(_0x1602e9));
    if (_0x4513f0 && config.ANTI_LINK === "true") {
      await _0x1cf720.sendMessage(_0x5c69e7, {
        'delete': _0x452794.key
      }, {
        'quoted': _0x452794
      });
      await _0x1cf720.sendMessage(_0x5c69e7, {
        'text': "âš ï¸ Links are not allowed in this group.\n@" + _0x345e10.split('@')[0x0] + " has been removed. ðŸš«",
        'mentions': [_0x345e10],
        'contextInfo': {
          'mentionedJid': ["263714757857@s.whatsapp.net"],
          'groupMentions': [],
          'forwardingScore': 0x1,
          'isForwarded': true,
          'forwardedNewsletterMessageInfo': {
            'newsletterJid': "120363306168354073@newsletter",
            'newsletterName': "ɴᴇxᴜs ᴛᴇᴄʜ»",
            'serverMessageId': 0x3e7
          },
          'externalAdReply': {
            'title': "MALVIN XD",
            'body': "ɴᴇxᴜsɴᴇxᴜsɴᴇxᴜs",
            'mediaType': 0x1,
            'sourceUrl': "https://github.com/kingmalvn",
            'thumbnailUrl': "https://files.catbox.moe/7pg2gp.jpg",
            'renderLargerThumbnail': false,
            'showAdAttribution': true
          }
        }
      }, {
        'quoted': _0x452794
      });
      await _0x1cf720.groupParticipantsUpdate(_0x5c69e7, [_0x345e10], "remove");
    }
  } catch (_0x199854) {
    console.error(_0x199854);
    _0x12ff81("An error occurred while processing the message.");
  }
});