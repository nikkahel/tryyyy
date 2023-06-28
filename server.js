const express = require('express');
const { Pool } = require("pg")
require('dotenv').config()

const app = express()
app.use(express())
const PORT = process.env.PORT || 3000
const connectDb = async () => {
    try {
        const pool = new Pool({
            user: process.env.PGUSER,
            host: process.env.PGHOST,
            database: process.env.PGDATABASE,
            password: process.env.PGPASSWORD,
            port: process.env.PGPORT,
        });
     await pool.connect()
        console.log('pool connected')
        await pool.end()
    } catch (error) {
        console.log(error)
    }
}

connectDb()
app.get('/', (req, res) =>{
    res.send('Hello world')
})

app.listen(PORT,()=>console.log(`listening on port ${PORT}`))
