import React from "react";
import TaskList from "./components/TaskList/TaskList";
import TaskForm from "./components/TaskForm/TaskForm";
import "./App.css";

function App() {
  return (
    <div className="app">
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
