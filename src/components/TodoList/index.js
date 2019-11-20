import React, { useState, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

import Task from "../Task";
import TaskForm from "../TaskForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [saveData, getData, removeData] = useLocalStorage("todos", todos);

  useEffect(() => {
    if (getData() === null) {
      saveData(todos);
    } else setTodos(getData());
  }, []);

  useEffect(() => {
    saveData(todos);
  }, [todos, saveData]);

  const handleAddTask = newTodo => {
    // Check if todo do not already exist
    if (todos.find(t => t.name === newTodo.name) !== undefined) return;
    let newTodos = [...todos];
    newTodos.push(newTodo);
    setTodos(newTodos);
  };

  const handleRemoveTask = taskIndex => {
    let newTodos = [...todos];
    newTodos = newTodos.filter(t => t !== todos[taskIndex]);
    setTodos(newTodos);
  };

  const handleComplete = (taskIndex, bool) => {
    let newTask = todos[taskIndex];
    let newTodos = [...todos];
    newTask.isComplete = bool;
    newTodos[taskIndex] = newTask;
    setTodos(newTodos);
  };

  return (
    <>
      <div>
        <TaskForm addTask={handleAddTask} />
      </div>
      <div>
        <h1>Ma TodoList</h1>
        <ol>
          {todos.map((task, index) => (
            <Task
              key={task.name}
              index={index}
              task={task}
              removeTask={handleRemoveTask}
              handleComplete={handleComplete}
            />
          ))}
        </ol>
      </div>
      <button onClick={() => setTodos([])}>Clear list</button>
    </>
  );
};

export default TodoList;
