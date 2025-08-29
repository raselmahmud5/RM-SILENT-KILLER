module.exports = {
  config: { name: "joke", description: "Tell a joke" },
  run({ api, event }) {
    api.sendMessage("Why did the chicken cross the road? To get to the other side!", event.threadID);
  }
};
