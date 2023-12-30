const Contact = require('../models/contactmodel');

const contactus = async (req, res) => {
    try {

        console.log(req.body);

        const {firstname , lastname , email, phonenumber,message} = req.body;

        const contactemail = await Contact.findOne({email :email});

        if(contactemail){
            return res.status(400).json({message: "Alredy Registered your Problem and give me 24 Hour"});
        }

        const contactProblem = await Contact.create({firstname, lastname , email, phonenumber, message});
        
        res.status(200).json({data : contactProblem,firstname: contactProblem.firstname})
    } catch (error) {
        res.status(400).json({message : req.error})
    }
}

module.exports = contactus;
