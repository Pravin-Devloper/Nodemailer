var express = require('express');
var app = express();
var router = require('./router/router');
var cors = require('cors');
var bodyparser = require('body-parser');



var host = 'localhost';
var PORT = process.env.PORT || 4000;


app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));



app.use('/api', router);


app.listen(PORT,host, ()=> {
    console.log(`Server Running us ${host}:${PORT}`);
})

module.exports = app;

