import { useState, useEffect } from "react";
function App() {
  const [vegetables, setVegetables] = useState(null);
  useEffect(() => {
    fetch("/vegetables.json")
      .then((response) => response.json())
      .then((result) => {
        setVegetables(result);
      });
  }, []);

  return (
    <div className="App">
      {vegetables && (
        <ol className="vegList">
          {vegetables.map((vegetable) => (
            <li key={vegetable.id}>{vegetable.name}</li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default App;
