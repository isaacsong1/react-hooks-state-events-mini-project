import React from "react";

function CategoryFilter({categories, selectedCategory, onSelectedCategory}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => 
        <button 
          className={category === selectedCategory ? "selected" : null}
          onClick={() => onSelectedCategory(category)}
          key={category}>
        {category}
        </button>)}
    </div>
  );
}

export default CategoryFilter;
