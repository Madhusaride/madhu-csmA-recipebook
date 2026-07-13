import { useNavigate } from "react-router-dom";
import "./RecipeCard.css";

function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  return (
    <div
      className="recipe-card"
      onClick={() => navigate(`/recipe/${recipe.id}`)}
    >
      <img src={recipe.image} alt={recipe.name} />

      <div className="card-body">
        <h3>{recipe.name}</h3>
        <p>{recipe.category}</p>
        <p>{recipe.subCategory}</p>
      </div>
    </div>
  );
}
export default RecipeCard;