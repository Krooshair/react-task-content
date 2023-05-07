import { createContext } from "react";
import { useState, useEffect } from "react";
import { tasks as data } from "../components/TaskList/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(taskName, taskDescription) {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        name: taskName,
        description: taskDescription,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
