const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Fitness = new Schema({
  day:{type:Date,default:Date.now},          // this is going to display the cuurent date

  exercises:[
      {
          type:{
          type:String,
          required:true
      },
      name: {
          type:String,
          required:true
      },
      duration:{
          type:Number,
          required:true

      },
      weight:Number,
      reps:Number,              //Not sure if this is correct!?
      sets:Number,
      distance:number
    }
  ]
});
//model represents structure of the document
const Note = mongoose.model("Workout", Fitness);

module.exports = workout;
