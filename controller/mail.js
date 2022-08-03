 var nodemailer = require('nodemailer');



 module.exports = {

    SendMail: (req,res)=> {

        var msg = req.body.msg;
     
           async function main() {

           let transporter = nodemailer.createTransport({
               service:'gmail',
               auth: {
               user: '<your mail>', 
               pass: 'scret code', 
               },
           });

           let info = await transporter.sendMail({
               from: 'test@gmail.com', // sender address
               to: `to_email`, // list of receivers add comma onther mail id
               subject: `example`, 
               text: `${msg}`, 
               html: `<h1>${msg}</h1>`, 
           });

           transporter.close()

           console.log("Message sent: %s", info.messageId);
           console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

           return info.messageId
           }
           main().catch(console.error);

    },






 }
