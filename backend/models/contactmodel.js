const mongoose = require("mongoose");

const contactusSchema = new mongoose.Schema({
    firstname: {
        type:String,
        require:true
    },
    lastname: {
        type:String,
        require:true
    },
    email: {
        type:String,
        require:true
    },
    phonenumber:{
        type:Number,
        require:true
    },
    message: {
        type:String,
        require:true
    },
    isProblem:{
        type:Boolean,
        default:false
    }
})

const Contactus = new mongoose.model("Contactus",contactusSchema);
module.exports = Contactus;