import React from "react";

import Header from "./components/Header";
import SubmitForm from "./components/SubmitForm";
import TaskList from "./components/TaskList";
import './App.css';

const App = () => {
  const tasks = [
    {
      id: 't1',
      title: 'task 1'
    },
    {
      id: 't2',
      title: 'task 2'
    },
    {
      id: 't3',
      title: 'task 3'
    },
  ];

  const saveTaskDataHandler = (enteredTaskData) => {
    const taskData = {
      ...enteredTaskData,
      id: Math.random().toString()
    }
    console.log(taskData);
  };

  return (
    <div className="app">
      <Header />
      <SubmitForm onSaveTaskData={saveTaskDataHandler} />
      <TaskList ourTasks={tasks} />
    </div>
  );
}

export default App;
