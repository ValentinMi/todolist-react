import React, { useState, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import Task from "../Task";
import TaskForm from "../TaskForm";

const TodoList = () => {
  const [tasks, setTasks] = useState([{ name: "Faire les courses" }]);
  const [saveData, getData, removeData] = useLocalStorage("todos", tasks);

  useEffect(() => {
    if (getData() === null) {
      saveData(tasks);
    } else setTasks(getData);
  }, []);

  useEffect(() => {
    saveData(tasks);
  }, [tasks, saveData]);

  const handleAddTask = newTask => {
    let newTasks = [...tasks];
    newTasks.push(newTask);
    setTasks(newTasks);
  };

  const handleRemoveTask = taskIndex => {
    let newTasks = [...tasks];
    newTasks = newTasks.filter(t => t !== tasks[taskIndex]);
    setTasks(newTasks);
  };

  return (
    <>
      <div>
        <TaskForm addTask={handleAddTask} />
      </div>
      <div>
        <h1>Ma TodoList</h1>
        <ol>
          {tasks.map((task, index) => (
            <Task
              key={task.name}
              index={index}
              task={task}
              removeTask={handleRemoveTask}
            />
          ))}
        </ol>
      </div>
    </>
  );
};

export default TodoList;
