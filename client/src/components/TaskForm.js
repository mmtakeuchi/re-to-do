import React, { useState } from "react";

const TaskForm = (props) => {
  const [text, setText] = useState(props.task ? props.task : "");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    props.handleSubmit(text);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="task"
          value={text}
          onChange={handleInputChange}
        />
        <button type="submit">{props.buttonLabel}</button>
      </form>
    </div>
  );
};

export default TaskForm;
