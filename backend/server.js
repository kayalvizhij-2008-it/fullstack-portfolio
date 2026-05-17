require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());

/* TEST ROUTE */
app.get("/", (req, res) => {
  res.send("Backend + MongoDB Connected 🚀");
});

/* CONTACT ROUTE */
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("Contact Form Data:");
  console.log(name, email, message);

  res.json({
    success: true,
    message: "Message received successfully!"
  });
});

/* DATABASE CONNECTION */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("DB Error:", err);
  });