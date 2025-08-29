module.exports = function(api) {
  api.listenMqtt((err, event) => {
    if (err) return;
    if (event.type === "message" && event.body.includes("added")) {
      api.sendMessage("Thanks for adding me!", event.threadID);
    }
  });
};
