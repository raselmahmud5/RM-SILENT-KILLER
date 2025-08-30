const fs = require("fs-extra");
const path = require("path");

const src = path.join(__dirname, "..", "database");
const dest = path.join(__dirname, "..", "backup", `backup-${Date.now()}`);

fs.copySync(src, dest);
console.log("✅ Backup completed:", dest);
