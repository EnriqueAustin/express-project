// IMPORTS
const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name:{
        type: String,
        require: [true, "Plase add the contact name"],
    },
    email:{
        type: String,
        require: [true, "Plase add the contact email address"],
    },
    phone:{
        type: String,
        require: [true, "Plase add the contact phone number"],
    },
});