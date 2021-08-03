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
module.exports.createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    const newTask = await task.save();

    if (newTask) {
      res.status(201).send(newTask);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Could not create new task.");
  }
};

// PUT TASK
module.exports.updateTask = async (req, res) => {
  try {
    console.log(req.params.id, req.body);
    const selectedTask = await Task.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    await selectedTask.save().then((task) => res.json(task));
  } catch (err) {
    console.log(err);
    res.status(500).send("Could not update task.");
  }
};

// DELETE TASK
module.exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id).then((task) =>
      res.json({ success: true })
    );
  } catch (err) {
    console.log(err);
    res.status(500).send("Could not delete task.");
  }
};
