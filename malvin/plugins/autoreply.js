const {
  cmd
} = require('../command');
const config = require('../../settings');
cmd({
  'on': "body"
}, async (_0x3c094a, _0x18facb, _0x491698, {
  from: _0x5b7ef2,
  body: _0x4261ae,
  isGroup: _0x457610,
  isAdmins: _0x2e3329,
  isBotAdmins: _0x10a1b3,
  reply: _0x5ac6d3,
  sender: _0x1e502c
}) => {
  try {
    const _0x4a74d3 = ['hi', 'hello'];
    const _0x5d020c = _0x4261ae.toLowerCase();
    const _0x510101 = _0x4a74d3.some(_0x5218b1 => _0x5d020c.includes(_0x5218b1));
    if (_0x510101 && config.AUTO_VOICE === "true") {
      await _0x3c094a.sendMessage(_0x5b7ef2, {
        'audio': {
          'url': "https://github.com/sadiyamin/alexa-database/raw/refs/heads/main/Media/hi.mp3"
        },
        'mimetype': 'audio/mpeg',
        'ptt': true
      }, {
        'quoted': _0x18facb
      });
    }
  } catch (_0x4f509e) {
    console.error(_0x4f509e);
    _0x5ac6d3("An error occurred while processing the message.");
  }
});
cmd({
  'on': "body"
}, async (_0xd2a802, _0x51f087, _0x3b32b2, {
  from: _0x5456b3,
  body: _0x4a7447,
  isGroup: _0x58aec4,
  isAdmins: _0xf3d5c,
  isBotAdmins: _0x21fcf5,
  reply: _0x4ed062,
  sender: _0x4f5518
}) => {
  try {
    const _0x306b92 = ['mk', 'mokada', 'karanne', 'mokadda'];
    const _0x3409ce = _0x4a7447.toLowerCase();
    const _0x5ee4e6 = _0x306b92.some(_0x1a6bb4 => _0x3409ce.includes(_0x1a6bb4));
    if (_0x5ee4e6 && config.AUTO_VOICE === 'true') {
      await _0xd2a802.sendMessage(_0x5456b3, {
        'audio': {
          'url': "https://github.com/VajiraTech/IZUMI-AUTO-VOICER/raw/main/mk.mp3"
        },
        'mimetype': 'audio/mpeg',
        'ptt': true
      }, {
        'quoted': _0x51f087
      });
    }
  } catch (_0x4e0999) {
    console.error(_0x4e0999);
    _0x4ed062("An error occurred while processing the message.");
  }
});
cmd({
  'on': "body"
}, async (_0x40348f, _0x180364, _0x7888f1, {
  from: _0x4e9080,
  body: _0xc78baf,
  isGroup: _0x4dfd4f,
  isAdmins: _0x27795d,
  isBotAdmins: _0x11d432,
  reply: _0x507b0e,
  sender: _0x3bcd63
}) => {
  try {
    const _0x3b9395 = ['gm', "morning"];
    const _0x5b119b = _0xc78baf.toLowerCase();
    const _0x33f7e1 = _0x3b9395.some(_0x12af1d => _0x5b119b.includes(_0x12af1d));
    if (_0x33f7e1 && config.AUTO_VOICE === "true") {
      await _0x40348f.sendMessage(_0x4e9080, {
        'audio': {
          'url': "https://github.com/sadiyamin/alexa-database/raw/refs/heads/main/Media/good_morning.mp3"
        },
        'mimetype': "audio/mpeg",
        'ptt': true
      }, {
        'quoted': _0x180364
      });
    }
  } catch (_0x1fd7c7) {
    console.error(_0x1fd7c7);
    _0x507b0e("An error occurred while processing the message.");
  }
});
cmd({
  'on': "body"
}, async (_0x1af405, _0x2b487c, _0x410960, {
  from: _0x4f54cd,
  body: _0x204cb2,
  isGroup: _0x158379,
  isAdmins: _0x450c9f,
  isBotAdmins: _0x36c170,
  reply: _0x272d58,
  sender: _0x45b3e0
}) => {
  try {
    const _0x59c46a = ['gn', "night"];
    const _0x314050 = _0x204cb2.toLowerCase();
    const _0x2691cc = _0x59c46a.some(_0x354090 => _0x314050.includes(_0x354090));
    if (_0x2691cc && config.AUTO_VOICE === "true") {
      await _0x1af405.sendMessage(_0x4f54cd, {
        'audio': {
          'url': "https://github.com/sadiyamin/alexa-database/raw/refs/heads/main/Media/good_night.mp3"
        },
        'mimetype': "audio/mpeg",
        'ptt': true
      }, {
        'quoted': _0x2b487c
      });
    }
  } catch (_0x4aebbd) {
    console.error(_0x4aebbd);
    _0x272d58("An error occurred while processing the message.");
  }
});
cmd({
  'on': "body"
}, async (_0x17334f, _0x8e3514, _0x4ab02c, {
  from: _0x4c0aca,
  body: _0xf1d4d2,
  isGroup: _0x10ed78,
  isAdmins: _0xe4cd28,
  isBotAdmins: _0xac5c3b,
  reply: _0x3ad4e8,
  sender: _0x5c3bec
}) => {
  try {
    const _0x6080ff = ['mm', 'hm'];
    const _0x358cae = _0xf1d4d2.toLowerCase();
    const _0x2af011 = _0x6080ff.some(_0x42e07d => _0x358cae.includes(_0x42e07d));
    if (_0x2af011 && config.AUTO_VOICE === "true") {
      await _0x17334f.sendMessage(_0x4c0aca, {
        'audio': {
          'url': "https://github.com/tharumin/Alexa_Voice/raw/refs/heads/main/hm.mp3"
        },
        'mimetype': "audio/mpeg",
        'ptt': true
      }, {
        'quoted': _0x8e3514
      });
    }
  } catch (_0x1916a8) {
    console.error(_0x1916a8);
    _0x3ad4e8("An error occurred while processing the message.");
  }
});
cmd({
  'on': "body"
}, async (_0x46e1d1, _0x34bb28, _0x51eb5d, {
  from: _0x53f6b8,
  body: _0x210294,
  isGroup: _0x527885,
  isAdmins: _0x3c4874,
  isBotAdmins: _0x11c743,
  reply: _0x558011,
  sender: _0x25edd8
}) => {
  try {
    const _0x184b28 = ["love", 'adarei', 'pana', "manika", "cudu"];
    const _0x49e595 = _0x210294.toLowerCase();
    const _0x3728b0 = _0x184b28.some(_0x34ee4a => _0x49e595.includes(_0x34ee4a));
    if (_0x3728b0 && config.AUTO_VOICE === 'true') {
      await _0x46e1d1.sendMessage(_0x53f6b8, {
        'audio': {
          'url': "https://github.com/sadiyamin/alexa-database/raw/refs/heads/main/Media/i_love_you.mp3"
        },
        'mimetype': "audio/mpeg",
        'ptt': true
      }, {
        'quoted': _0x34bb28
      });
    }
  } catch (_0x5df0d2) {
    console.error(_0x5df0d2);
    _0x558011("An error occurred while processing the message.");
  }
});
cmd({
  'on': "body"
}, async (_0x1925ef, _0x3893ca, _0x3a9333, {
  from: _0x4826fb,
  body: _0x3c05ce,
  isGroup: _0x2a3b47,
  isAdmins: _0x4aface,
  isBotAdmins: _0x59e106,
  reply: _0x2b1261,
  sender: _0x2d2311
}) => {
  try {
    const _0x35b9cd = ['pakaya', "pako", 'ponnaya', "hutta", "huththo", "hutto", "paco", 'fuck'];
    const _0xfbcc4 = _0x3c05ce.toLowerCase();
    const _0x378e69 = _0x35b9cd.some(_0x21543a => _0xfbcc4.includes(_0x21543a));
    if (_0x378e69 && config.AUTO_VOICE === 'true') {
      await _0x1925ef.sendMessage(_0x4826fb, {
        'audio': {
          'url': "https://github.com/sadiyamin/alexa-database/raw/refs/heads/main/Media/pakaya.mp3"
        },
        'mimetype': "audio/mpeg",
        'ptt': true
      }, {
        'quoted': _0x3893ca
      });
    }
  } catch (_0x1e86e7) {
    console.error(_0x1e86e7);
    _0x2b1261("An error occurred while processing the message.");
  }
});
cmd({
  'on': 'body'
}, async (_0x2a57ff, _0x3a9e4d, _0xa3c63f, {
  from: _0x21c81d,
  body: _0x5344b2,
  isGroup: _0xde9fbc,
  isAdmins: _0x1662b4,
  isBotAdmins: _0x539696,
  reply: _0x3a7137,
  sender: _0x3b2270
}) => {
  try {
    const _0x10a79b = ["puca", "wesi", "bijja", "paka", "hukanna", "cariya"];
    const _0x300b8f = _0x5344b2.toLowerCase();
    const _0x3b2dae = _0x10a79b.some(_0x424f3f => _0x300b8f.includes(_0x424f3f));
    if (_0x3b2dae && config.AUTO_VOICE === "true") {
      await _0x2a57ff.sendMessage(_0x21c81d, {
        'audio': {
          'url': "https://github.com/VajiraTech/IZUMI-AUTO-VOICER/raw/main/wesi(tbg).mp3"
        },
        'mimetype': "audio/mpeg",
        'ptt': true
      }, {
        'quoted': _0x3a9e4d
      });
    }
  } catch (_0x5e8476) {
    console.error(_0x5e8476);
    _0x3a7137("An error occurred while processing the message.");
  }
});
cmd({
  'on': "body"
}, async (_0x68e60, _0x936218, _0x14984f, {
  from: _0xec7e1c,
  body: _0x99a7e5,
  isGroup: _0x242108,
  isAdmins: _0x388443,
  isBotAdmins: _0x185125,
  reply: _0xd9bfcb,
  sender: _0x4c6dde
}) => {
  try {
    const _0x585b3e = ["kellek", "ona", 'kollek', 'lollo'];
    const _0x28be20 = _0x99a7e5.toLowerCase();
    const _0x155020 = _0x585b3e.some(_0x35cb0f => _0x28be20.includes(_0x35cb0f));
    if (_0x155020 && config.AUTO_VOICE === 'true') {
      await _0x68e60.sendMessage(_0xec7e1c, {
        'audio': {
          'url': "https://github.com/VajiraTech/IZUMI-AUTO-VOICER/raw/main/kellek%20oni.mp3"
        },
        'mimetype': "audio/mpeg",
        'ptt': true
      }, {
        'quoted': _0x936218
      });
    }
  } catch (_0x182a1a) {
    console.error(_0x182a1a);
    _0xd9bfcb("An error occurred while processing the message.");
  }
});
cmd({
  'on': "body"
}, async (_0x467287, _0x4cd032, _0x145b6e, {
  from: _0x14abb6,
  body: _0xe42e43,
  isGroup: _0xead373,
  isAdmins: _0x19bd59,
  isBotAdmins: _0x11c197,
  reply: _0x43c586,
  sender: _0x245e7b
}) => {
  try {
    const _0x4d083f = ["kawada", 'kanawada', 'kawa', "bilada"];
    const _0xd089f5 = _0xe42e43.toLowerCase();
    const _0x5a5f02 = _0x4d083f.some(_0x1d48b8 => _0xd089f5.includes(_0x1d48b8));
    if (_0x5a5f02 && config.AUTO_VOICE === "true") {
      await _0x467287.sendMessage(_0x14abb6, {
        'audio': {
          'url': "https://github.com/VajiraTech/IZUMI-AUTO-VOICER/raw/main/kawa.mp3"
        },
        'mimetype': "audio/mpeg",
        'ptt': true
      }, {
        'quoted': _0x4cd032
      });
    }
  } catch (_0x160cea) {
    console.error(_0x160cea);
    _0x43c586("An error occurred while processing the message.");
  }
});