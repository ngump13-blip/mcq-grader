const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
  title: String,
  answerKey: [String]
});

module.exports = mongoose.model("Exam", examSchema);