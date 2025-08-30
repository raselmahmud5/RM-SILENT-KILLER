const db = require("../utils/db");

db.run("CREATE TABLE IF NOT EXISTS users(uid TEXT PRIMARY KEY)");
db.run("CREATE TABLE IF NOT EXISTS banned(uid TEXT PRIMARY KEY)");

console.log("✅ Database migration completed.");
