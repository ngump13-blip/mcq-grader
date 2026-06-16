const express = require("express");
const router = express.Router();
const Exam = require("../models/Exam");
const Result = require("../models/Result");

// GRADE MCQ
router.post("/grade", async (req, res) => {
  const { studentName, answers, examId } = req.body;

  try {
    const exam = await Exam.findById(examId);

    let score = 0;

    exam.answerKey.forEach((correct, index) => {
      if (correct === answers[index]) {
        score++;
      }
    });

    const percentage = (score / exam.answerKey.length) * 100;

    const result = new Result({
      studentName,
      score,
      totalQuestions: exam.answerKey.length,
      percentage
    });

    await result.save();

    res.json(result);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;