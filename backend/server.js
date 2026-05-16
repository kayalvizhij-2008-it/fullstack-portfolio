const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const contactRoutes = require("./routes/contact");

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());

/* ROUTES */
app.use("/api/contact", contactRoutes);

/* TEST ROUTE */
app.get("/", (req, res) => {
  res.send("Backend + MongoDB Connected 🚀");
});

/* DATABASE CONNECTION */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(process.env.PORT, () => {
      console.log("Server running on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("DB Error:", err);
  });