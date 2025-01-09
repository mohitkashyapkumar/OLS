import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ tasks, onToggleComplete, onDeleteTask, onEditTask }) {
  return (
    <ul>
      {tasks.map(task => (
        <ToDoItem 
          key={task.id} 
          task={task} 
          onToggleComplete={onToggleComplete} 
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
