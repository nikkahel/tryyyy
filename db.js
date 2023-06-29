const { Pool } = require('pg');
const itemsPool = new Pool({
    connectionString: process.env.DBCONFIGLINK,
    ssl: {
        rejectUnauthorized: false
    }
});
module.exports = itemsPool;