import React, { useState } from "react";

function Header({ onAddTask }) {
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input.trim()) {
      onAddTask(input);
      setInput("");
    }
  };

  return (
    <header>
      <h1 className="text-2xl  pb-10">To-Do List App</h1>
      <div >
        <input
          type="text"
          placeholder="Add a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="border-2 rounded bg-red-600 " onClick={handleAddTask}>Add</button>
      </div>
    </header>
  );
}

export default Header;
