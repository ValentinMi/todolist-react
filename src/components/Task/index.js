import React, { useState } from "react";

const Task = ({ index, task, removeTask }) => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <li>
      <span style={{ marginRight: "10px" }} className="task">
        {task.name}
      </span>
      <button onClick={() => setIsComplete(!isComplete)} className="status">
        {isComplete ? "V" : "..."}
      </button>
      <button
        style={{ background: "red", marginLeft: "10px" }}
        onClick={() => removeTask(index)}
      >
        Delete
      </button>
    </li>
  );
};

export default Task;
