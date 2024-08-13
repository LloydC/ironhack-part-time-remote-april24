import { useState } from "react";
 
function Task({task, toggleTaskDone}) { 
    // const {task, toggleTaskDone} = props;
    const {_id, name, description, isDone} = task;
//   const toggleTask = () => setTaskCompleted(!taskCompleted);
 
  return (
    <div className="task-card">
      <div className="task-card-half">
        <h1>{name}</h1>
        {isDone 
          ? <span>DONE </span>
          : <span>PENDING ⌛</span>
        }
 
        <h2>Task Description</h2>
        <p>{description}</p>
 
        <button className="add" onClick={()=> toggleTaskDone(_id)}>
          {isDone 
            ? <span>UNDO </span> 
            : <span>✔️</span>
          }
        </button>
      </div>
    </div>
  );
}
 
export default Task;