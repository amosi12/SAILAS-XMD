// encrypt-command.js (cleaned / readable version)

const { bmbtz } = require("../devbmb/bmbtz");
const pkg = require("@whiskeysockets/baileys");
const { generateWAMessageFromContent, proto } = pkg;
const JavaScriptObfuscator = require("javascript-obfuscator");

/**
 * Command metadata
 */
const commandInfo = {
  nomCom: "encrypt",
  categorie: "Coding",
};

/**
 * bmbtz registers a command handler. 
 * Callback receives (from, conn, context).
 */
bmbtz(commandInfo, async (from, conn, context) => {
  const {
    ms,
    arg: args,
    repondre: reply,
    prefixe,
    auteurMessage,
    nomAuteurMessage,
    msgRepondu,
    auteurMsgRepondu,
  } = context;

  try {
    // join args into a single JS source string
    const sourceCode = args.join(" ");
    if (!sourceCode) {
      await reply("After the command, provide a js code to obfuscate");
      return;
    }

    // Obfuscation options
    const obfuscationOptions = {
      compact: true,
      controlFlowFlattening: true,
      controlFlowFlatteningThreshold: 1,
      numbersToExpressions: true,
      simplify: true,
      stringArrayShuffle: true,
      splitStrings: true,
      stringArrayThreshold: 1,
    };

    // Generate obfuscated code
    const obfuscationResult = JavaScriptObfuscator.obfuscate(
      sourceCode,
      obfuscationOptions
    );
    const obfuscatedCode = obfuscationResult.getObfuscatedCode();

    // Build interactive message button payload for "COPY CODE"
    const buttons = [
      {
        name: "cta_copy",
        buttonParamsJson: JSON.stringify({
          display_text: "COPY CODE",
          id: "copy_code",
          copy_code: obfuscatedCode,
        }),
      },
    ];

    // Device list metadata required by viewOnce/interactive wrapper
    const deviceListMetadata = {
      deviceListMetadata: {},
      deviceListMetadataVersion: 2,
    };

    // Interactive message body (the obfuscated code as text)
    const body = { text: obfuscatedCode };

    // Header / footer placeholders
    const header = {
      title: "",
      subtitle: "",
      hasMediaAttachment: false,
    };
    const footer = { text: "> *B.M.B-TECH*" };

    // NativeFlow (buttons) wrapper
    const nativeFlow = { buttons };

    // Build the full viewOnce interactive message
    const viewOnceMessageContent = {
      viewOnceMessage: {
        message: {
          messageContextInfo: deviceListMetadata,
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create(body),
            footer: proto.Message.InteractiveMessage.Footer.create(footer),
            header: proto.Message.InteractiveMessage.Header.create(header),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create(nativeFlow),
          }),
        },
      },
    };

    // Create the WA message object
    const waMessage = generateWAMessageFromContent(from, viewOnceMessageContent, {});

    // Relay the message
    await conn.relayMessage(from, waMessage.message, { messageId: waMessage.key.id });

    // Confirm to the user
    await reply("Code Successfully Encrypted");
  } catch (err) {
    console.error("Error:", err);
    await reply(
      "Something is wrong, check if your code is logical and has the correct syntax"
    );
  }
});