const schedule = require("node-schedule");

module.exports = {
  dailyBackup(callback) {
    schedule.scheduleJob("0 0 * * *", callback);
  },
  everyMinute(callback) {
    schedule.scheduleJob("* * * * *", callback);
  }
};
