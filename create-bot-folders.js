const fs = require("fs-extra");
const path = require("path");

// Base folder
const BASE = path.join(__dirname, "mirai-goat-fca-bot");

// Folder structure
const folders = [
  BASE,
  `${BASE}/core`,
  `${BASE}/utils`,
  `${BASE}/config/languages`,
  `${BASE}/modules/commands/admin`,
  `${BASE}/modules/commands/fun`,
  `${BASE}/modules/commands/custom`,
  `${BASE}/modules/events`,
  `${BASE}/plugins`,
  `${BASE}/sessions`,
  `${BASE}/database`,
  `${BASE}/logs`,
  `${BASE}/services`,
  `${BASE}/scripts`,
  `${BASE}/tests`,
  `${BASE}/dashboard`
];

// Files with initial content
const files = {
  [`${BASE}/package.json`]: `{
  "name": "mirai-goat-fca-bot",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": { "start": "node index.js", "dev": "nodemon index.js", "test": "jest" },
  "dependencies": { "axios": "^1.7.0", "fca-priyansh": "^1.0.0", "sqlite3": "^5.1.2", "winston": "^3.8.2", "gtts": "^2.0.0", "node-cron": "^3.0.2", "ytdl-core": "^4.11.0", "fs-extra": "^11.1.1" }
}`,
  [`${BASE}/.env.example`]: `PREFIX=!\nPORT=8080\nAPPSTATE_FILE=sessions/appstate.json\nOWNER_IDS=61571550050635,100024220812646\nLOG_LEVEL=info\nDB_URL=sqlite://database/sqlite.db`,
  [`${BASE}/README.md`]: `# ༊✨𝐌𝐀𝐆𝐈𝐂🔹𝐎𝐅🔸𝐒𝐎𝐔𝐍𝐃✨᯾\nFull-featured Mirai + Goat Messenger Bot.`,
  [`${BASE}/index.js`]: `console.log("Bot starting...");`
};

// Create folders
folders.forEach(folder => fs.ensureDirSync(folder));

// Create files
for (const [file, content] of Object.entries(files)) {
  fs.writeFileSync(file, content);
}

console.log("✅ Bot folder structure created successfully!");
