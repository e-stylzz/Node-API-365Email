var config = require('../config');
var nodemailer = require('nodemailer');

var mailServer = nodemailer.createTransport({
    port: config.email.port,
    host: config.email.host,
    secureConnection: config.email.secure,
    tls: { ciphers: config.email.ciphers },
    auth: {
        user: process.env.EMAIL_ADDRESS || config.email.username, 
        pass: process.env.EMAIL_PASSWORD || config.email.password 
    }
});

var messageService  = function(){

    return {
        sendEmail : sendEmail
    };
    
    function sendEmail (mail, cb) { 
        
        // Expects:  to, subject, body   
        console.log('Sending Email...');
        var mailOptions = {};
        mailOptions.from = config.email.from;
        mailOptions.to = mail.to;
        mailOptions.subject = mail.subject;
        mailOptions.html = mail.body;

        mailServer.sendMail(mailOptions, function(err, results){
            cb(err, results);
        });
        
    }
};

module.exports = messageService;