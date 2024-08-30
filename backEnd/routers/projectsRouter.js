const express = require('express');
const projectsRouter = express.Router();
const {getAllProjects} = require('./../controller/projectController')
projectsRouter.route('/').get(getAllProjects);


module.exports = projectsRouter;