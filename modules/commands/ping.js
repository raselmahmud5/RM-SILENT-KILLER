module.exports = {
  config: { name: "ping", description: "Ping the bot" },
  run({ api, event }) {
    api.sendMessage("Pong!", event.threadID);
  }
};
