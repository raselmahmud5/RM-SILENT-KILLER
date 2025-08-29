module.exports = {
  config: { name: "ban", description: "Ban a user" },
  run({ api, event, args }) {
    api.sendMessage(`User ${args[0]} has been banned (simulation).`, event.threadID);
  }
};
