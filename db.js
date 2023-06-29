const { Pool } = require('pg');
const dbConnection = async () =>{
    try{
        const itemsPool = new Pool({
            connectionString: process.env.DBCONFIGLINK,
            ssl: {
                rejectUnauthorized: false
            }
        });
        itemsPool.connect()
        console.log('connection')
    }catch (e) {
        console.log(e)
    }
}
module.exports = dbConnection;