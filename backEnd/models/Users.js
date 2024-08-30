const mongoose = require('mongoose');
const validator = require('validator');
const usersSchema =new mongoose.Schema({
    firstName:{
        type:String,
        required:[true, 'must have a firstName']
    },
    lastName:{
        type:String,
        required:[true, 'must have a last name']
    },
    email:{
        type:String,
        required:[true, 'must have a email'],
        validate: [validator.isEmail, 'please provide a valid mail']
    },
    password:{
        type:String,
        required:[true, 'must have a password']
    },
    quote:String
})
const Users = mongoose.model('Users',usersSchema)
module.exports = Users;