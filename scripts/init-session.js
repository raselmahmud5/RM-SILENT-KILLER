const fs = require("fs-extra");
const path = require("path");

const appStateFile = path.join(__dirname, "..", "sessions", "appstate.json");
if (!fs.existsSync(appStateFile)) {
  fs.writeFileSync(appStateFile, JSON.stringify({ access_token: "", cookies: {}, userID: "", expires: 9999999999999 }, null, 2));
  console.log("✅ AppState initialized.");
} else {
  console.log("ℹ️ AppState already exists.");
}
