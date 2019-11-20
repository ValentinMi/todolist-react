import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Task = ({ index, task, removeTask, handleComplete }) => {
  const [isComplete, setIsComplete] = useState(task.isComplete);

  useEffect(() => {
    handleComplete(index, isComplete);
  }, [isComplete]);

  return (
    <li>
      <span style={{ marginRight: "10px" }} className="task">
        {task.name}
      </span>
      <input
        type="checkbox"
        defaultChecked={isComplete}
        onClick={() => setIsComplete(!isComplete)}
        className="status"
      ></input>
      <button
        style={{ background: "red", marginLeft: "10px" }}
        onClick={() => removeTask(index)}
      >
        Delete
      </button>
    </li>
  );
};

Task.propTypes = {
  index: PropTypes.number.isRequired,
  task: PropTypes.object.isRequired,
  removeTask: PropTypes.func.isRequired
};

Task.defaultProps = {
  task: {
    name: "",
    isComplete: false
  }
};

export default Task;
