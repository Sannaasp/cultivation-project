import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/CategoryCard.css";
import axios from "axios";
import { Link } from "react-router-dom";
import "../index.css";

function CategoryCard() {
  const [vegetables, setVegetables] = useState(null);
  const [filteredVegetables, setFilteredVegetables] = useState("");
  const { category } = useParams();

  useEffect(() => {
    axios
      .get("/vegetables.json")
      .then((response) => setVegetables(response.data))
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    if (vegetables) {
      setFilteredVegetables(
        vegetables.filter((vegetable) => vegetable.category === category)
      );

      console.log(filteredVegetables);
    }
  }, [vegetables, category]);

  return (
    <>
      <h1 className="CategoryCard-title">{category}</h1>
      {filteredVegetables && (
        <div className="CategoryCard-vegBox">
          {filteredVegetables.map((vegetable) => (
            <li className="CategoryCard-vegBox" key={vegetable.id}>
              <div className="imgContainer">
                <img
                  className="imageCategory"
                  src={vegetable.img}
                  alt={vegetable.name}
                />
                <div className="CategoryCard-container">
                  <h1 className="CategoryCard-nameContainer">
                    {vegetable.name.charAt(0).toUpperCase() +
                      vegetable.name.slice(1)}
                  </h1>

                  <p className="Vegetable-shorttext">{vegetable.shorttext}</p>
                  <Link to={`/VegView/${vegetable.name}`}>
                    <button className="CategoryCard-button">Läs mer </button>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </div>
      )}
    </>
  );
}

export default CategoryCard;
