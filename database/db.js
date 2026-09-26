const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');
require('dotenv').config();
const file = path.resolve(process.env.DATABASE_PATH || './database/businesspro.db');
fs.mkdirSync(path.dirname(file), { recursive: true });
const db = new Database(file);
db.pragma('foreign_keys = ON');
module.exports = db;
