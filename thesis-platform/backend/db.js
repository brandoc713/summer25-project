// Database js
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Test connection on startup
pool.query('SELECT NOW()', (err) => {
    if (err) console.error('Database connection error', err.stack);
    else console.log('Database connection successful');
});

module.exports = pool;
