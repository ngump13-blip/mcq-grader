const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  studentName: String,
  score: Number,
  totalQuestions: Number,
  percentage: Number
});

module.exports = mongoose.model("Result", resultSchema);