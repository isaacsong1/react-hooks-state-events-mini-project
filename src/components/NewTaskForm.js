import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");
  
  const handleSubmit = e => {
    e.preventDefault();
    onTaskFormSubmit({text, category});
    setText("");
    setCategory("Code");
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={e => setText(e.target.value)} />
      </label>
      <label>
        Category
        <select onChange={e => setCategory(e.target.value)} name="category">
          {categories.map(category => category === "All" ? null : <option key={category} >{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
