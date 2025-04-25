import React from "react";
import "./TaskList.css";

const TaskList = ({ tasks, toggleTask }) => {
  return (
    <div className="task-list">
      <h2>Incomplete Tasks</h2>
      {tasks.filter((task) => !task.completed).map((task) => (
        <div key={task._id} className="task">
          <span>{task.text}</span>
          <button onClick={() => toggleTask(task._id)}>Mark Completed</button>
        </div>
      ))}

      <h2>Completed Tasks</h2>
      {tasks.filter((task) => task.completed).map((task) => (
        <div key={task._id} className="task completed">
          <span>{task.text}</span>
          <button onClick={() => toggleTask(task._id)}>Undo</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
