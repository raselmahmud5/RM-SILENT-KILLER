const fs = require("fs");
const path = require("path");

let commands = {};
let events = {};

module.exports = {
  init(api) {
    this.loadCommands();
    this.loadEvents(api);
  },
  loadCommands() {
    const commandPath = path.join(__dirname, "../modules/commands");
    const walk = dir => {
      fs.readdirSync(dir, { withFileTypes: true }).forEach(file => {
        const fullPath = path.join(dir, file.name);
        if (file.isDirectory()) return walk(fullPath);
        if (file.name.endsWith(".js")) {
          const cmd = require(fullPath);
          commands[cmd.config.name] = cmd;
        }
      });
    };
    walk(commandPath);
  },
  loadEvents(api) {
    const eventPath = path.join(__dirname, "../modules/events");
    fs.readdirSync(eventPath).forEach(file => {
      const evt = require(path.join(eventPath, file));
      evt(api);
    });
  },
  getCommands() {
    return commands;
  }
};
