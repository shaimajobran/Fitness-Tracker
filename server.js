const express = require("express");
const mongoose  = require("mongoose");
//library that logs data
//express middleware
//everytimes when server breaks or throws exception, morgan logs it automatically
//below creating instance for morgan
const logger = require("morgan");
const {connect} = require('./database/connect');
require('dotenv').config()
const PORT = process.env.PORT || 3000;
connect();

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(logger("dev"));



app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_Fitness || "mongodb://localhost/workout",
// { useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false
  
// });
//routes 
app.use(require("./routes/htmlRoutes"));
app.use(require("./routes/apiRoutes"));





// connecting to database
//creating new instance of mongoDB using mongojs library
app.listen(PORT, ()=> {
    console.log(`App running on port ${PORT} `);
});