import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import TaskList from "./components/TaskList";
import CreateTask from "./components/CreateTask";

const App = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => fetchTasks(), []);

  const fetchTasks = async (req, res) => {
    const tasks = await axios.get("/api/tasks").then((task) => task.data);

    if (tasks) {
      setTasks(tasks);
    }
  };

  const addNewTask = (e) => {
    console.log(e.target.newTask.value);
    // const newTask = e.target.newTask.value;
    // setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <div>To-Do List</div>
      <TaskList tasks={tasks} />
      <CreateTask addTask={addNewTask} />
    </div>
  );
};

export default App;
