const axios = require("axios");
const yts = require("yt-search");
const { bmbtz } = require("../devbmb/bmbtz");

const newsletterContext = {
  contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363382023564830@newsletter",
      newsletterName: "𝙱.𝙼.𝙱-𝚇𝙼𝙳",
      serverMessageId: 1
    }
  }
};

//================= AUDIO - .play =================

bmbtz({
nomCom: "video",
alias: ["darama"],
categorie: "download",
reaction: "🎥"
}, async (dest, zk, { arg, ms, repondre }) => {
try {
if (!arg || !arg[0]) return repondre("❌ Please give me a title or URL.");
const q = arg.join(" ");
const search = await yts(q);
const data = search.videos[0];
const url = data.url;

const desc = `

⫷⦁B.M.B-TECH VⵊDEO DOWNLOADⵊNG⦁⫸

🎥 VIDEO FOUND!

➥ Title: ${data.title}
➥ Duration: ${data.timestamp}
➥ Views: ${data.views}
➥ Uploaded On: ${data.ago}
➥ Link: ${data.url}

🎬 ENJOY THE VIDEO!
By 𝙱.𝙼.𝙱-𝚃𝙴𝙲𝙷
`;

await zk.sendMessage(dest, { image: { url: data.thumbnail }, caption: desc, ...newsletterContext }, { quoted: ms });  

const apiRes = await axios.get(`https://api-rin-tohsaka.vercel.app/download/ytmp4?url=${encodeURIComponent(videoUrl)}`);  
const json = apiRes.data;  

if (!json.success) return repondre("❌ Failed to fetch video from API.");  

const downloadUrl = json.result.download_url;  

await zk.sendMessage(dest, { video: { url: downloadUrl }, mimetype: "video/mp4", ...newsletterContext }, { quoted: ms });  
await zk.sendMessage(dest, {  
  document: { url: downloadUrl },  
  mimetype: "video/mp4",  
  fileName: json.result.title + ".mp4",  
  caption: "*© B.M.B-XMD*",  
  ...newsletterContext  
}, { quoted: ms });

} catch (e) {
console.error(e);
repondre("❌ Error occurred, try again.");
}
});)

