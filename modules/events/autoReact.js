const fs = require("fs-extra");
const autoReact = fs.readJSONSync("./config/autoReact.json");

module.exports = function(api) {
  if (!autoReact.enabled) return;
  api.listenMqtt((err, event) => {
    if (err) return;
    if (event.type === "message") {
      autoReact.rules.forEach(rule => {
        rule.keywords.forEach(word => {
          if (event.body.includes(word)) {
            api.setMessageReaction(rule.reaction, event.messageID, event.threadID);
          }
        });
      });
    }
  });
};
