const mongoose = require('mongoose');
const Users = require('./../models/Users');
const AppError = require('../utils/appError');

exports.getAllUsers=async (req,res,next)=>{
    const users =await Users.find();
    if(!users)
        return next(new AppError('no users found'),400);
    res.status(200).json({
        status:'success',
        data: users,
    })
}