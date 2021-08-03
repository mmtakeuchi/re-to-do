import React from "react";
import axios from "axios";
import TaskForm from "./TaskForm";

const CreateTask = (props) => {
  console.log(props);

  const handleSubmit = async (task) => {
    console.log({ task });
    const newTask = await axios
      .post("/api/tasks", { task })
      .then((res) => console.log(res.data));
  };

  return (
    <div>
      Create Task
      <TaskForm handleSubmit={handleSubmit} buttonLabel="Add Task" />
    </div>
  );
};

export default CreateTask;
