const mongoose = require('mongoose');

const otpSchema = mongoose.Schema({
    email : {
        type : String,
        required : [true,'Email Is Required']
    },
    otpCode : {
        type : String,
        required : [true,'Code Is Required']
    },
    expireIn : {
        type : Number,
        required : [true,'ExpireIn Is Required']
    }
},{timeStamps : true})

module.exports = mongoose.model('Otp',otpSchema,'Otp');