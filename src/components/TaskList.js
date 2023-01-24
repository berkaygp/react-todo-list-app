import React from "react";

import Task from "./Task";

const TaskList = (props) => {

  let tasksContent = <p>No tasks found!</p>;
  if (props.ourTasks.length > 0) {
    tasksContent = props.ourTasks.map((task) => (
      <Task 
        key={task.id}
        title={task.title}
      />
    ))
  }
  
    return (
        <div className="task-list">
          {tasksContent}
        </div>
      
    );
}

export default TaskList;