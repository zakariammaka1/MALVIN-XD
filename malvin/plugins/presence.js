const {
  cmd,
  commands
} = require("../command");
const config = require("../../settings");
cmd({
  'on': "body"
}, async (_0x481a69, _0xea6893, _0xda3007, {
  from: _0xfb0289,
  body: _0x16424a,
  isOwner: _0x49a0c6
}) => {
  if (_0x16424a.toLowerCase() || text.toLowerCase()) {
    if (config.FAKE_RECORDING === "true") {
      await _0x481a69.sendPresenceUpdate("recording", _0xfb0289);
    }
  }
});
cmd({
  'on': "body"
}, async (_0x4be0f5, _0x1440ba, _0x4e1841, {
  from: _0x4982cd,
  body: _0x85e1da,
  isOwner: _0x36b3ad
}) => {
  if (_0x85e1da.toLowerCase() || text.toLowerCase()) {
    if (config.AUTO_TYPING === "true") {
      await _0x4be0f5.sendPresenceUpdate("composing", _0x4982cd);
    }
  }
});