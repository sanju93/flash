let express = require('express');

let routes = require('./routes/index');

let pool = require('./config/database');

let app = express();

const port = 8000;

app.use(express.urlencoded());

app.use(express.json());

app.use(express.static('./assets'));
app.set('view engine','ejs');
app.set('views','./views');

app.use('/',routes);

app.listen(port,(err) => {
    if (err){
        console.log(err);
        return;
    }

    console.log("Server running on port",port)
})