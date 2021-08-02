const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  task: { type: String },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Task = mongoose.models("task", TaskSchema);
