var express = require('express');
var router = express.Router();

var mail = require('../controller/mail')



router.get('/', (req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.json({
        code:200,
        dismsg:'Api is Running...'
    });
})



router.post('/send-mail', mail.SendMail);







module.exports = router;