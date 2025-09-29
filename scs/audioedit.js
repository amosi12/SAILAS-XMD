const { bmbtz } = require("../devbmb/bmbtz");
const fs = require("fs");
const { exec } = require("child_process");

const filename = `${Math.random().toString(36)}`;

// VCard Contact
const quotedContact = {
  key: {
    fromMe: false,
    participant: `0@s.whatsapp.net`,
    remoteJid: "status@broadcast"
  },
  message: {
    contactMessage: {
      displayName: "B.M.B VERIFIED ✅",
      vcard: "BEGIN:VCARD\nVERSION:3.0\nFN:B.M.B VERIFIED ✅\nORG:BMB-TECH BOT;\nTEL;type=CELL;type=VOICE;waid=254700000001:+254 700 000001\nEND:VCARD"
    }
  }
};

// Newsletter context
const newsletterContext = {
  forwardingScore: 999,
  isForwarded: true,
  forwardedNewsletterMessageInfo: {
    newsletterJid: "120363382023564830@newsletter",
    newsletterName: "𝙱.𝙼.𝙱-𝚇𝙼𝙳",
    serverMessageId: 1
  }
};

// DEEP
bmbtz({
  nomCom: "deep",
  categorie: "Audio-Edit"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, msgRepondu } = commandeOptions;
  if (!msgRepondu || !msgRepondu.audioMessage) return repondre("❗ Please mention an audio");
  const media = await zk.downloadAndSaveMediaMessage(msgRepondu.audioMessage);
  const ran = `${filename}.mp3`;
  const settings = "-af atempo=4/4,asettingsrate=44500*2/3";

  exec(`ffmpeg -i ${media} ${settings} ${ran}`, (err) => {
    fs.unlinkSync(media);
    if (err) return repondre("❌ Error during processing: " + err);
    const buffer = fs.readFileSync(ran);
    zk.sendMessage(dest, {
      audio: buffer,
      mimetype: "audio/mpeg",
      contextInfo: {
        ...newsletterContext
      }
    }, { quoted: quotedContact });
    fs.unlinkSync(ran);
  });
});

// BASS
bmbtz({
  nomCom: "bass",
  categorie: "Audio-Edit"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, msgRepondu } = commandeOptions;
  if (!msgRepondu || !msgRepondu.audioMessage) return repondre("❗ Please mention an audio");
  const media = await zk.downloadAndSaveMediaMessage(msgRepondu.audioMessage);
  const ran = `${filename}.mp3`;
  const settings = "-af equalizer=f=18:width_type=o:width=2:g=14";

  exec(`ffmpeg -i ${media} ${settings} ${ran}`, (err) => {
    fs.unlinkSync(media);
    if (err) return repondre("❌ Error during processing: " + err);
    const buffer = fs.readFileSync(ran);
    zk.sendMessage(dest, {
      audio: buffer,
      mimetype: "audio/mpeg",
      contextInfo: {
        ...newsletterContext
      }
    }, { quoted: quotedContact });
    fs.unlinkSync(ran);
  });
});

// REVERSE
bmbtz({
  nomCom: "reverse",
  categorie: "Audio-Edit"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, msgRepondu } = commandeOptions;
  if (!msgRepondu || !msgRepondu.audioMessage) return repondre("❗ Please mention an audio");
  const media = await zk.downloadAndSaveMediaMessage(msgRepondu.audioMessage);
  const ran = `${filename}.mp3`;
  const settings = '-filter_complex "areverse"';

  exec(`ffmpeg -i ${media} ${settings} ${ran}`, (err) => {
    fs.unlinkSync(media);
    if (err) return repondre("❌ Error during processing: " + err);
    const buffer = fs.readFileSync(ran);
    zk.sendMessage(dest, {
      audio: buffer,
      mimetype: "audio/mpeg",
      contextInfo: {
        ...newsletterContext
      }
    }, { quoted: quotedContact });
    fs.unlinkSync(ran);
  });
});

// SLOW
bmbtz({
  nomCom: "slow",
  categorie: "Audio-Edit"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, msgRepondu } = commandeOptions;
  if (!msgRepondu || !msgRepondu.audioMessage) return repondre("❗ Please mention an audio");
  const media = await zk.downloadAndSaveMediaMessage(msgRepondu.audioMessage);
  const ran = `${filename}.mp3`;
  const settings = '-filter:a "atempo=0.8,asettingsrate=44100"';

  exec(`ffmpeg -i ${media} ${settings} ${ran}`, (err) => {
    fs.unlinkSync(media);
    if (err) return repondre("❌ Error during processing: " + err);
    const buffer = fs.readFileSync(ran);
    zk.sendMessage(dest, {
      audio: buffer,
      mimetype: "audio/mpeg",
      contextInfo: {
        ...newsletterContext
      }
    }, { quoted: quotedContact });
    fs.unlinkSync(ran);
  });
});

// TEMPO
bmbtz({
  nomCom: "tempo",
  categorie: "Audio-Edit"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, msgRepondu } = commandeOptions;
  if (!msgRepondu || !msgRepondu.audioMessage) return repondre("❗ Please mention an audio");
  const media = await zk.downloadAndSaveMediaMessage(msgRepondu.audioMessage);
  const ran = `${filename}.mp3`;
  const settings = '-filter:a "atempo=0.9,asettingsrate=65100"';

  exec(`ffmpeg -i ${media} ${settings} ${ran}`, (err) => {
    fs.unlinkSync(media);
    if (err) return repondre("❌ Error during processing: " + err);
    const buffer = fs.readFileSync(ran);
    zk.sendMessage(dest, {
      audio: buffer,
      mimetype: "audio/mpeg",
      contextInfo: {
        ...newsletterContext
      }
    }, { quoted: quotedContact });
    fs.unlinkSync(ran);
  });
});

// NIGHTCORE
bmbtz({
  nomCom: "nightcore",
  categorie: "Audio-Edit"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, msgRepondu } = commandeOptions;
  if (!msgRepondu || !msgRepondu.audioMessage) return repondre("❗ Please mention an audio");
  const media = await zk.downloadAndSaveMediaMessage(msgRepondu.audioMessage);
  const ran = `${filename}.mp3`;
  const settings = '-filter:a "atempo=1.07,asettingsrate=44100*1.20"';

  exec(`ffmpeg -i ${media} ${settings} ${ran}`, (err) => {
    fs.unlinkSync(media);
    if (err) return repondre("❌ Error during processing: " + err);
    const buffer = fs.readFileSync(ran);
    zk.sendMessage(dest, {
      audio: buffer,
      mimetype: "audio/mpeg",
      contextInfo: {
        ...newsletterContext
      }
    }, { quoted: quotedContact });
    fs.unlinkSync(ran);
  });
});
