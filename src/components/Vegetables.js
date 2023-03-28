import { useState, useEffect } from "react";
import axios from "axios";
import "../css/Vegetables.css";
function App() {
  const [vegetables, setVegetables] = useState(null);

  useEffect(() => {
    axios
      .get("/vegetables.json")
      .then((response) => setVegetables(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      {vegetables && (
        <ol className="vegList">
          <div className="vegBox">
            {vegetables.map((vegetable) => (
              <li key={vegetable.id}>
                <div>
                  <img
                    className="image"
                    src={vegetable.img}
                    alt={vegetable.name}
                  />
                  <div className="nameContainer">{vegetable.name}</div>
                </div>
              </li>
            ))}
          </div>
        </ol>
      )}
    </div>
  );
}

export default App;
