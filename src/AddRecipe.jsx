import { useState } from "react";
function AddRecipe() {
  const [recipe, setRecipe] = useState({
    name: "",
    category: "Veg",
    subCategory: "Soup",
    image: "",
    ingredients: "",
    steps: "",
  });

  const handleChange = (e) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Recipe Saved Successfully!");

    console.log(recipe);
  };

  return (
    <div className="addRecipe">

      <h1>Add New Recipe</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Recipe Name"
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
          placeholder="Sub Category"
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
          placeholder="Ingredients (one per line)"
          value={recipe.ingredients}
          onChange={handleChange}
        />

        <textarea
          name="steps"
          placeholder="Preparation Steps (one per line)"
          value={recipe.steps}
          onChange={handleChange}
        />

        <button type="submit">
          Save Recipe
        </button>

      </form>

    </div>
  );
}

export default AddRecipe;