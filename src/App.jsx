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
    // Operación Ternaria
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
    let updatedTasks = tasks.map(task => {
      if (task.id === id){
        return {...task, text: newText}
      }
      return task;
    })
    setTasks(updatedTasks);
  };

  const handleCompletion = (id) => {
    let updatedTasks = tasks.map(task => {
      if (task.id === id){
        return {...task, completed: !task.completed}
      }
      return task;
    })
    setTasks(updatedTasks);
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
      <TaskList tasks={tasks} onDelete={handleDelete} onEdit={handleEdit} onCompletion={handleCompletion}/>
    </>
  )
}

export default App
