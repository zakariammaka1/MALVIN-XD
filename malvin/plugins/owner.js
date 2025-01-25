const {
  cmd
} = require("../command");
cmd({
  'pattern': 'block',
  'desc': "Block a user.",
  'category': "owner",
  'react': '🚫',
  'filename': __filename
}, async (_0x2d1845, _0x4d3aed, _0x3325fe, {
  from: _0x3239f9,
  isOwner: _0x400c3d,
  quoted: _0x5e840a,
  reply: _0x4ca614
}) => {
  if (!_0x400c3d) {
    return _0x4ca614("*❌ You are not the owner!*");
  }
  if (!_0x5e840a) {
    return _0x4ca614("*❌ Please reply to the user you want to block.*");
  }
  const _0x255c4f = _0x5e840a.sender;
  try {
    await _0x2d1845.updateBlockStatus(_0x255c4f, "block");
    _0x4ca614("*🚫 User " + _0x255c4f + " blocked successfully.*");
  } catch (_0x1c6ce0) {
    _0x4ca614("*❌ Error blocking user: " + _0x1c6ce0.message + '*');
  }
});
cmd({
  'pattern': 'unblock',
  'desc': "Unblock a user.",
  'category': 'owner',
  'react': '✅',
  'filename': __filename
}, async (_0x535f77, _0x43414c, _0x708ba7, {
  from: _0x30ba09,
  isOwner: _0x582025,
  quoted: _0x5b25c7,
  reply: _0xbce056
}) => {
  if (!_0x582025) {
    return _0xbce056("*❌ You are not the owner!*");
  }
  if (!_0x5b25c7) {
    return _0xbce056("*❌ Please reply to the user you want to unblock.*");
  }
  const _0x2291ec = _0x5b25c7.sender;
  try {
    await _0x535f77.updateBlockStatus(_0x2291ec, "unblock");
    _0xbce056("*✅ User " + _0x2291ec + " unblocked successfully.*");
  } catch (_0x4b5c2d) {
    _0xbce056("❌ Error unblocking user: " + _0x4b5c2d.message);
  }
});
cmd({
  'pattern': "clearchats",
  'desc': "Clear all chats from the bot.",
  'category': "owner",
  'react': '🧹',
  'filename': __filename
}, async (_0x102871, _0xd0d9cc, _0xc49744, {
  from: _0x212c14,
  isOwner: _0x1b12ed,
  reply: _0x11d865
}) => {
  if (!_0x1b12ed) {
    return _0x11d865("*❌ You are not the owner!*");
  }
  try {
    const _0x29ce47 = _0x102871.chats.all();
    for (const _0x3b7330 of _0x29ce47) {
      await _0x102871.modifyChat(_0x3b7330.jid, "delete");
    }
    _0x11d865("*🧹 All chats cleared successfully!*");
  } catch (_0x5c2942) {
    _0x11d865("*❌ Error clearing chats: " + _0x5c2942.message + '*');
  }
});
cmd({
  'pattern': "jid",
  'desc': "Get the bot's JID.",
  'category': "owner",
  'react': '🤖',
  'filename': __filename
}, async (_0x10454f, _0x14b04a, _0x513703, {
  from: _0x4fd794,
  isOwner: _0x44a23f,
  reply: _0x4d7357
}) => {
  if (!_0x44a23f) {
    return _0x4d7357("❌ You are not the owner!");
  }
  _0x4d7357("🤖 *Bot JID:* " + _0x10454f.user.jid);
});
cmd({
  'pattern': "gjid",
  'desc': "Get the list of JIDs for all groups the bot is part of.",
  'category': "owner",
  'react': '📝',
  'filename': __filename
}, async (_0x3be43a, _0x57a6e7, _0x116b91, {
  from: _0x4907b8,
  isOwner: _0x4e996b,
  reply: _0x412a10
}) => {
  if (!_0x4e996b) {
    return _0x412a10("*❌ You are not the owner!*");
  }
  const _0x50e57d = await _0x3be43a.groupFetchAllParticipating();
  const _0x4a5202 = Object.keys(_0x50e57d).join("\n");
  _0x412a10("📝 *Group JIDs:*\n\n" + _0x4a5202);
});