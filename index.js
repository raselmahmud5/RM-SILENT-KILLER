const { login } = require("fca-rasel");
const loader = require("./core/loader");
const handler = require("./core/handler");
const fs = require("fs-extra");

const appStateFile = process.env.APPSTATE_FILE || "./sessions/appstate.json";

login({ appState: fs.readJSONSync(appStateFile) })
  .then(api => {
    console.log("Bot logged in!");
    loader.init(api);
    handler.start(api);
  })
  .catch(err => console.error("Login failed:", err));
