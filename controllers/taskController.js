const Task = require("../models/Task");

// GET TASKS
module.exports.getTasks = async (req, res) => {
  try {
    Task.find()
      .sort({ date: -1 })
      .then((tasks) => res.json(tasks));
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};