module.exports = function(api) {
  api.listenMqtt((err, event) => {
    if (err) return;
    if (event.type === "message" && event.body.includes("joined")) {
      api.sendMessage("Welcome to the group!", event.threadID);
    }
  });
};
