const fs = require("fs-extra");

module.exports = {
  getAppState(path) {
    if (!fs.existsSync(path)) return null;
    return fs.readJSONSync(path);
  },
  saveAppState(path, appState) {
    fs.writeJSONSync(path, appState, { spaces: 2 });
  }
};
