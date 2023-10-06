import React from "react";
import Task from "./Task";

function TaskList({tasks, onDelete}) {
  return (
    <div className="tasks">
      <ul>
        {tasks.map(task => (
          <Task key={task.text} category={task.category} text={task.text} onDelete={onDelete} />
        )
        )}
      </ul>
    </div>
  );
}

export default TaskList;
