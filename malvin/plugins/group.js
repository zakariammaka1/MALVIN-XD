const config = require('../../settings');
const {
  cmd,
  commands
} = require('../command');
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
} = require('../functions');
cmd({
  'pattern': "approve",
  'desc': "Automatically approve Specific Country users in the waiting list",
  'react': '✅',
  'category': "group",
  'filename': __filename
}, async (_0x5ab319, _0x26bce, _0x1a7a63, {
  isGroup: _0x373bf8,
  isBotAdmins: _0x5b7593,
  isAdmins: _0x4ad0e2,
  args: _0x28116a,
  reply: _0x33128f
}) => {
  try {
    if (!_0x373bf8) {
      return _0x33128f("This command is only for groups.");
    }
    if (!_0x5b7593) {
      return _0x33128f("I need to be a group admin to perform this action.");
    }
    if (!_0x4ad0e2) {
      return _0x33128f("You must be an admin to use this command.");
    }
    const _0xb2a1a6 = _0x26bce.key.remoteJid;
    const _0x5dfd93 = await _0x5ab319.groupRequestParticipantsList(_0xb2a1a6);
    if (_0x5dfd93.length === 0x0) {
      return _0x33128f("No participants are in the waiting list.");
    }
    const _0x1b7727 = _0x5dfd93.filter(_0x3e07c5 => _0x3e07c5.jid.startsWith(config.AUTO_ADD_Country_Code));
    if (_0x1b7727.length === 0x0) {
      return _0x33128f("No users with the country code " + config.AUTO_ADD_Country_Code + " found in the waiting list.");
    }
    const _0x50a0d4 = _0x1b7727.map(_0xfe252c => _0xfe252c.jid);
    const _0x1f6150 = await _0x5ab319.groupRequestParticipantsUpdate(_0xb2a1a6, _0x50a0d4, 'approve');
    console.log(_0x1f6150);
    _0x33128f("Approved the following users:\n" + _0x50a0d4.join("\n"));
  } catch (_0x445fe7) {
    console.error(_0x445fe7);
    await _0x5ab319.sendMessage(_0x26bce.key.remoteJid, {
      'react': {
        'text': '❌',
        'key': _0x26bce.key
      }
    });
    _0x33128f("Error: " + _0x445fe7.message);
  }
});
cmd({
  'pattern': 'promote',
  'react': '🥏',
  'alias': ['addadmin'],
  'desc': "To Add a participant as an Admin",
  'category': 'group',
  'use': '.promote',
  'filename': __filename
}, async (_0x353c91, _0x4aa608, _0x46f6a5, {
  from: _0x4a2000,
  quoted: _0x3d966,
  body: _0xe386c2,
  isCmd: _0x121a33,
  command: _0x472937,
  mentionByTag: _0x2ef54f,
  args: _0x17acd6,
  q: _0x58e6be,
  isGroup: _0x37984f,
  sender: _0x149851,
  senderNumber: _0x294793,
  botNumber2: _0x38e0c6,
  botNumber: _0x2755fb,
  pushname: _0x4e41e7,
  isMe: _0x59ce6d,
  isOwner: _0x1bd672,
  groupMetadata: _0x364410,
  groupName: _0x16363c,
  participants: _0x1decbb,
  groupAdmins: _0x23df99,
  isBotAdmins: _0x2e0c24,
  isCreator: _0x4eae32,
  isDev: _0x6b076c,
  isAdmins: _0x5d0ba6,
  reply: _0x41aeee
}) => {
  try {
    if (!_0x37984f) {
      return _0x41aeee("This is a group-only command.");
    }
    if (!_0x5d0ba6 && !_0x59ce6d) {
      return _0x353c91.sendMessage(_0x4a2000, {
        'text': "🚫 *This is an admin-only command*"
      }, {
        'quoted': _0x4aa608
      });
    }
    if (!_0x2e0c24) {
      return _0x41aeee("*Bot must be an admin first ❗*");
    }
    const _0x438b5a = await _0x2ef54f;
    let _0x2c70a0 = (await _0x438b5a) || _0x4aa608.msg.contextInfo.participant;
    if (!_0x2c70a0) {
      return _0x41aeee("🚫 *Couldn't find any user in context*");
    }
    const _0xa2067e = await getGroupAdmins(_0x1decbb);
    if (_0xa2067e.includes(_0x2c70a0)) {
      return _0x41aeee("*User is already an admin ✅*");
    }
    await _0x353c91.groupParticipantsUpdate(_0x4a2000, [_0x2c70a0], 'promote');
    await _0x353c91.sendMessage(_0x4a2000, {
      'text': "*Promoted as an admin ✔️*"
    }, {
      'quoted': _0x4aa608
    });
  } catch (_0x5ad5ab) {
    _0x41aeee("🚫 *An error occurred!!*\n\n" + _0x5ad5ab);
    console.log(_0x5ad5ab);
  }
});
cmd({
  'pattern': "demote",
  'react': '🥏',
  'alias': ["removeadmin"],
  'desc': "To Demote Admin to Member",
  'category': "group",
  'use': '.demote',
  'filename': __filename
}, async (_0x254584, _0x245f72, _0x112593, {
  from: _0x3d520e,
  quoted: _0x373235,
  body: _0x27f984,
  isCmd: _0x286dbb,
  command: _0x4994c8,
  mentionByTag: _0x1ff2ed,
  args: _0x5d3374,
  q: _0x51eba8,
  isGroup: _0x5760e0,
  sender: _0x188f14,
  senderNumber: _0x19f5cb,
  botNumber: _0x1ef2ca,
  pushname: _0x3b2416,
  isMe: _0x5277df,
  isOwner: _0x2e9e1f,
  groupMetadata: _0x47bbd5,
  groupName: _0x23ad8e,
  participants: _0x5e15da,
  groupAdmins: _0x1b0c35,
  isBotAdmins: _0x2bde9e,
  isCreator: _0x32ae7c,
  isDev: _0x460ac8,
  isAdmins: _0x55dae6,
  reply: _0x46a545
}) => {
  try {
    if (!_0x5760e0) {
      return _0x46a545("This is a Group only command.");
    }
    if (!_0x55dae6) {
      if (!_0x5277df) {
        return _0x254584.sendMessage(_0x3d520e, {
          'text': "🚫 *This is an admin-only command*"
        }, {
          'quoted': _0x245f72
        });
      }
    }
    if (!_0x2bde9e) {
      return _0x46a545("*Bot must be admin first ❗*");
    }
    const _0x1bdf03 = await _0x1ff2ed;
    let _0x3ecb63 = (await _0x1bdf03) || _0x245f72.msg.contextInfo.participant;
    if (!_0x3ecb63) {
      return _0x46a545("🚫 *Couldn't find any user in context*");
    }
    const _0x57fcc8 = await getGroupAdmins(_0x5e15da);
    if (!_0x57fcc8.includes(_0x3ecb63)) {
      return _0x46a545("*User is already not an admin ✅*");
    }
    await _0x254584.groupParticipantsUpdate(_0x3d520e, [_0x3ecb63], 'demote');
    await _0x254584.sendMessage(_0x3d520e, {
      'text': "*User is no longer an admin ✔️*"
    }, {
      'quoted': _0x245f72
    });
  } catch (_0x39e186) {
    _0x46a545("🚫 *An error occurred !!*\n\n" + _0x39e186);
    console.error(_0x39e186);
  }
});
cmd({
  'pattern': "requests",
  'desc': "View pending join requests",
  'use': ".requests",
  'react': '📝',
  'category': "group",
  'filename': __filename
}, async (_0x1f9e92, _0x4a59d8, _0x419347, {
  from: _0x76a20,
  isGroup: _0xc58a83,
  reply: _0x201400
}) => {
  if (!_0xc58a83) {
    return await _0x201400("This command can only be used in groups.");
  }
  const _0x3fe41e = _0x1f9e92.user.jid;
  const _0x48ec3f = await _0x1f9e92.groupMetadata(_0x76a20);
  const _0x167772 = _0x48ec3f.participants.some(_0x2aea00 => _0x2aea00.jid === _0x3fe41e && _0x2aea00.admin);
  if (!_0x167772) {
    return await _0x201400("I'm not an admin in this group.");
  }
  try {
    const _0x364105 = await _0x1f9e92.groupRequestParticipantsList(_0x76a20);
    if (_0x364105.length === 0x0) {
      return await _0x201400("No pending join requests.");
    }
    let _0x170789 = "Pending Join Requests:\n\n";
    _0x364105.forEach((_0x5a3f2d, _0x41cbed) => {
      _0x170789 += _0x41cbed + 0x1 + ". @" + _0x5a3f2d.jid.split('@')[0x0] + "\n";
    });
    return await _0x201400(_0x170789, {
      'mentions': _0x364105.map(_0x247c63 => _0x247c63.jid)
    });
  } catch (_0x3c0fd1) {
    console.error("Error retrieving join requests:", _0x3c0fd1);
    return await _0x201400("Failed to retrieve join requests. Please try again later.");
  }
});
cmd({
  'pattern': "tagall",
  'desc': "Tags all members and admins in the group.",
  'category': 'group',
  'react': "🏷️",
  'use': ".tagall",
  'filename': __filename
}, async (_0x103982, _0x5de1b8, _0x5f0369, {
  from: _0xa5d9ea,
  isGroup: _0x29042a,
  groupMetadata: _0x51303c,
  participants: _0x444a32,
  isOwner: _0x2aa8a7,
  isAdmins: _0x190d4a,
  groupAdmins: _0x52713b,
  reply: _0x450ecf
}) => {
  try {
    if (!_0x29042a) {
      return _0x450ecf("This command can only be used in groups.");
    }
    if (!_0x2aa8a7 && !_0x190d4a) {
      return _0x450ecf("This command can only be used by the bot owner.");
    }
    if (!_0x444a32 || _0x444a32.length === 0x0) {
      return _0x450ecf("There are no members in this group.");
    }
    let _0x352f93 = "*Tag All: 🏷️*\n\n";
    let _0xcf665e = [];
    for (let _0x1bd6eb of _0x444a32) {
      const _0x56da6a = _0x52713b.includes(_0x1bd6eb.id);
      _0x352f93 += '@' + _0x1bd6eb.id.split('@')[0x0] + " " + (_0x56da6a ? "(Admin 🕯️)" : '') + "\n";
      _0xcf665e.push(_0x1bd6eb.id);
    }
    await _0x103982.sendMessage(_0xa5d9ea, {
      'text': _0x352f93,
      'mentions': _0xcf665e
    }, {
      'quoted': _0x5de1b8
    });
  } catch (_0x3df2af) {
    console.error("Error tagging members and admins:", _0x3df2af);
    _0x450ecf("An error occurred while trying to tag all members and admins. Please try again.");
  }
});
cmd({
  'pattern': "accept",
  'desc': "Accept group join request(s)",
  'use': ".accept <request numbers>",
  'react': '✔️',
  'category': "group",
  'filename': __filename
}, async (_0xb8d555, _0x47a80b, _0x3300b4, {
  from: _0x56ae22,
  isGroup: _0x3acdfb,
  reply: _0x1479dc,
  match: _0x1dd3b8
}) => {
  if (!_0x3acdfb) {
    return await _0x1479dc("This command can only be used in groups.");
  }
  const _0x2948b7 = _0xb8d555.user.jid;
  const _0x1c8307 = await _0xb8d555.groupMetadata(_0x56ae22);
  const _0x2987b5 = _0x1c8307.participants.some(_0x32d2cf => _0x32d2cf.jid === _0x2948b7 && _0x32d2cf.admin);
  if (!_0x2987b5) {
    return await _0x1479dc("I'm not an admin in this group.");
  }
  try {
    const _0x4bc25d = await _0xb8d555.groupRequestParticipantsList(_0x56ae22);
    if (_0x4bc25d.length === 0x0) {
      return await _0x1479dc("No pending join requests.");
    }
    if (!_0x1dd3b8) {
      return await _0x1479dc("Provide the number(s) of the request(s) to accept, separated by commas.");
    }
    const _0x2c688d = _0x1dd3b8.split(',').map(_0x22b93b => parseInt(_0x22b93b.trim()) - 0x1);
    const _0x31a24a = _0x2c688d.filter(_0x5c2105 => _0x5c2105 >= 0x0 && _0x5c2105 < _0x4bc25d.length);
    if (_0x31a24a.length === 0x0) {
      return await _0x1479dc("Invalid request number(s).");
    }
    for (let _0x19e5eb of _0x31a24a) {
      await _0xb8d555.groupRequestParticipantsUpdate(_0x56ae22, [_0x4bc25d[_0x19e5eb].jid], "accept");
    }
    return await _0x1479dc("Accepted " + _0x31a24a.length + " join request(s).");
  } catch (_0x403a43) {
    console.error("Error accepting join requests:", _0x403a43);
    await _0xb8d555.sendMessage(_0x56ae22, {
      'react': {
        'text': '❌',
        'key': _0x47a80b.key
      }
    });
    return await _0x1479dc("Failed to accept join requests. Please try again later.");
  }
});
cmd({
  'pattern': 'reject',
  'desc': "Reject group join request(s)",
  'use': ".reject <request numbers>",
  'react': '❌',
  'category': 'group',
  'filename': __filename
}, async (_0x255f57, _0x33fb55, _0x419d03, {
  from: _0xb6e5c7,
  isGroup: _0x4099b9,
  reply: _0x298b80,
  match: _0x337554
}) => {
  if (!_0x4099b9) {
    return await _0x298b80("This command can only be used in groups.");
  }
  const _0x8a6af = _0x255f57.user.jid;
  const _0x2fc0bc = await _0x255f57.groupMetadata(_0xb6e5c7);
  const _0x389b11 = _0x2fc0bc.participants.some(_0x441c16 => _0x441c16.jid === _0x8a6af && _0x441c16.admin);
  if (!_0x389b11) {
    return await _0x298b80("I'm not an admin in this group.");
  }
  try {
    const _0x5be9d8 = await _0x255f57.groupRequestParticipantsList(_0xb6e5c7);
    if (_0x5be9d8.length === 0x0) {
      return await _0x298b80("No pending join requests.");
    }
    if (!_0x337554) {
      return await _0x298b80("Provide the number(s) of the request(s) to reject, separated by commas.");
    }
    const _0x35219e = _0x337554.split(',').map(_0x46fb98 => parseInt(_0x46fb98.trim()) - 0x1).filter(_0x5d0321 => _0x5d0321 >= 0x0 && _0x5d0321 < _0x5be9d8.length);
    if (_0x35219e.length === 0x0) {
      return await _0x298b80("_Invalid request number(s)._");
    }
    for (let _0x345b6c of _0x35219e) {
      await _0x255f57.groupRequestParticipantsUpdate(_0xb6e5c7, [_0x5be9d8[_0x345b6c].jid], "reject");
    }
    return await _0x298b80("_Rejected " + _0x35219e.length + " join request(s)._");
  } catch (_0x3c383c) {
    console.error("Error rejecting join requests:", _0x3c383c);
    await _0x255f57.sendMessage(_0xb6e5c7, {
      'react': {
        'text': '❌',
        'key': _0x33fb55.key
      }
    });
    return await _0x298b80("Failed to reject join requests. Please try again later.");
  }
});
cmd({
  'pattern': "del",
  'react': '⛔',
  'alias': [','],
  'desc': "delete message",
  'category': 'main',
  'use': ".del",
  'filename': __filename
}, async (_0x3a6cb0, _0x117f3e, _0x12445e, {
  from: _0x5c6de7,
  l: _0x5237f7,
  quoted: _0x31eebd,
  body: _0xc5e555,
  isCmd: _0x41a1cf,
  isDev: _0x2d2544,
  command: _0x5a5dab,
  args: _0xa37bd2,
  q: _0x391ec1,
  isGroup: _0x2e118c,
  sender: _0x1bc86f,
  senderNumber: _0x26eceb,
  botNumber2: _0x432c49,
  botNumber: _0x22149f,
  pushname: _0x18956d,
  isSachintha: _0x14677f,
  isSavi: _0x3c5176,
  isSadas: _0x3c702d,
  isMani: _0x276cd1,
  isMe: _0x24978e,
  isOwner: _0x106b71,
  groupMetadata: _0xb25c78,
  groupName: _0x8182a8,
  participants: _0x1520de,
  groupAdmins: _0x3b532f,
  isBotAdmins: _0xc85447,
  isAdmins: _0x14761b,
  reply: _0x542b54
}) => {
  try {
    const _0xa438b0 = {
      'remoteJid': _0x12445e.chat,
      'fromMe': false,
      'id': _0x12445e.quoted.id,
      'participant': _0x12445e.quoted.sender
    };
    await _0x3a6cb0.sendMessage(_0x12445e.chat, {
      'delete': _0xa438b0
    });
  } catch (_0x2c5c99) {
    _0x542b54("*Error !!*");
    _0x5237f7(_0x2c5c99);
  }
});
cmd({
  'pattern': "leave",
  'react': '🔓',
  'alias': ['left', "kickme"],
  'desc': "To leave from the group",
  'category': 'group',
  'use': '.leave',
  'filename': __filename
}, async (_0x765176, _0x2e11aa, _0x8957aa, {
  from: _0x5be041,
  l: _0x396c09,
  quoted: _0x7e5a79,
  body: _0x3b183e,
  isCmd: _0x3ccdb4,
  command: _0x2bc785,
  argsArray: _0x21098a,
  q: _0x45b24b,
  isGroup: _0x2cbb83,
  sender: _0xf5df0a,
  senderNumber: _0x14dcd3,
  botNumber2: _0x2ce310,
  botNumber: _0x90c50c,
  pushname: _0x4efa1b,
  isMe: _0x10464f,
  isOwner: _0x5522ee,
  groupMetadata: _0x62eae7,
  groupName: _0x42cbea,
  participants: _0x4ef060,
  groupAdmins: _0x2f7d80,
  isBotAdmins: _0x55c16a,
  isCreator: _0x103480,
  isDev: _0x257617,
  isAdmins: _0x48f100,
  reply: _0x543d6c
}) => {
  try {
    if (!_0x2cbb83) {
      return _0x543d6c("🚫 *This is Group command*");
    }
    if (!_0x10464f) {
      return _0x543d6c("🚫 *This is Group command*");
    }
    await _0x765176.sendMessage(_0x5be041, {
      'text': "🔓 *Good Bye All*"
    }, {
      'quoted': _0x2e11aa
    });
    await _0x765176.groupLeave(_0x5be041);
  } catch (_0x53baaa) {
    _0x543d6c("*Error !!*");
    console.log(_0x53baaa);
  }
});
cmd({
  'pattern': 'invite',
  'react': '🖇️',
  'alias': ["grouplink", 'glink'],
  'desc': "To Get the Group Invite link",
  'category': "group",
  'use': ".invite",
  'filename': __filename
}, async (_0x43b2c8, _0x4ae968, _0x43736e, {
  from: _0x366e6a,
  l: _0xd0fb26,
  quoted: _0x28f183,
  body: _0x2fc12e,
  isCmd: _0x42199e,
  command: _0x15310f,
  args: _0x230ba2,
  q: _0x1632a3,
  isGroup: _0x534137,
  sender: _0x409ebc,
  senderNumber: _0x3ac259,
  botNumber2: _0x54ba65,
  botNumber: _0x1bb476,
  pushname: _0x4effbf,
  isMe: _0x99c431,
  isOwner: _0x72c192,
  groupMetadata: _0x2b0a18,
  groupName: _0x37d528,
  participants: _0x23842e,
  groupAdmins: _0x590fed,
  isBotAdmins: _0x13f115,
  isCreator: _0x1bd35f,
  isDev: _0x15947f,
  isAdmins: _0x2f6a35,
  reply: _0x262fb7
}) => {
  try {
    if (!_0x534137) {
      return _0x262fb7("🚫 *This is a Group command*");
    }
    if (!_0x13f115) {
      return _0x262fb7("🚫 *Bot must be an Admin first*");
    }
    if (!_0x2f6a35) {
      if (!_0x99c431) {
        return _0x262fb7("🚫 *You must be an admin first*");
      }
    }
    const _0x9500e = await _0x43b2c8.groupInviteCode(_0x366e6a);
    await _0x43b2c8.sendMessage(_0x366e6a, {
      'text': "🖇️ *Group Link*\n\nhttps://chat.whatsapp.com/" + _0x9500e
    }, {
      'quoted': _0x4ae968
    });
  } catch (_0x29ea6f) {
    _0x262fb7("*Error !!*");
    console.log(_0x29ea6f);
  }
});
cmd({
  'pattern': 'add',
  'desc': "Add a member to the group.",
  'category': "group",
  'react': '➕',
  'filename': __filename
}, async (_0x27f956, _0x4ee15a, _0x1f921f, {
  from: _0x139af2,
  quoted: _0x4a56bf,
  body: _0xab5468,
  isCmd: _0x28c83d,
  command: _0x2af0a7,
  args: _0x10eefd,
  q: _0x300555,
  isGroup: _0x5c80c9,
  sender: _0x4a0033,
  senderNumber: _0x5df205,
  botNumber2: _0x51b869,
  botNumber: _0x438619,
  pushname: _0x3303f9,
  isMe: _0x89f4ed,
  isOwner: _0x4eab83,
  groupMetadata: _0x442191,
  groupName: _0x3fa9da,
  participants: _0x499d69,
  groupAdmins: _0x38c347,
  isBotAdmins: _0x8c4641,
  isAdmins: _0x4e1d09,
  reply: _0x5059e2
}) => {
  try {
    if (!_0x5c80c9) {
      return _0x5059e2("*🚨 This command can only be used in a group.*");
    }
    if (!_0x8c4641) {
      return _0x5059e2("*🚨 Please give me admin rights.*");
    }
    if (!_0x4e1d09 && !_0x89f4ed) {
      return _0x5059e2("*🚨 Only group admins can use this command.*");
    }
    const _0x2fc6c8 = _0x300555.split(" ")[0x0];
    if (!_0x2fc6c8) {
      return _0x5059e2("Please provide a phone number to add.");
    }
    await _0x27f956.groupParticipantsUpdate(_0x139af2, [_0x2fc6c8 + '@s.whatsapp.net'], "add");
    await _0x5059e2('@' + _0x2fc6c8 + " has been added to the group.", {
      'mentions': [_0x2fc6c8 + "@s.whatsapp.net"]
    });
  } catch (_0x2fef27) {
    console.error(_0x2fef27);
    _0x5059e2("Error: " + _0x2fef27.message);
  }
});
cmd({
  'pattern': "end",
  'desc': "Remove all members from the group (except bot and group creator).",
  'category': "group",
  'filename': __filename,
  'react': '🚫'
}, async (_0x4efb9c, _0x47d2dc, _0x39bfeb, {
  from: _0x22487b,
  isGroup: _0x21aabf,
  isAdmins: _0x41d2f4,
  isOwner: _0x1cb876,
  isBotAdmins: _0x25d920,
  isMe: _0x12427,
  groupMetadata: _0x25228b,
  reply: _0x18a8d1
}) => {
  try {
    if (!_0x21aabf) {
      return _0x18a8d1("This command can only be used in groups.");
    }
    if (!_0x1cb876 && !_0x41d2f4) {
      return _0x18a8d1("This command can only be used by the bot owner.");
    }
    const _0x4c16e7 = _0x25228b.owner;
    const _0x4b6a48 = _0x4efb9c.user.id;
    const _0x3707c4 = _0x25228b.participants.filter(_0x25bbd5 => _0x25bbd5.id !== _0x4c16e7 && _0x25bbd5.id !== _0x4b6a48);
    await _0x4efb9c.groupParticipantsUpdate(_0x22487b, _0x3707c4.map(_0x1679ee => _0x1679ee.id), 'remove');
    _0x18a8d1("*🚫 All members have been removed from the group (except the bot and group creator).*");
  } catch (_0x40963f) {
    console.error(_0x40963f);
    _0x18a8d1("❌ Error: " + _0x40963f);
  }
});
cmd({
  'pattern': "tagadmin",
  'desc': "Tags all the admins in the group.",
  'category': "group",
  'use': ".tagadmin",
  'filename': __filename
}, async (_0x397f97, _0x22479c, _0x1529d1, {
  from: _0x39ab0e,
  isGroup: _0x5f46eb,
  groupMetadata: _0x2ed8ba,
  groupAdmins: _0x45d329,
  reply: _0x383571
}) => {
  try {
    if (!_0x5f46eb) {
      return _0x383571("This command is only for groups.");
    }
    if (_0x45d329.length === 0x0) {
      return _0x383571("There are no admins in this group.");
    }
    let _0x5d53b1 = "*Tagging all admins in the group:*\n\n";
    for (let _0xc7ca63 of _0x45d329) {
      _0x5d53b1 += '@' + _0xc7ca63.split('@')[0x0] + "\n";
    }
    await _0x397f97.sendMessage(_0x39ab0e, {
      'text': _0x5d53b1,
      'mentions': _0x45d329
    }, {
      'quoted': _0x22479c
    });
  } catch (_0x3f6d31) {
    console.error("Error tagging admins:", _0x3f6d31);
    _0x383571("An error occurred while trying to tag all admins. Please try again.");
  }
});
cmd({
  'pattern': "mute",
  'alias': ["lock"],
  'react': '♻️',
  'desc': "mute group.",
  'category': "group",
  'filename': __filename
}, async (_0x3603bd, _0x4bbb32, _0x4df0cc, {
  from: _0x1c837d,
  l: _0x30a271,
  quoted: _0x4e8739,
  body: _0xb83aa6,
  isCmd: _0x2ac592,
  command: _0xe902cc,
  args: _0x3dabb8,
  q: _0x11ec04,
  isGroup: _0x237443,
  sender: _0x47e089,
  senderNumber: _0x553f07,
  botNumber2: _0x1acdb4,
  botNumber: _0x1fdca7,
  pushname: _0x1b35f2,
  isMe: _0x17b324,
  isOwner: _0x572408,
  groupMetadata: _0x51dcef,
  groupName: _0x2e90d4,
  participants: _0x122ec5,
  isItzcp: _0x1e0b00,
  groupAdmins: _0x431215,
  isBotAdmins: _0x66a261,
  isAdmins: _0x219c98,
  reply: _0x1ae381
}) => {
  try {
    if (!_0x572408 || !_0x219c98) {
      return;
    }
    if (!_0x4df0cc.isGroup) {
      return _0x1ae381(mg.onlygroup);
    }
    if (!_0x66a261) {
      return _0x1ae381(mg.needbotadmins);
    }
    await _0x3603bd.groupSettingUpdate(_0x4df0cc.chat, "announcement");
    const _0x2a9c08 = await _0x3603bd.sendMessage(_0x4df0cc.chat, {
      'text': "*Group muted*"
    }, {
      'quoted': _0x4bbb32
    });
    return await _0x3603bd.sendMessage(_0x4df0cc.chat, {
      'react': {
        'text': '🔒',
        'key': _0x2a9c08.key
      }
    });
  } catch (_0x4c6056) {
    console.log(_0x4c6056);
    _0x1ae381("*❗👻*");
  }
});
cmd({
  'pattern': "unmute",
  'alias': ["unlock"],
  'react': '🔊',
  'desc': "unmute group.",
  'category': "group",
  'filename': __filename
}, async (_0x36a43e, _0x1ef350, _0x1bd4bd, {
  from: _0x7ca8dd,
  l: _0x2659cf,
  quoted: _0x3bf12c,
  body: _0x148080,
  isCmd: _0x316aec,
  command: _0x5830d3,
  args: _0x264947,
  q: _0x211b67,
  isGroup: _0x804f8,
  sender: _0x20d910,
  senderNumber: _0x2399b9,
  botNumber2: _0x5f26b0,
  botNumber: _0x2e0e38,
  pushname: _0xcf0f27,
  isMe: _0x4a07c6,
  isOwner: _0x31f66c,
  groupMetadata: _0x23fe6c,
  groupName: _0x142c8a,
  participants: _0x114ae5,
  isItzcp: _0x3e0d05,
  groupAdmins: _0x2f15c3,
  isBotAdmins: _0x3cc470,
  isAdmins: _0x3f637a,
  reply: _0x29b841
}) => {
  try {
    if (!_0x31f66c || !_0x3f637a) {
      return;
    }
    if (!_0x1bd4bd.isGroup) {
      return _0x29b841(mg.onlygroup);
    }
    if (!_0x3cc470) {
      return _0x29b841(mg.needbotadmins);
    }
    await _0x36a43e.groupSettingUpdate(_0x1bd4bd.chat, 'not_announcement');
    const _0x294c2f = await _0x36a43e.sendMessage(_0x1bd4bd.chat, {
      'text': "*Group unmuted*"
    }, {
      'quoted': _0x1ef350
    });
    return await _0x36a43e.sendMessage(_0x1bd4bd.chat, {
      'react': {
        'text': '🔒',
        'key': _0x294c2f.key
      }
    });
  } catch (_0x1d9bb8) {
    console.log(_0x1d9bb8);
    _0x29b841("*_❗👻_*");
  }
});
cmd({
  'pattern': "kick",
  'react': '🚫',
  'alias': ['..'],
  'desc': "Kicks replied/quoted user from group.",
  'category': 'group',
  'filename': __filename,
  'use': "<quote|reply|number>"
}, async (_0x5a605b, _0x539e3b, _0x161048, {
  from: _0x611f97,
  l: _0x3fefe7,
  quoted: _0x5c09af,
  body: _0x1e873c,
  isCmd: _0x55b97f,
  command: _0x10a43f,
  args: _0x3b3a7d,
  q: _0x1f3fe2,
  isGroup: _0x3a00a7,
  sender: _0x35f6fe,
  senderNumber: _0x2bbe77,
  botNumber2: _0x18ac71,
  botNumber: _0x334f68,
  pushname: _0x5c8123,
  isMe: _0x4db70f,
  isOwner: _0x50c194,
  groupMetadata: _0x4063b2,
  groupName: _0x438ab0,
  participants: _0x4f8e08,
  isItzcp: _0x1a90fd,
  groupAdmins: _0x1c194d,
  isBotAdmins: _0x3e1f24,
  isAdmins: _0x5f043b,
  reply: _0x17765a
}) => {
  if (!_0x50c194 || !_0x5f043b) {
    return;
  }
  try {
    if (!_0x161048.isGroup) {
      return _0x17765a(mg.onlygroup);
    }
    if (!_0x3e1f24) {
      return _0x17765a(mg.needbotadmins);
    }
    const _0x163f94 = _0x161048.quoted.sender;
    if (!_0x163f94) {
      return _0x17765a(mg.nouserforkick);
    }
    await _0x5a605b.groupParticipantsUpdate(_0x161048.chat, [_0x163f94], "remove");
    _0x17765a(mg.userremoved);
  } catch (_0x412656) {
    _0x17765a("*successful ✅*");
    _0x3fefe7(_0x412656);
  }
});
cmd({
  'pattern': "setname",
  'desc': "Change the group's name.",
  'category': 'group',
  'use': "<new group name>",
  'filename': __filename
}, async (_0x1cffcf, _0x3b17cc, _0x25148a, {
  from: _0x280089,
  q: _0x17b289,
  isGroup: _0x1b1757,
  isBotAdmins: _0x16a8fc,
  isAdmins: _0x2269ee,
  reply: _0x560cb2
}) => {
  try {
    if (!_0x1b1757) {
      return _0x560cb2("This command is only for groups.");
    }
    if (!_0x16a8fc) {
      return _0x560cb2("I need to be an admin to change the group name.");
    }
    if (!_0x2269ee) {
      return _0x560cb2("Only group admins can change the group name.");
    }
    if (!_0x17b289) {
      return _0x560cb2("Please provide a new name for the group.");
    }
    await _0x1cffcf.groupUpdateSubject(_0x280089, _0x17b289);
    _0x560cb2("✅ Group name has been updated to: *" + _0x17b289 + '*');
  } catch (_0x5b0164) {
    console.error(_0x5b0164);
    _0x560cb2("🛑 An error occurred while changing the group name.");
  }
});
cmd({
  'pattern': "setdesc",
  'desc': "Change the group's description.",
  'category': 'group',
  'use': "<new group description>",
  'filename': __filename
}, async (_0x260ddc, _0x13026f, _0x17fda5, {
  from: _0x2c3ae8,
  q: _0x4db91b,
  isGroup: _0x48b7ec,
  isBotAdmins: _0x4224d3,
  isAdmins: _0x3987d3,
  reply: _0x4c0c97
}) => {
  try {
    if (!_0x48b7ec) {
      return _0x4c0c97("This command is only for groups.");
    }
    if (!_0x4224d3) {
      return _0x4c0c97("I need to be an admin to change the group description.");
    }
    if (!_0x3987d3) {
      return _0x4c0c97("Only group admins can change the group description.");
    }
    if (!_0x4db91b) {
      return _0x4c0c97("Please provide a new description for the group.");
    }
    await _0x260ddc.groupUpdateDescription(_0x2c3ae8, _0x4db91b);
    _0x4c0c97("✅ Group description has been updated to: *" + _0x4db91b + '*');
  } catch (_0x4ad553) {
    console.error(_0x4ad553);
    _0x4c0c97("🛑 An error occurred while changing the group description.");
  }
});
cmd({
  'pattern': 'opentime',
  'react': '🔖',
  'desc': "To open group to a time",
  'category': "group",
  'use': ".opentime",
  'filename': __filename
}, async (_0x3d8318, _0x4a5ed9, _0x4fd975, {
  from: _0x189838,
  prefix: _0x397e1e,
  l: _0x1ba6db,
  quoted: _0xd97717,
  body: _0x4f82a4,
  isCmd: _0x193e21,
  command: _0x3a6f4d,
  args: _0x4d67c2,
  q: _0x6bf9a6,
  isGroup: _0x2a0013,
  sender: _0x16d7fd,
  senderNumber: _0x758149,
  botNumber2: _0x3dc583,
  botNumber: _0x2791db,
  pushname: _0x597f49,
  isMe: _0x1cc4ae,
  isOwner: _0x36e999,
  groupMetadata: _0x2019fe,
  groupName: _0x2ee8d1,
  participants: _0x3acef2,
  groupAdmins: _0x424755,
  isBotAdmins: _0x4a46c9,
  isAdmins: _0x1a67ea,
  reply: _0x370c84
}) => {
  try {
    if (!_0x2a0013) {
      return _0x370c84(ONLGROUP);
    }
    if (!_0x1a67ea) {
      return _0x370c84(ADMIN);
    }
    if (_0x4d67c2[0x1] == 'second') {
      var _0x5ba4e2 = _0x4d67c2[0x0] * "1000";
    } else {
      if (_0x4d67c2[0x1] == "minute") {
        var _0x5ba4e2 = _0x4d67c2[0x0] * "60000";
      } else {
        if (_0x4d67c2[0x1] == 'hour') {
          var _0x5ba4e2 = _0x4d67c2[0x0] * "3600000";
        } else {
          if (_0x4d67c2[0x1] == "day") {
            var _0x5ba4e2 = _0x4d67c2[0x0] * "86400000";
          } else {
            return _0x370c84("*select:*\nsecond\nminute\nhour\n\n*example*\n10 second");
          }
        }
      }
    }
    _0x370c84("Open time " + _0x6bf9a6 + " starting from now");
    setTimeout(() => {
      _0x3d8318.groupSettingUpdate(_0x189838, "not_announcement");
      _0x370c84("*Open time* the group was opened by admin\n now members can send messages");
    }, _0x5ba4e2);
    await _0x3d8318.sendMessage(_0x189838, {
      'react': {
        'text': '✅',
        'key': _0x4a5ed9.key
      }
    });
  } catch (_0x279d7b) {
    _0x370c84("*Error !!*");
    _0x1ba6db(_0x279d7b);
  }
});
cmd({
  'pattern': "closetime",
  'react': '🔖',
  'desc': "To close group to a time",
  'category': "group",
  'use': ".closstime",
  'filename': __filename
}, async (_0x39ebc8, _0x2dc403, _0x5662f2, {
  from: _0x169921,
  prefix: _0xdfa593,
  l: _0x2d4ff5,
  quoted: _0xc5e1eb,
  body: _0x2c49e9,
  isCmd: _0x4520fe,
  command: _0x5a7096,
  args: _0x5283db,
  q: _0x4c9ac8,
  isGroup: _0x17b9d9,
  sender: _0x596f74,
  senderNumber: _0x1ab239,
  botNumber2: _0x218ca8,
  botNumber: _0x1c86dc,
  pushname: _0x3f5d58,
  isMe: _0x3d6186,
  isOwner: _0x38314b,
  groupMetadata: _0x346968,
  groupName: _0x5015f7,
  participants: _0x4867d5,
  groupAdmins: _0x1ac9f1,
  isBotAdmins: _0x111209,
  isAdmins: _0x1c4b67,
  reply: _0x5764f1
}) => {
  try {
    if (!_0x17b9d9) {
      return _0x5764f1(ONLGROUP);
    }
    if (!_0x1c4b67) {
      return _0x5764f1(ADMIN);
    }
    if (_0x5283db[0x1] == "second") {
      var _0x55436c = _0x5283db[0x0] * "1000";
    } else {
      if (_0x5283db[0x1] == "minute") {
        var _0x55436c = _0x5283db[0x0] * "60000";
      } else {
        if (_0x5283db[0x1] == "hour") {
          var _0x55436c = _0x5283db[0x0] * "3600000";
        } else {
          if (_0x5283db[0x1] == "day") {
            var _0x55436c = _0x5283db[0x0] * "86400000";
          } else {
            return _0x5764f1("*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second");
          }
        }
      }
    }
    _0x5764f1("Close time " + _0x4c9ac8 + " starting from now");
    setTimeout(() => {
      _0x39ebc8.groupSettingUpdate(_0x169921, "announcement");
      _0x5764f1("*Close time* group closed by admin\nnow only admin can send messages");
    }, _0x55436c);
    await _0x39ebc8.sendMessage(_0x169921, {
      'react': {
        'text': '✅',
        'key': _0x2dc403.key
      }
    });
  } catch (_0x33bcbd) {
    _0x5764f1("*Error !!*");
    _0x2d4ff5(_0x33bcbd);
  }
});
cmd({
  'pattern': "join",
  'desc': "Join a group using an invite link.",
  'category': "group",
  'use': "<invite link>",
  'filename': __filename
}, async (_0x4bfc66, _0x60e7cd, _0xcefa26, {
  from: _0x4ffe74,
  q: _0x39ff80,
  isGroup: _0x4142ce,
  reply: _0x371ac2
}) => {
  try {
    if (!_0x39ff80 || !_0x39ff80.startsWith("https://")) {
      return _0x371ac2("Please provide a valid invite link.");
    }
    const _0x5934ee = _0x39ff80.split('/').pop();
    await _0x4bfc66.groupAcceptInvite(_0x5934ee);
    _0x371ac2("✅ Successfully joined the group using the invite link.");
  } catch (_0x4fed7c) {
    console.error(_0x4fed7c);
    _0x371ac2("🛑 An error occurred while trying to join the group. Please check the invite link or try again later.");
  }
});
cmd({
  'pattern': "hidetag",
  'desc': "Tag all members in the group without a notification.",
  'category': "group",
  'react': '🔖',
  'filename': __filename
}, async (_0xca9264, _0x14dc1b, _0x553d75, {
  from: _0x19925d,
  body: _0x2197db,
  isCmd: _0x2821a2,
  command: _0x1f71c9,
  args: _0xc6ed0,
  q: _0x439b0b,
  isGroup: _0x409673,
  sender: _0x4fad20,
  senderNumber: _0xe69723,
  botNumber2: _0x412bc2,
  botNumber: _0x3bebe3,
  pushname: _0x34f303,
  isMe: _0x4d4034,
  isOwner: _0x6b1a9f,
  groupMetadata: _0x485219,
  groupName: _0x3eb376,
  participants: _0x4cb4fc,
  groupAdmins: _0x2ce016,
  isBotAdmins: _0x58881e,
  isAdmins: _0x53316c,
  reply: _0x50d39d
}) => {
  try {
    if (!_0x409673) {
      return _0x50d39d("*🚨 This command can only be used in a group.*");
    }
    if (!_0x53316c && !_0x4d4034) {
      return _0x50d39d("*🚨 Only group admins can use this command.*");
    }
    if (!_0x439b0b) {
      return _0x50d39d("Please provide a message to tag.");
    }
    const _0x4f09a6 = _0x4cb4fc.map(_0x3fa1ef => _0x3fa1ef.id);
    await _0xca9264.sendMessage(_0x19925d, {
      'text': _0x439b0b,
      'mentions': _0x4f09a6
    });
  } catch (_0x487c39) {
    console.error(_0x487c39);
    _0x50d39d("Error: " + _0x487c39.message);
  }
});