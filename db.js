const { Pool } = require('pg');
const dbConnection = async () =>{
    try{
        const itemsPool = new Pool({
            connectionString: `postgres://projectdb_ttpq_user:HUIvZQQl9eUve1sl4Zad7fUDXbTUj2RL@dpg-cidtdcp8g3n4p2ppcin0-a.frankfurt-postgres.render.com/projectdb_ttpq`,
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