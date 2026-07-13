import { useState } from "react";
import "./EditRecipe.css";

function EditRecipe() {
  const [recipe, setRecipe] = useState({
    name: "Paneer Butter Masala",
    category: "Veg",
    subCategory: "Main Course",
    image: "",
    ingredients: "Paneer\nButter\nTomato",
    steps: "Heat butter\nAdd onion\nAdd paneer",
  });

  const handleChange = (e) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Recipe Updated Successfully!");

    console.log(recipe);
  };

  return (
    <div className="editRecipe">
      <h1>Edit Recipe</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          value={recipe.name}
          onChange={handleChange}
        />

        <select
          name="category"
          value={recipe.category}
          onChange={handleChange}
        >
          <option>Veg</option>
          <option>Non Veg</option>
          <option>Desserts</option>
          <option>Milkshakes</option>
        </select>

        <input
          type="text"
          name="subCategory"
          value={recipe.subCategory}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={recipe.image}
          onChange={handleChange}
        />

        <textarea
          name="ingredients"
          value={recipe.ingredients}
          onChange={handleChange}
        />

        <textarea
          name="steps"
          value={recipe.steps}
          onChange={handleChange}
        />

        <button type="submit">
          Update Recipe
        </button>

      </form>
    </div>
  );
}

export default EditRecipe;