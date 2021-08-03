import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const TaskForm = (props) => {
  const history = useHistory();
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    console.log(text);
    props.handleSubmit(text);
    history.push("/");
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
