import TaskCard from "../TaskCard/TaskCard";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import "./TaskList.css";

function TaskList() {

  const { tasks } = useContext(TaskContext)

  if (tasks.length === 0) {
    return <h1 className="no-task">No hay tareas</h1>;
  }

  return (
    <div className="container-list">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id}/>
      ))}
    </div>
  );
}

export default TaskList;
