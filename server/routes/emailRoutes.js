const express = require('express');
const router = express.Router();
const Otp = require('../models/otpModel');

router.post('/verifyemail', async (req,res) => {
    const {email} = req.body;
    if(email){
        const otpCode = Math.floor(100000 + Math.random() * 900000);
        const newOtp = new Otp({email,otpCode,expireIn : new Date().getTime() + 300*1000});
        try {
            newOtp.save();
            res.status(200).json({
                success : true,
                message : 'Please Check Your Email ID'
            });
            mailer(email,otpCode);
         } catch (error) {
            res.status(400).json({
                 message : error
            });
         }
    }else{
        res.status(400).json("Email ID Not Exist");
    }
    
 });

 const mailer = (email,otp) => {
      const nodemailer = require('nodemailer');
      const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'loyal78@ethereal.email',
            pass: '1STWqFp5MBKHhwzFZv'
        }
    });

      const mailOptions = {
        from: 'loyal78@ethereal.email',
        to: {email},
        subject: `${otp} is your verification code for GFG DCE`,
        text: 'Thank you sir !'
      };

      transporter.sendMail(mailOptions, function(error,info){
        if(error){
            console.log(error);
        }else{
            console.log('Email sent : ' + info.response);
        }
      });
 }

module.exports = router;