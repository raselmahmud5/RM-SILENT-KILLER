module.exports = {
  config: { name: "echo", description: "Echo a message" },
  run({ api, event, args }) {
    api.sendMessage(args.join(" "), event.threadID);
  }
};
