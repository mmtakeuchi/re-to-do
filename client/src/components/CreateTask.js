import React from "react";
import axios from "axios";
import TaskForm from "./TaskForm";

const CreateTask = (props) => {
  const handleSubmit = async (task) => {
    await axios
      .post("/api/tasks", { task })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      Create Task
      <TaskForm handleSubmit={handleSubmit} buttonLabel="Add Task" />
    </div>
  );
};

export default CreateTask;
