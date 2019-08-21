
const db = require("../models");
const nodemailer = require("nodemailer");
const xoauth2 = require('xoauth2');

module.exports = function (app) {
    // app.get("/api/request", function (req, res) {
    //     res.json("resquests");
    // });

    // app.post('/api/send', function (req, res) {
    //     //Step1
    //     console.log("Data Received");
    //     console.log(req.body);
    //     let transporter = nodemailer.createTransport({
    //         service: 'gmail',
    //         host: 'smtp-relay.gmail.com',
    //         auth: {
    //             type: 'oauth2',
    //             user: process.env.User,
    //             clientId: process.env.clientID,
    //             clientSecret: process.env.clientSecret,
    //             refreshToken: process.env.clientRefresh

    //         },
    //         tls: {
    //             rejectUnauthorized: false
    //         }
    //     });
    //     console.log(transporter.SMTPT);
    //     let mailOptions = {
    //         from: 'colingoodale@gmail.com',
    //         to: 'colingoodale@gmail.com',
    //         subject: 'Client Request',
    //         text: 'Client Request:' + req.body.first_name + "," + req.body.last_name + " Mobile Number: " + req.body.phone_number + " email: " + req.body.email + " message: " + req.body.message
    //     }
    //     console.log(mailOptions)
    //     //Step 3
    //     transporter.sendMail(mailOptions, function (err, data) {
    //         if (err) {
    //             console.log("this is an error" + " " + err);
    //         } else {
    //             console.log('email sent');
    //         }
    //     })
    // });
}