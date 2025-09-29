const { bmbtz } = require('../devbmb/bmbtz');
const { default: axios } = require('axios');
const pkg = require('@whiskeysockets/baileys');
const { generateWAMessageFromContent } = pkg;


bmbtz({ nomCom: "scan", reaction: "🔍", categorie: "pair" }, async (dest, zk, commandeOptions) => {
  const { repondre } = commandeOptions;

  try {
    const instructions = `
*📖 HOW TO GET B.M.B TECH SESSION:*

1️⃣ Open the link below
> https://bmb-tech-pair-site.onrender.com/pair

2️⃣ Enter your WhatsApp number (without +)
👉 Example: 255xxxxxxxx

3️⃣ B.M.B Tech will send a short code

4️⃣ Check WhatsApp notification and enter that code

5️⃣ It will link and generate a session

6️⃣ Copy the session and deploy

🔐 Powered by B.M.B TECH
> Made by 𝙱.𝙼.𝙱-𝚃𝙴𝙲𝙃`;

    const instructionMessage = generateWAMessageFromContent(dest, {
      extendedTextMessage: {
        text: instructions
      }
    }, {});

    await zk.relayMessage(dest, instructionMessage.message, {
      messageId: instructionMessage.key.id,
      contextInfo: {
        ...newsletterContext,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363382023564830@newsletter',
          newsletterName: '𝗕.𝗠.𝗕 𝗧𝗘𝗖𝗛 𝗦𝗖𝗔𝗡',
          serverMessageId: 125
        }
      }
    });

  } catch (error) {
    console.error('Error sending instructions:', error.message);
    repondre('Error sending instructions.');
  }
});