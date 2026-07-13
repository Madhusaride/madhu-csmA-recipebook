import "./DeleteRecipe.css";

function DeleteRecipe() {
  const handleDelete = () => {
    alert("Recipe Deleted Successfully!");
  };

  return (
    <div className="deleteRecipe">

      <h1>Delete Recipe</h1>

      <div className="deleteBox">

        <h2>🍛 Paneer Butter Masala</h2>

        <p>
          Are you sure you want to delete this recipe?
        </p>

        <div className="buttons">

          <button className="cancelBtn">
            Cancel
          </button>

          <button
            className="deleteBtn"
            onClick={handleDelete}
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default DeleteRecipe;