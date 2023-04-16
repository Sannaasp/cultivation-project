import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/Vegetables.css";

interface Vegetable {
  id: number;
  name: string;
  img: string;
}

function Vegetables() {
  const [vegetables, setVegetables] = useState<Vegetable[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Vegetable[]>("/vegetables.json");
        setVegetables(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {vegetables.length > 0 ? (
        <ol className="vegList">
          {vegetables.map((vegetable) => (
            <li key={vegetable.id}>
              <div className="Vegetables-container">
                <Link to={`/VegView/${vegetable.name}`}>
                  <img
                    className="Vegetables-image"
                    src={vegetable.img}
                    alt={vegetable.name}
                  />

                  <div className="Vegetables-title">
                    <button className="button">Läs mer</button>
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default Vegetables;
