module.exports = {
  config: { name: "unban", description: "Unban a user" },
  run({ api, event, args }) {
    api.sendMessage(`User ${args[0]} has been unbanned (simulation).`, event.threadID);
  }
};
