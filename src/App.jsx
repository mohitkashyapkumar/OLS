import React, { useState } from "react";
import Header from "./components/header";
import ToDoList from "./components/ToDoList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const newTask = { id: Date.now(), text: task, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, text: newText } : task));
  };

  return (
    <div className="border-4 border-green-600">
      <Header  onAddTask={addTask} />
      <ToDoList 
        tasks={tasks} 
        onToggleComplete={toggleComplete} 
        onDeleteTask={deleteTask}
        onEditTask={editTask}
      />
      <h1>Created By Mohit Kumar</h1>
    </div>
    
  );
}

export default App;
