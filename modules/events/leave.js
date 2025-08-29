module.exports = function(api) {
  api.listenMqtt((err, event) => {
    if (err) return;
    if (event.type === "message" && event.body.includes("left")) {
      api.sendMessage(`${event.senderID} has left the group.`, event.threadID);
    }
  });
};
