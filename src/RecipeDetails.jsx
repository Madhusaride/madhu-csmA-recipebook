import { useParams, useNavigate } from "react-router-dom";
import recipes from "./recipes.js";
import "./RecipeDetails.css";

function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = recipes.find((item) => item.id === Number(id));

  if (!recipe) {
    return <h2>Recipe Not Found</h2>;
  }

  return (
    <div className="details-container">

      <button className="back-btn" onClick={() => navigate("/recipes")}>
        ⬅ Back
      </button>

      <img
        src={recipe.image}
        alt={recipe.name}
        className="details-image"
      />

      <h1>{recipe.name}</h1>

      <h3>{recipe.category} | {recipe.subCategory}</h3>

      <div className="details-box">

        <div className="ingredients">
          <h2>🥗 Ingredients</h2>

          <ul>
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="steps">
          <h2>👨‍🍳 Preparation</h2>

          <ol>
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

      </div>

    </div>
  );
}

export default RecipeDetails;