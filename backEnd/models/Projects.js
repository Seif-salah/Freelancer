const mongoose = require('mongoose');
const Offers = require('./offers');
const Users = require('./Users');
const projectSchema = new mongoose.Schema({
    title:{
        type:String,
        required:['true','project must have a title']
    },
    description: {
        type:String,
        required:['true','project must have a description']
    },
    price:{
        type: [Number,Number],
        required:[true,'project must have a price']
    },
    postDate: Date,
    projectTimestamp:Date,
    projectOwner:  {
        type: mongoose.Schema.ObjectId,
        ref: 'Users',
      },
    offers:[
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Offers'
        }
    ] 
});
const Projects = mongoose.model('Projects',projectSchema);
module.exports = Projects;