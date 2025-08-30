const db = require("../utils/db");

// Users
db.run(`CREATE TABLE IF NOT EXISTS users(
  uid TEXT PRIMARY KEY,
  name TEXT,
  isAdmin INTEGER DEFAULT 0,
  isVIP INTEGER DEFAULT 0
)`);

// Banned users
db.run(`CREATE TABLE IF NOT EXISTS banned(
  uid TEXT PRIMARY KEY
)`);

// Groups
db.run(`CREATE TABLE IF NOT EXISTS groups(
  gid TEXT PRIMARY KEY,
  name TEXT,
  settings TEXT
)`);

// VIP users commands
db.run(`CREATE TABLE IF NOT EXISTS vip(
  uid TEXT PRIMARY KEY,
  commands TEXT
)`);

// General commands usage (cooldowns, stats)
db.run(`CREATE TABLE IF NOT EXISTS command_stats(
  uid TEXT,
  command TEXT,
  usage_count INTEGER DEFAULT 0,
  last_used INTEGER,
  PRIMARY KEY(uid, command)
)`);

// AutoSeen & AutoReact events
db.run(`CREATE TABLE IF NOT EXISTS auto_events(
  gid TEXT,
  type TEXT,
  enabled INTEGER DEFAULT 1,
  PRIMARY KEY(gid, type)
)`);

// AntiUnsend logs
db.run(`CREATE TABLE IF NOT EXISTS unsend_logs(
  mid TEXT PRIMARY KEY,
  gid TEXT,
  uid TEXT,
  content TEXT,
  timestamp INTEGER
)`);

// Bot stats
db.run(`CREATE TABLE IF NOT EXISTS stats(
  uid TEXT PRIMARY KEY,
  messages INTEGER DEFAULT 0,
  commands INTEGER DEFAULT 0
)`);

// Scheduled tasks (scheduler)
db.run(`CREATE TABLE IF NOT EXISTS scheduler(
  id TEXT PRIMARY KEY,
  type TEXT,
  payload TEXT,
  execute_at INTEGER
)`);

console.log("✅ Database migration completed.");
