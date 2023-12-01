let express = require('express');
let axios = require('axios');

let pool = require('../config/database');

let routes = express.Router();


routes.get('/',(req,res) => {
    return res.render('home');
})

routes.get('/search/:title',async (req,res) => {
    let text = req.params.title;
    console.log(text);
     
    try{
     let r = await axios({
        method : 'GET',
        url : `http://www.omdbapi.com/?apikey=2750368a&t=${text}`
     })



     return res.status(200).json({data : r.data});
    
    }catch(err){
        console.log(err);
        return res.status(401).send("un authorized");
    }

});


routes.post('/addFav',async (req,res) => {
    
    

    pool.query("INSERT INTO SlashHash (name,writer,type) VALUES ?",[[[req.body.Title,req.body.Writer.substring(0,9),req.body.Type]]],(err,result,field)=> {
        if (err){
            console.log(err)
            return;
        }
        console.log(result);

    });

    return res.status(200).send("Added");
})

routes.get('/fav',(req,res) => {
    pool.query(`select * from slashhash`,(err,result,field) => {
        if (err){
            console.log("error")
            return res.redirect('back');
        }
         

       

     
    
        return res.render('fav',{
            result
        })
    })
})

module.exports = routes;