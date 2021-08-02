import React from "react";

const TaskList = (props) => {
  console.log(props.tasks);
  const renderTasks = props.tasks.map((task) => (
    <li key={task._id}>{task.task}</li>
  ));

  return (
    <div>
      <div>Task List</div>
      <ul>{renderTasks}</ul>
    </div>
  );
};

export default TaskList;
