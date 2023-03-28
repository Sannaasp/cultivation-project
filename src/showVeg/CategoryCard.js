import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/CategoryCard.css";
import axios from "axios";

function CategoryCard() {
  const [vegetables, setVegetables] = useState(null);
  const [filteredVegetables, setFilteredVegetables] = useState("");
  const [selectedVeg, setSelectedVeg] = useState("");
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [showModal, setShowModal] = useState(false);

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

  function openModal(vegetable, modalInfo) {
    setSelectedVeg(vegetable);
    setHeading(modalInfo.heading);
    setDescription(modalInfo.description);
    setShowModal(true);
  }

  function closeModal(vegetable) {
    setSelectedVeg(null);
  }

  return (
    <div className="App">
      <h1>{category}</h1>
      {filteredVegetables && (
        <ol className="vegList">
          <div className="vegBox">
            {filteredVegetables.map((vegetable) => (
              <li key={vegetable.id}>
                <div className="imgContainer">
                  <img
                    className="image"
                    src={vegetable.img}
                    alt={vegetable.name}
                  />
                </div>
                <div className="nameContainer">{vegetable.name}</div>
                <button
                  onClick={() =>
                    openModal(vegetable, {
                      heading: vegetable.name,
                      description: vegetable.placement,
                    })
                  }
                >
                  Läs mer
                </button>
                <p>{vegetable.heading}</p>
                <p>{vegetable.description}</p>
              </li>
            ))}
          </div>
        </ol>
      )}
    </div>
  );
}

export default CategoryCard;
