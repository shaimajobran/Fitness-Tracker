const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
//routes 
app.use(require("./routes/htmlRoutes"));
app.use(require("./routes/apiRoutes"));       // this time we will have the routes files so we dont need to write any Get,Post,Est.. here

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessdb", 
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}
);
//connecting to dtatbase
//creating new instance of mongoDB using mongojs library
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});