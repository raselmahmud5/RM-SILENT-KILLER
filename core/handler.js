const loader = require("./loader");
const contextBuilder = require("./context");
const fs = require("fs-extra");

const vipConfig = fs.readJSONSync("./config/vip.json");
const generalCommands = fs.readJSONSync("./config/generalCommands.json");

module.exports = {
  start(api) {
    api.listenMqtt((err, event) => {
      if (err) return console.error(err);
      const context = contextBuilder.build(event);

      if (event.type === "message") {
        this.handleMessage(api, context);
      } else if (event.type === "message_reaction") {
        this.handleReaction(api, context);
      }
    });
  },

  handleMessage(api, context) {
    const commands = loader.getCommands();
    const prefix = process.env.PREFIX || "!";
    if (!context.body || !context.body.startsWith(prefix)) return;

    const args = context.body.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = commands[commandName];
    if (!command) return;

    if (!this.canRunCommand(context.senderID, commandName)) return;

    command.run({ event: context, api, args });
  },

  canRunCommand(senderID, commandName) {
    if (vipConfig[senderID]?.includes(commandName)) return true;
    if (generalCommands.includes(commandName)) return true;
    return false;
  },

  handleReaction(api, context) {
    const autoUnsend = fs.readJSONSync("./config/autoUnsend.json");
    if (!autoUnsend.enabled) return;
    if (autoUnsend.triggerReactions.includes(context.reaction)) {
      api.unsendMessage(context.threadID, context.messageID).catch(console.error);
    }
  }
};
