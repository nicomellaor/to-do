import './App.css';
import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  return (
    <>
      <h1>To-Do List</h1>
      <TaskInput onAdd={addTask}/>
      <h2>Tareas Pendientes</h2>
      <TaskList tasks={tasks}/>
    </>
  )
}

export default App
