import React from "react";

import Task from "./Task";

const TaskList = (props) => {
  
    return (
        <div className="task-list">
          {props.ourTasks.map((task) => (
            <Task 
              key={task.id}
              title={task.title}
            />
          ))}
        </div>
      
    );
}

export default TaskList;