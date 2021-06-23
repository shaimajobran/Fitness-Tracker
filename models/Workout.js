const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Fitness = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: 'Enter your exercise type'
      },
      name: {
        type: String,
        required: 'Enter a name'
      },
      duration: {
        type: Number,
        required: 'Enter a number'
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      distance: {
        type: Number
      }
    }
  ]
});


//model represents structure of the document
const Workout = mongoose.model("Workout", Fitness);

module.exports = Workout;
