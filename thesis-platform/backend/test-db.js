//Test file

const pool = require('./db');

async function testConnection() {
    try {
        const res = await pool.query('SELECT $1::text as message', ['Database is working!'])
        console.log(res.rows[0].message);
        await pool.end();
    } catch (error) {
        console.error('Error testing database connection:', error);
    }
}

testConnection();