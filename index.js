const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const path = require("path");

const taskRoutes = require("./routes/task");

const port = process.env.PORT || 5000;
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", taskRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
