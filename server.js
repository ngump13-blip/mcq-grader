const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// HOME ROUTE (ONLY ONE)
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>MCQ Grading System</title>
        <style>
          body { font-family: Arial; background:#f4f4f4; margin:0; }
          .container {
            max-width: 700px;
            margin: 80px auto;
            background: white;
            padding: 30px;
            text-align: center;
            border-radius: 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>MCQ Grading System</h1>
          <p>System is running 🚀</p>
        </div>
      </body>
    </html>
  `);
});

// DATABASE
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("Mongo Error:", err));

// SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});