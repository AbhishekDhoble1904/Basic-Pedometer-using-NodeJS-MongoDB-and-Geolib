const mongoose = require('mongoose')
const fitSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  userAge: {
    type: Number,
    required: true
  },
  userStartLatitude: {
    type: Number,
    required: true
  },
  userStartLongitude: {
    type: Number,
    required: true
  },
  userStopLatitude: {
    type: Number,
    required: true
  },
  userStopLongitude: {
    type: Number,
    required: true
  },
  Start_Date_Time: {
    type: String,
    required: false
  },
  kilometerData: {
    type: Number,
    required: false
  },
  average_Setps: {
    type: Number,
    required: false
  },
  average_Calories: {
    type: Number,
    required: false
  },
  Required_Time_Hour: {
    type: Number,
    required: false
  },
  Rewards: {
    type: Number,
    required: false
  }
})
module.exports = mongoose.model('Fit', fitSchema)