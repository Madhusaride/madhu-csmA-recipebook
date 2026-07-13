import { useNavigate } from "react-router-dom";
import { useState } from "react";
import recipes from "./recipes.js";
import RecipeCard from "./RecipeCard.jsx";
import "./Recipes.css";

function Recipes() {
  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

const categories = {
  "Veg": ["All", "Soup", "Starter", "Main Course", "Side Dish"],

  "Non Veg": ["All", "Soup", "Starter", "Main Course", "Side Dish"],

  "Desserts": ["All", "Indian Sweet", "Cake", "Ice Cream", "Bakery"],

  "Milkshakes": ["All", "Fruit", "Chocolate", "Berry", "Special"],
};

const filteredRecipes = recipes.filter((recipe) => {
  const filterMatch =
    selectedFilter === "All" ||
    recipe.category === selectedFilter;

  const categoryMatch =
    selectedCategory === "All" ||
    recipe.subCategory === selectedCategory;

  const searchMatch =
    recipe.name.toLowerCase().includes(search.toLowerCase()) ||
    recipe.subCategory.toLowerCase().includes(search.toLowerCase());

  return filterMatch && categoryMatch && searchMatch;
});

  return (
    <div className="recipes">
      {/* Top Navigation */}
      <div className="topnav">
        <div className="logo">
          🍴 Personal Recipe Book
        </div>

        <input
          className="search"
          type="text"
          placeholder="🔍 Search Recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
/>

        <div className="filter">
          <button
            className="filterBtn"
            onClick={() => setShowFilter(!showFilter)}
          >
            Filters ▼
          </button>

          {showFilter && (
              <div className="filterBox">
  <p onClick={() => {
    setSelectedFilter("Veg");
    setSelectedCategory("All");
    setShowFilter(false);
  }}>
    🥗 Veg
  </p>

  <p onClick={() => {
    setSelectedFilter("Non Veg");
    setSelectedCategory("All");
    setShowFilter(false);
  }}>
    🍗 Non Veg
  </p>

  <p onClick={() => {
    setSelectedFilter("Desserts");
    setSelectedCategory("All");
    setShowFilter(false);
  }}>
    🍰 Desserts
  </p>

  <p onClick={() => {
    setSelectedFilter("Milkshakes");
    setSelectedCategory("All");
    setShowFilter(false);
  }}>
    🥤 Milkshakes
  </p>

  <p onClick={() => {
    setSelectedFilter("All");
    setSelectedCategory("All");
    setShowFilter(false);
  }}>
    🍽️ All Recipes
  </p>
</div>
          )}
        </div>
      </div>

      {/* Main Layout */}

      {selectedFilter !== "All" && (
  <div className="categoryBar">
    {categories[selectedFilter].map((item) => (
      <button
        key={item}
        className={
          selectedCategory === item ? "activeCategory" : "categoryBtn"
        }
        onClick={() => setSelectedCategory(item)}
      >
        {item}
      </button>
    ))}
  </div>
)}
      <div className="main">

        {/* Sidebar */}
        <div className="sidenav">
          <div className="homeIcon">🏠</div>

          <p onClick={() => navigate("/add")}>
  ➕ Add Recipe
</p>
          <p onClick={() => navigate("/edit")}>
  ✏️ Edit Recipe
</p>
         <p onClick={() => navigate("/delete")}>
  🗑️ Delete Recipe
</p>
          
        </div>

        {/* Recipe Cards */}
        <div className="content">
          {filteredRecipes.map((recipe) => (
          <RecipeCard
          key={recipe.id}
          recipe={recipe}
          />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Recipes;
