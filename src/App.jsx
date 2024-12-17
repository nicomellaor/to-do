import './App.css';
import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";
import ThemeSwitch from './components/ThemeSwitch';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const changeTheme = () => {
    // si (theme="light") es true, cambia a dark
    // si es false, se mantiene "light"
    const newTheme = (theme === "light") ? "dark" : "light"; 
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleDelete = (id) => {
    let newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  };

  const handleEdit = (id, newText) => {
    let tasksModified = tasks.map(task => {
      if (task.id === id){
        return {...task, text: newText}
      }
      return task;
    })
    setTasks(tasksModified);
  };

  // Aplica el atributo dark-theme en la raíz del documento HTML
  useEffect(()=>{
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <h1>To-Do List</h1>
      <ThemeSwitch theme={theme} changeTheme={changeTheme}/>
      <TaskInput onAdd={addTask}/>
      <h2>Tareas Pendientes</h2>
      <TaskList tasks={tasks} onDelete={handleDelete} onEdit={handleEdit}/>
    </>
  )
}

export default App
