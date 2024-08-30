const express = require('express');
const projectsRouter = require('./routers/projectsRouter');
const usersRouter = require('./routers/usersRouter');
const AppError = require('./utils/appError');
const app = express();

const cors = require('cors')
// const express = require('express')

 
app.use(cors())

//router for all projects
app.use('/api/v1/projects',projectsRouter);
app.use('/api/v1/users',usersRouter);
app.all('*', (req, res, next) => {
    //   const err = new Error(`that url ${req.originalUrl} is not on the server`);
    //   err.status = 'fail';
    //   err.statusCode = 404;
    next(new AppError(`that url ${req.originalUrl} is not on the server`), 400);
  });
module.exports = app;