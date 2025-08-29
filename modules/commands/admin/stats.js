module.exports = {
  config: { name: "stats", description: "Show stats" },
  run({ api, event }) {
    api.sendMessage("Bot statistics (simulation).", event.threadID);
  }
};
