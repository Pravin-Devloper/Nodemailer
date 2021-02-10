 var nodemailer = require('nodemailer');



 module.exports = {

    SendMail: (req,res)=> {

        var msg = req.body.msg;

        async function main() {

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
            user: '<your mail-id>', 
            pass: '<mail passcode>', 
            },
        });

        let info = await transporter.sendMail({
            from: '<your mail-id>', // sender address
            to: "<receiver mail-id>", // list of receivers add comma onther mail id
            subject: "Mail Test", 
            text: `<h1>${msg}</h1>`, 
            html: `<h1>${msg}</h1>`, 
        });

        console.log("Message sent: %s", info.messageId);
        res.json(info);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

        }
        main().catch(console.error);

    },






 }