import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  console.log(props.tasks);
  const renderTasks = props.tasks.map((task) => (
    <Task key={task._id} task={task} />
  ));

  return (
    <div>
      <div>Task List</div>
      <ul>{renderTasks}</ul>
    </div>
  );
};

export default TaskList;
