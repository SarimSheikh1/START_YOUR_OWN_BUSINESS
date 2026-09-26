const { DatabaseSync } = require('node:sqlite');
const path = require('path');
const fs = require('fs');
require('dotenv').config();
const file = path.resolve(process.env.DATABASE_PATH || './database/businesspro.db');
fs.mkdirSync(path.dirname(file), { recursive: true });
// Node 22.5+ supplies SQLite directly, avoiding native add-on build issues.
const db = new DatabaseSync(file);
db.exec('PRAGMA foreign_keys = ON');
module.exports = db;
