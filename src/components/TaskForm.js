import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState(""); // Define state for task input

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return; // Prevent empty tasks

    addTask(taskText); // Call the function passed from parent
    setTaskText(""); // Clear input after adding
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter a task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
