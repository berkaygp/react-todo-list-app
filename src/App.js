import React, { useState } from "react";

import Header from "./components/Header";
import SubmitForm from "./components/SubmitForm";
import TaskList from "./components/TaskList";
import './App.css';

const DUMMY_TASKS = [
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

const App = () => {
  const [tasks, setTasks] = useState(DUMMY_TASKS);

  const addNewTask = (task) => {
    setTasks(prevTasks => {
      return [task, ...prevTasks];
    });
  };

  const saveTaskDataHandler = (enteredTaskData) => {
    const taskData = {
      ...enteredTaskData,
      id: Math.random().toString()
    }
    addNewTask(taskData);
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
