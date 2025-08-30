// core/loader.js
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
          if (!cmd.config || !cmd.config.name) {
            console.warn(`Command at ${fullPath} is missing 'config.name'`);
            return;
          }
          commands[cmd.config.name] = cmd;
        }
      });
    };
    walk(commandPath);
  },

  loadEvents(api) {
    const eventPath = path.join(__dirname, "../modules/events");
    if (!fs.existsSync(eventPath)) return;
    fs.readdirSync(eventPath).forEach(file => {
      if (file.endsWith(".js")) {
        const evt = require(path.join(eventPath, file));
        if (typeof evt === "function") evt(api);
      }
    });
  },

  getCommands() {
    return commands;
  }
};
