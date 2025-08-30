// database/init.js
// Create sqlite.db with default tables

const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Database file
const dbPath = path.join(__dirname, "sqlite.db");

// Connect
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) return console.error("❌ DB Error:", err.message);
  console.log("✅ Database connected at:", dbPath);
});

// Create Tables
db.serialize(() => {
  // Users table
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      uid TEXT PRIMARY KEY,
      name TEXT,
      role TEXT DEFAULT 'member',
      joinedAt TEXT
    )
  `);

  // Commands log
  db.run(`
    CREATE TABLE IF NOT EXISTS command_logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      uid TEXT,
      command TEXT,
      usedAt TEXT
    )
  `);

  // VIP table
  db.run(`
    CREATE TABLE IF NOT EXISTS vip_users (
      uid TEXT PRIMARY KEY,
      name TEXT,
      addedAt TEXT
    )
  `);
});

db.close();
