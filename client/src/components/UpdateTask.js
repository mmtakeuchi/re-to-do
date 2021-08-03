import React from "react";
import TaskForm from "./TaskForm";
import axios from "axios";

const UpdateTask = (props) => {
  const handleSubmit = async (task) => {
    await axios
      .put(`/api/tasks/${props.task._id}`, { task })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <TaskForm
        task={props.task.task}
        handleSubmit={handleSubmit}
        buttonLabel="Update Task"
      />
    </div>
  );
};

export default UpdateTask;
