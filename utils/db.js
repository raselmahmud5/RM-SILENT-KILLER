const fs = require("fs-extra");

module.exports = {
  readJSON(path) {
    if (!fs.existsSync(path)) return {};
    return fs.readJSONSync(path);
  },
  writeJSON(path, data) {
    fs.writeJSONSync(path, data, { spaces: 2 });
  }
};
