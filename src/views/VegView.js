import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function VegView() {
  const [vegetables, setVegetables] = useState(null);
  const [filteredVegetables, setFilteredVegetables] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    axios
      .get("/vegetables.json")
      .then((response) => setVegetables(response.data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (vegetables) {
      setFilteredVegetables(
        vegetables.filter((vegetable) => vegetable.name === name)
      );

      console.log(filteredVegetables);
    }
  }, [vegetables, name]);
  console.log("Filtered vegetables:", filteredVegetables);

  return (
    <>
      <h1>Hej</h1>
      <div className="vegBox">
        {filteredVegetables.length > 0 && (
          <div key={filteredVegetables.id}>
            <div className="imgContainer">
              <img
                className="image"
                src={filteredVegetables[0].img}
                alt={filteredVegetables[0].name}
              />
            </div>
            <div className="nameContainer">{filteredVegetables[0].name}</div>
          </div>
        )}
      </div>
    </>
  );
}
export default VegView;
