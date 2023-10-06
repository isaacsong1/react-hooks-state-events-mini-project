import React from "react";
import Task from "./Task";

function TaskList({tasks}) {
  return (
    <div className="tasks">
      <ul>
        {tasks.map(task => (
          <Task key={task.text} category={task.category} text={task.text} />
        )
        )}
      </ul>
    </div>
  );
}

export default TaskList;
