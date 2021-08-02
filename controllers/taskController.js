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

// POST TASKS
module.exports.createTask = (req, res) => {
  try {
    const newTask = new Task(req.body);
    newTask.save().then((task) => res.json(task));
  } catch (err) {
    console.log(err);
    res.status(500).send("Could not create new task.");
  }
};

// PUT TASK

module.exports.updateTask = async (req, res) => {
  try {
    const selectedTask = await Task.findByIdAndUpdate(req.params.id, req.body);
    await selectedTask.save().then((task) => res.json(task));
  } catch (err) {
    console.log(err);
    res.status(500).send("Could not update task.");
  }
};
