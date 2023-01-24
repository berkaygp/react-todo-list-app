import React from "react";

import Task from "./Task";

const TaskList = (props) => {
  
    return (
        <div className="task-list">
          <Task 
            title={props.ourTasks[0].title}
          />
          <Task 
            title={props.ourTasks[1].title}
          />
          <Task 
            title={props.ourTasks[2].title}
          />
        </div>
      
    );
}

export default TaskList;