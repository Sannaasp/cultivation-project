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
      <header className="App-header">
        <img className="App-img" src="./images/kanna.jpg" alt="kanna.jpg" />
        <div className="App-start">
          <p>Lär dig odla</p>
        </div>
        <h1 className="App-heading">Sannas odling</h1>
      </header>
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
