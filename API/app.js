require('dotenv').config();

const mongoose = require('mongoose');
const createError = require('http-errors');
const logger = require('morgan');
const express = require('express');
const cors = require('cors'); // Uncomment upon deployment
// const cors = require('./config/cors.config'); // Comment upon deployment

require('./config/db.config');

const app = express();

/* Middlewares */

//app.use(passport.initialize())
app.use(express.json());
app.use(logger('dev'));
app.use(cors()); // Comment upon deployment

/* Routes */
const routes = require('./config/routes.config');
app.use('/api', routes);

/* Handle Errors */
app.use((req, res, next) => {
  next(createError(404, 'Route not found'));
});

app.use((error, req, res, next) => { // Middleware used to create errors so we don't have to create them every time inside the controllers
  if (error instanceof mongoose.Error.ValidationError) error = createError(400, error) // Handles mongoose validations errors
  else if (error instanceof mongoose.Error.CastError) error = createError(404, 'Resource not found')
  else if (error.message.includes('E11000')) error = createError(400, 'Already exists') // MongoDB duplicates error
  else if (!error.status) error = createError(500, error)

  if (error.status >= 500) {
    console.error(error);
  }

  // Used to render errors
  const data = {}
  data.message = error.message;
  data.errors = error.errors ? 
    Object.keys(error.errors)
      .reduce((errors, key) => ({ ...errors, [key]: error.errors[key].message || error.errors[key] }), {}) :
    undefined;

  res.status(error.status).json(data);
});

const port = Number(process.env.PORT || 3001); // The API will run on port 3001 while the front end will do it on port 3000

app.listen(port, () => {
  console.log(`Ready! Listening on port ${port}`);
});