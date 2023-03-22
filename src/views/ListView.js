import { useEffect, useState } from "react";

const [vegetables, setVegetables] = useState(null);
useEffect(() => {
  fetch("https://avancera.app/cities/")
    .then((response) => response.json())
    .then((result) => {
      setVegetables(result);
    });

  return (
    vegetables && (
      <ol>
        {vegetables.map((vegetable) => (
          <li key={vegetable.id}>{vegetable.name}</li>
        ))}
      </ol>
    )
  );
}, []);
