const mongoose = require('mongoose');
const Projects = require('./../models/Projects');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
exports.getAllProjects =catchAsync( async (req,res,next)=>{
const projects = await Projects.find();
    if(projects)
        res.status(200).json({
            status: 'success',
            data: projects
    })
    else
    return next(new AppError('no project are found',400));
    next();
});