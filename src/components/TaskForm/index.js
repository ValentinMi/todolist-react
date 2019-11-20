import React, { useState, memo } from "react";
import "./index.css";

const TaskForm = memo(({ addTask }) => {
  const [form, setForm] = useState({ name: null });
  const [error, setError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (form.name === null || form.name === "") {
      setError("Empty field");
    } else addTask(form);
  };

  const handleChange = e => {
    setError(false);
    setForm({ ...form, name: e.target.value });
  };

  return (
    <form className="task-form" autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input onChange={handleChange} name="name" type="text" />
      {error && <span style={{ color: "red" }}>{error}</span>}
      <button type="submit">Ajouter</button>
    </form>
  );
});

export default TaskForm;
