import "./css/App.css";
import navbar from "./components/navbar";
import footer from "./components/footer";
// import {
//   createHashRouter,
//   Link,
//   Outlet,
//   RouterProvider,
// } from "react-router-dom";

// App.vue
// src={logo} = v-bind
// {logo} = textinterpolering (enkla måsvingar)
// className = class
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <h1 className="App-heading">Sannas odling</h1>
      </header>
    </div>
  );
}
export default App;
// import { useEffect, useState } from "react";

// const [vegetables, setVegetables] = useState(null);
// useEffect(() => {
//   fetch("https://avancera.app/cities/")
//     .then((response) => response.json())
//     .then((result) => {
//       setVegetables(result);
//     });

//   return (
//     vegetables && (
//       <ol>
//         {vegetables.map((vegetable) => (
//           <li key={vegetable.id}>{vegetable.name}</li>
//         ))}
//       </ol>
//     )
//   );
// }, []);
