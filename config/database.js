let {createPool,createConnection} = require('mysql')


const pool = createConnection({
    host : "127.0.0.1",
    user : "root",
    password : "sanjay",
    database : "name",
    connectionLimit : 10
})

pool.connect();



module.exports = pool;


