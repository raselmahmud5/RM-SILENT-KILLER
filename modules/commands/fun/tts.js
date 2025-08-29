module.exports = {
  config: { name: "tts", description: "Text to speech" },
  run({ api, event, args }) {
    api.sendMessage(`TTS: ${args.join(" ")}`, event.threadID);
  }
};
