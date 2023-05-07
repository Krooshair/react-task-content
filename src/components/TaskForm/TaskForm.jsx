import { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import "./TaskForm.css";

function TaskForm() {

  const { createTask } = useContext(TaskContext)

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(name, description);
    setName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-task">
      <div className="name-task">
        <label htmlFor="name">Nombre de tarea</label>
        <input
          name="name"
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          autoFocus
        />
      </div>
      <div className="description-task">
        <label htmlFor="description">Descripcion de tarea</label>
        <textarea
          name="description"
          rows="5" 
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        />
      </div>
      <div className="button-task">
        <button>Guardar</button>
      </div>
    </form>
  );
}

export default TaskForm;
