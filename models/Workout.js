const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Fitness = new Schema({
  day:{type:Date,default:Date.now},          // this is going to display the cuurent date

  exercises:[
      {
          type:{
          type:String,
          trim:true,
          required:"enter a type"
      },
      name: {
          type:String,
          trim:true,
          required:"enter a name"
      },
      duration:{
          type:Number,
          trim:true,
          required:"enter a duration"

      },
      weight:{
        type:Number,
        trim:true,
      },
      reps:{
        type:Number, 
        trim:true,
      },             //Not sure if this is correct!?
      sets:{
        typr:Number,
        trim:true,
      },
      distance:{
        type:Number,
        trim:true,
    }
  }
  ],

});
//model represents structure of the document
const Workout = mongoose.model("Workout", Fitness);

module.exports = Workout;
