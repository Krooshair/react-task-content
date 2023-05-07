import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import "./TaskCard.css";

function TaskCard({ task }) {

  const { deleteTask } = useContext(TaskContext)

  return (
    <div className="container-task">
      <h1 className="title">{task.name}</h1>
      <p className="description">{task.description}</p>
      <div className="container-button">
        <button>Editar</button>
        <button onClick={() => deleteTask(task.id)}>Eliminar</button>
      </div>
    </div>
  );
}

export default TaskCard;
