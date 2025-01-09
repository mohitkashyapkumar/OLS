import React, { useState } from "react";

function ToDoItem({ task, onToggleComplete, onDeleteTask, onEditTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    onEditTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <li className="bg-white" style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span>{task.text}</span>
      )}
      <button className="bg-amber-600" onClick={() => onToggleComplete(task.id)}>
        {task.completed ? "Undo" : "Complete"}
      </button>
      <button className="bg-red-600" onClick={() => onDeleteTask(task.id)}>Delete</button>
      {isEditing ? (
        <button onClick={handleEdit}>Save</button>
      ) : (
        <button className="bg-green-600" onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </li>
  );
}

export default ToDoItem;
