const mongoose = require('mongoose');
const Users = require('./Users');
const offersSchema = new mongoose.Schema({
    description:{
        type:String,
        required:[true,'an offer must have a description']
    },
    freelancer:{
        type: mongoose.Schema.ObjectId,
        ref: 'Users'
    },
    offerDate: Date,
});
const Offers = mongoose.model('Offers',offersSchema);
module.exports = Offers;