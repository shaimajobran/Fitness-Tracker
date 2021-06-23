const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const app = express();
// const compression = require('compression');

// Port
const PORT = process.env.PORT || 3000;


// Require the models folder
const db = require('./models');

// Connect to Mongoose db and port
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workoutdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});


// Middleware

// app.use(compression());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Routes

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// connecting to database
//creating new instance of mongoDB using mongojs library
app.listen(PORT, ()=> {
    console.log(`App running on port ${PORT} `);
});