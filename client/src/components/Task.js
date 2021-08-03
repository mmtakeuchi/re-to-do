import React from "react";

const Task = ({ task }) => {
  console.log(task);

  const updateTask = () => {
    console.log(task);
  };

  const completeTask = () => {
    console.log(task);
  };

  return (
    <li key={task._id}>
      <span>{task.task}</span>
      <button onClick={updateTask}>Edit</button>
      <button onClick={completeTask}>Completed</button>
    </li>
  );
};

export default Task;
