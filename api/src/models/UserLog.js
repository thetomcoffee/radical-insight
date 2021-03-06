const mongoose = require("mongoose");
const { Schema } = mongoose;
const MedicationSchema = require("./Medication");
const MoodSchema = require("./Mood");

const UserLogSchema = new Schema({
  createdOn: {
    type: Date,
    required: true,
    default: new Date()
  },
  date: {
    type: Date,
    required: true,
    default: new Date()
  },
  modifiedOn: {
    type: Date,
    required: true,
    default: new Date()
  },
  mood: {
    type: MoodSchema,
    required: false
  },
  medication: {
    type: MedicationSchema,
    required: false
  }
});

module.exports = UserLogSchema;
