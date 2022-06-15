import React from "react";
import { FaTimes } from "react-icons/fa";

function Task({ task, onDelete, onToggle }) {
  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`}>
      <h3 onDoubleClick={() => onToggle(task.id)}>
        {task.text}{" "}
        <FaTimes
          onClick={() => onDelete(task.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
}

export default Task;
