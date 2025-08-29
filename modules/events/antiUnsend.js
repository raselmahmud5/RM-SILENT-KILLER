const fs = require("fs-extra");
const autoUnsend = fs.readJSONSync("./config/autoUnsend.json");

module.exports = function(api) {
  if (!autoUnsend.enabled) return;
  api.listenMqtt((err, event) => {
    if (err) return;
    if (event.type === "message_reaction") {
      if (autoUnsend.triggerReactions.includes(event.reaction)) {
        api.unsendMessage(event.threadID, event.messageID).catch(console.error);
      }
    }
  });
};
