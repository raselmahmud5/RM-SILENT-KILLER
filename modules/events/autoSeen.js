const fs = require("fs-extra");
const config = fs.readJSONSync("./config/config.json");

module.exports = function(api) {
  if (!config.autoSeen) return;
  api.listenMqtt((err, event) => {
    if (err) return;
    if (event.type === "message") {
      api.markAsRead(event.threadID, event.messageID);
    }
  });
};
