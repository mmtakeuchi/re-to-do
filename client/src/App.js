import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import TaskList from "./components/TaskList";
import CreateTask from "./components/CreateTask";

const App = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => fetchTasks(), [tasks]);

  const fetchTasks = async (req, res) => {
    const tasks = await axios.get("/api/tasks").then((task) => task.data);

    if (tasks) {
      setTasks(tasks);
    }
  };

  return (
    <div className="App">
      <div>To-Do List</div>
      <TaskList tasks={tasks} />
      <CreateTask tasks={tasks} />
    </div>
  );
};

export default App;
