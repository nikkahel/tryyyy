const express = require('express');
const { Pool, Client } = require("pg")
require('dotenv').config()

const app = express()
app.use(express())
const PORT = process.env.PORT || 3000
app.get('/', (req, res) =>{
    res.send('Hello world')
})

app.listen(PORT,()=>console.log(`listening on port ${PORT}`))