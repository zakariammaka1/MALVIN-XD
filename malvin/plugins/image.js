const {
  cmd,
  commands
} = require("../command");
const axios = require("axios");
cmd({
  'pattern': 'img',
  'alias': ["image", "photo"],
  'desc': "To download facebook videos.",
  'category': "download",
  'filename': __filename
}, async (_0x45fa17, _0x5c6fdd, _0x254e1a, {
  from: _0xba5d3f,
  quoted: _0x47f06a,
  body: _0x375b4f,
  isCmd: _0x1337c8,
  command: _0x5ab4c1,
  args: _0x5399c0,
  q: _0x2928cd,
  isGroup: _0x20d123,
  sender: _0x4df98d,
  senderNumber: _0x31e840,
  botNumber2: _0x46accf,
  botNumber: _0x21d070,
  pushname: _0x3c3fb3,
  isMe: _0x4f9760,
  isOwner: _0x47ef8c,
  groupMetadata: _0x376e71,
  groupName: _0x24e5fb,
  participants: _0x1ffa83,
  groupAdmins: _0x4c3ffe,
  isBotAdmins: _0x1ccec0,
  isAdmins: _0x2430dc,
  reply: _0x1d8f23
}) => {
  try {
    if (!_0x2928cd) {
      return _0x1d8f23("*`Please provide a search query for the image.`*");
    }
    const _0x49dedb = encodeURIComponent(_0x2928cd);
    const _0x56814d = 'https://www.googleapis.com/customsearch/v1?q=' + _0x49dedb + '&cx=' + "4258e6a0d3f004974" + "&key=" + "AIzaSyAskJZkqxVyAzZpfvqN5jI9SNZQ984ftMw" + "&searchType=image&num=5";
    const _0x1fa122 = await axios.get(_0x56814d);
    const _0x5981db = _0x1fa122.data;
    if (!_0x5981db.items || _0x5981db.items.length === 0x0) {
      return _0x1d8f23("No images found for your query.");
    }
    for (let _0x450614 = 0x0; _0x450614 < _0x5981db.items.length; _0x450614++) {
      const _0x2af850 = _0x5981db.items[_0x450614].link;
      const _0x3dac57 = {
        'responseType': "arraybuffer"
      };
      const _0x31511b = await axios.get(_0x2af850, _0x3dac57);
      const _0x21eb31 = Buffer.from(_0x31511b.data, "binary");
      const _0x3a598f = {
        'quoted': _0x5c6fdd
      };
      await _0x45fa17.sendMessage(_0xba5d3f, {
        'image': _0x21eb31,
        'caption': "\n*Image " + (_0x450614 + 0x1) + " from your search!*\n*MALVIN-XD IMG DOWNLOADER*\n\n> *© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ · · ·*\n"
      }, _0x3a598f);
    }
  } catch (_0x5ef4b9) {
    console.error(_0x5ef4b9);
    _0x1d8f23("Error: " + _0x5ef4b9.message);
  }
});