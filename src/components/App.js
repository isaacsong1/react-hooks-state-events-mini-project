import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [taskList, setTaskList] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDelete = (deletedText) => {
    setTaskList(currentTaskList => currentTaskList.filter(task => (
      task.text !== deletedText
    )))
  }

  const handleSelectedCategory = (category) => {
    setSelectedCategory(category);
  }

  const filteredTasks = taskList.filter(task => selectedCategory === "All" || task.category === selectedCategory)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} onSelectedCategory={handleSelectedCategory} />
      <NewTaskForm />
      <TaskList tasks={filteredTasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
