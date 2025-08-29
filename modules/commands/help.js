const loader = require("../../core/loader");

module.exports = {
  config: { name: "help", description: "List commands" },
  run({ api, event }) {
    const commands = loader.getCommands();
    let msg = "Available commands:\n";
    Object.keys(commands).forEach(cmd => {
      msg += `• ${cmd}\n`;
    });
    api.sendMessage(msg, event.threadID);
  }
};
