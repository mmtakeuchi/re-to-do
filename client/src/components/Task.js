import React, { useState } from "react";
import axios from "axios";
import UpdateTask from "./UpdateTask";

const Task = ({ task }) => {
  const [editing, setEditing] = useState(false);

  const updateTask = () => {
    setEditing(!editing);
  };

  const completeTask = async () => {
    const completedTask = await axios
      .delete(`/api/tasks/${task._id}`)
      .then((res) => console.log(res.data.success))
      .catch((err) => console.log(err));
  };

  return (
    <li key={task._id}>
      {editing ? (
        <React.Fragment>
          <UpdateTask task={task} />
          <button onClick={updateTask}>Cancel</button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <span>{task.task}</span>
          <button onClick={updateTask}>Edit</button>
          <button onClick={completeTask}>Completed</button>
        </React.Fragment>
      )}
    </li>
  );
};

export default Task;
