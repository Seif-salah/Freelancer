const express = require('express');
const usersRouter = express.Router();
const {getAllUsers} = require('./../controller/usersController')
usersRouter.route('/').get(getAllUsers);


module.exports = usersRouter;