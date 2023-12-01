let {createPool,createConnection} = require('mysql')


const pool = createConnection({
    host : "127.0.0.1",
    user : "root",
    password : "sanjay",
    database : "name",
    connectionLimit : 10
})

pool.connect();


pool.query(`create table if not exists SlashHash(name varchar(255),writer varchar(255),type varchar(255))`,(err,result,field) => {
    if (err){
        console.log(err);
        return;
    }

   
})


module.exports = pool;


