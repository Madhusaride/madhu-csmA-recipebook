import { useNavigate } from "react-router-dom";
import "./Home.css";
function Home() {
  const navigate=useNavigate();
  return (
    <div className="home">

      <h1>🍕 🍔 🥗 🍜</h1><br/>

      <h1 className="rep">Personal Recipe Book</h1><br/>

      <p>
        Our Recipes, Our Memories
      </p><br/>

      <button className="Home1" onClick={()=>navigate("/recipes")}>
        Let's see...
      </button>

    </div>
  );
}
export default Home;