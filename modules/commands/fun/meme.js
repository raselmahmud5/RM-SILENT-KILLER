module.exports = {
  config: { name: "meme", description: "Send a meme" },
  run({ api, event }) {
    api.sendMessage("Here is a meme: [URL]", event.threadID);
  }
};
