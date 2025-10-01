const {
  exec
} = require("child_process");
const {
  bmbtz
} = require("../devbmb/bmbtz");
const {
  Sticker,
  StickerTypes
} = require("wa-sticker-formatter");
const {
  ajouterOuMettreAJourJid,
  mettreAJourAction,
  verifierEtatJid
} = require('../lib/antilien');
const {
  atbajouterOuMettreAJourJid,
  atbverifierEtatJid
} = require('../lib/antibot');
const {
  search,
  download
} = require('aptoide-scraper');
const fs = require('fs-extra');
const conf = require("../settings");
const {
  default: axios
} = require("axios");
const {
  getBinaryNodeChild,
  getBinaryNodeChildren
} = require("@whiskeysockets/baileys")['default'];
  bmbtz({
  'nomCom': 'add',
  'categorie': "Group",
  'reaction': '🪄'
}, async (_0x24f18e, _0x4375b2, _0x500bd4) => {
  let {
    repondre: _0x132613,
    verifAdmin: _0x2dac04,
    msgRepondu: _0x5e0fe4,
    infosGroupe: _0x554e14,
    auteurMsgRepondu: _0x10e456,
    verifGroupe: _0x44fbb9,
    auteurMessage: _0x416a0c,
    superUser: _0x1ad6e8,
    idBot: _0x3a1d08,
    arg: _0x3e9fea
  } = _0x500bd4;
  if (!_0x44fbb9) {
    return _0x132613("*This command works in groups only!*");
  }
  if (!_0x1ad6e8) {
    _0x132613("You are too weak to do that");
    return;
    }
    ;
  if (!_0x2dac04) {
    _0x132613("You are not an admin here!");
    return;
  }
  ;
  let _0x1fd727;
  try {
    _0x1fd727 = await _0x4375b2.groupMetadata(_0x24f18e);
  } catch (_0x23156a) {
    return _0x132613("Failed to fetch group metadata.");
  }
  let _0xc8dec2 = _0x1fd727.participants;
  if (!_0x3e9fea[0x0]) {
    return _0x132613("Provide number to be added. Example:\nadd 254XXXXX747");
  }
  let _0x4cb0cb = _0x3e9fea.join(" ");
  const _0x5abc4d = _0xc8dec2.map(_0xd268e8 => _0xd268e8.id);
  let _0xee4f6b = [];
  let _0x4ae008 = [];
  try {
    const _0x190ed5 = await Promise.all(_0x4cb0cb.split(',').map(_0xd59024 => _0xd59024.replace(/[^0-9]/g, '')).filter(_0x50909e => _0x50909e.length > 0x4 && _0x50909e.length < 0x14).map(async _0x59d2ca => [_0x59d2ca, await _0x4375b2.onWhatsApp(_0x59d2ca + "@s.whatsapp.net")]));
    _0x190ed5.forEach(([_0xd9f32a, _0x2639c9]) => {
      const _0x1a902c = _0xd9f32a + "@s.whatsapp.net";
      if (_0x5abc4d.includes(_0x1a902c)) {
        _0x4ae008.push(_0x1a902c);
      } else if (_0x2639c9[0x0]?.["exists"]) {
        _0xee4f6b.push(_0xd9f32a + "@c.us");
      }
    });
  } catch (_0x13e463) {
    return _0x132613("Error validating phone numbers.");
  }
  for (const _0x4eef69 of _0x4ae008) {
    _0x132613("That user is already in this group!");
  }
  let _0x366035;
  try {
    if (_0xee4f6b.length > 0x0) {
      _0x366035 = await _0x4375b2.query({
        'tag': 'iq',
        'attrs': {
          'type': 'settings',
          'xmlns': "w:g2",
          'to': _0x24f18e
        },
        'content': _0xee4f6b.map(_0x2bfc5b => ({
          'tag': "add",
          'attrs': {},
          'content': [{
            'tag': "participant",
            'attrs': {
              'jid': _0x2bfc5b
    }
              }]
        }))
      });
      for (const _0x3c35cc of _0xee4f6b) {
        _0x132613("Successfully added @" + _0x3c35cc.split('@')[0x0]);
      }
    }
  } catch (_0x4e3a9f) {
    return _0x132613("Failed to add user to the group!");
  }
  let _0x3f6faa;
  try {
    _0x3f6faa = await _0x4375b2.profilePictureUrl(_0x24f18e, "image")["catch"](() => "https://i.ibb.co/n6rw805/694affc7ca5a5fb0cb58c2b4533f962d.jpg");
  } catch (_0x6d1bf4) {
    _0x3f6faa = "https://i.ibb.co/n6rw805/694affc7ca5a5fb0cb58c2b4533f962d.jpg";
  }
  let _0x4d0c6a = Buffer.alloc(0x0);
  if (_0x3f6faa) {
    try {
      const _0x54d4d5 = await fetch(_0x3f6faa);
      if (_0x54d4d5.ok) {
        _0x4d0c6a = await _0x54d4d5.buffer();
      } else {
        console.error("Failed to fetch profile picture:", _0x54d4d5.statusText);
      }
    } catch (_0x3cebff) {
      console.error("Error fetching profile picture:", _0x3cebff);
    }
  }
  const _0x9b3264 = _0x366035?.["content"]["find"](_0x494271 => _0x494271.tag === "add");
  const _0x267a0b = _0x9b3264?.["content"]['filter'](_0x265691 => _0x265691.attrs.error == 0x193);
  let _0x36611d;
  try {
    _0x36611d = await _0x4375b2.groupInviteCode(_0x24f18e);
  } catch (_0x1031b3) {
    return _0x132613("Failed to generate group invite code.");
  }
  for (const _0x116dc4 of _0x267a0b || []) {
    const _0x4766bc = _0x116dc4.attrs.jid;
    const _0x5488b4 = _0x116dc4.content.find(_0x31f672 => _0x31f672.tag === "add_request");
    const _0x4f92a4 = _0x5488b4.attrs.code;
    const _0x19afe6 = _0x5488b4.attrs.expiration;
    const _0x794f96 = "I cannot add @" + _0x4766bc.split('@')[0x0] + " due to privacy settings, Let me send an invite link instead.";
    await _0x132613(_0x794f96);
    let _0x599fb8 = "You have been invited to join the group " + _0x1fd727.subject + ":\n\nhttps://chat.whatsapp.com/" + _0x36611d + "\n\n*POWERED BY BMB-TECH*";
    await _0x4375b2.sendMessage(_0x4766bc, {
      'image': {
        'url': _0x3f6faa
      },
      'caption': _0x599fb8
    }, {
      'quoted': _0x5e0fe4
    });
  }
});

bmbtz({
  'nomCom': "reject",
  'aliases': ["rejectall", "rej", "reject-all"],
  'categorie': "Group",
  'reaction': '😇'
}, async (_0x1ca2e8, _0x2c301e, _0x483ebc) => {
  const {
    repondre: _0x241d6c,
    verifGroupe: _0x599a8e,
    verifAdmin: _0x377b7b
  } = _0x483ebc;
  if (!_0x599a8e) {
    _0x241d6c("This command works in groups only");
    return;
  }
  if (!_0x377b7b) {
    _0x241d6c("You are not an admin here!");
    return;
  }
  const _0x131a72 = await _0x2c301e.groupRequestParticipantsList(_0x1ca2e8);
  if (_0x131a72.length === 0x0) {
    return _0x241d6c("There are no pending join requests for this group.");
  }
  for (const _0x1d01ca of _0x131a72) {
    const _0x24fec1 = await _0x2c301e.groupRequestParticipantsUpdate(_0x1ca2e8, [_0x1d01ca.jid], "reject");
    console.log(_0x24fec1);
  }
  _0x241d6c("All pending join requests have been rejected.");
});

bmbtz({
  'nomCom': 'approve',
  'aliases': ["approve-all", "accept"],
  'categorie': "Group",
  'reaction': '🔎'
}, async (_0x43946b, _0x2c3517, _0x3f224a) => {
  const {
    repondre: _0x298913,
    verifGroupe: _0x208f8e,
    verifAdmin: _0x43a6a3
  } = _0x3f224a;
  if (!_0x208f8e) {
    _0x298913("This command works in groups only");
    return;
  }
  if (!_0x43a6a3) {
    _0x298913("You are not an admin here!");
    return;
  }
  const _0x2bc3fc = await _0x2c3517.groupRequestParticipantsList(_0x43946b);
  if (_0x2bc3fc.length === 0x0) {
    return _0x298913("There are no pending join requests.");
  }
  for (const _0x5dcd51 of _0x2bc3fc) {
    const _0x9a395b = await _0x2c3517.groupRequestParticipantsUpdate(_0x43946b, [_0x5dcd51.jid], 'approve');
    console.log(_0x9a395b);
  }
  _0x298913("All pending participants have been approved to join by popkid md.");
});

bmbtz({
  'nomCom': 'invite',
  'aliases': ["link"],
  'categorie': 'Group',
  'reaction': '🪄'
}, async (_0x5b6e86, _0x75673b, _0x387b7e) => {
  const {
    repondre: _0x89d41d,
    nomGroupe: _0x200b30,
    nomAuteurMessage: _0x3fb091,
    verifGroupe: _0x57ef89
  } = _0x387b7e;
  if (!_0x57ef89) {
    _0x89d41d("*This command works in groups only!*");
    return;
  }
  try {
    const _0x35f332 = await _0x75673b.groupInviteCode(_0x5b6e86);
    const _0x1ccce3 = "https://chat.whatsapp.com/" + _0x35f332;
    const _0x5e291d = "Hello " + _0x3fb091 + ", here is the group link of " + _0x200b30 + ":\n\nClick Here To Join: " + _0x1ccce3;
    _0x89d41d(_0x5e291d);
  } catch (_0x926163) {
    console.error("Error fetching group invite link:", _0x926163.message || _0x926163);
    _0x89d41d("An error occurred while fetching the group invite link. Please try again.");
  }
});

bmbtz({  
  'nomCom': 'revoke',
  'categorie': 'Group'
}, async (_0x5cf31f, _0x499fc5, _0x27df3d) => {
  const {
    arg: _0x1cbe7c,
    repondre: _0x1e4f60,
    verifGroupe: _0x5201ec,
    verifAdmin: _0x5ad84b
  } = _0x27df3d;
  if (!_0x5ad84b) {
    _0x1e4f60("for admins.");
    return;
  }
  ;
  if (!_0x5201ec) {
    _0x1e4f60("This command is only allowed in groups.");
  }
  ;
  await _0x499fc5.groupRevokeInvite(_0x5cf31f);
  _0x1e4f60("group link revoked.");
});
