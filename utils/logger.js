const fs = require("fs-extra");
const moment = require("moment");

module.exports = {
  log(message) {
    const logMessage = `[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync("logs/app.log", logMessage + "\n");
  },
  error(message) {
    const errorMessage = `[${moment().format("YYYY-MM-DD HH:mm:ss")}] ERROR: ${message}`;
    console.error(errorMessage);
    fs.appendFileSync("logs/error.log", errorMessage + "\n");
  },
  event(message) {
    const eventMessage = `[${moment().format("YYYY-MM-DD HH:mm:ss")}] EVENT: ${message}`;
    fs.appendFileSync("logs/events.log", eventMessage + "\n");
  }
};
