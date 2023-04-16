import "./css/App.css";
import "./css/NavBar.css";
import "./css/Footer.css";
import Footer from "./components/Footer";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import Forum from "./components/Forum";
import Vegetables from "./components/Vegetables.tsx";
import HomeView from "./views/HomeView";
import CategoryCard from "./components/CategoryCard";
import VegView from "./views/VegView";
import BootstrapNavbar from "./components/BootstrapNavbar";
import "./index.css";
import SomeContext from "./SomeContext";
import React, { useState } from "react";

function Root() {
  return (
    <div className="App">
      <BootstrapNavbar />
      <Outlet />
      <Footer />
    </div>
  );
}
function App() {
  const [addComment, setAddComment] = useState([]);
  const [removeComment, setRemoveComment] = useState([]);
  const [theme, setTheme] = useState("dark");
  const router = createHashRouter([
    {
      children: [
        { element: <HomeView />, path: "/" },
        { element: <Forum />, path: "/forum" },
        { element: <Vegetables />, path: "/vegetables" },
        { element: <CategoryCard />, path: "/CategoryCard/:category" },
        { element: <VegView />, path: "/VegView/:name" },
      ],
      element: <Root />,
    },
  ]);
  return (
    <SomeContext.Provider
      value={{
        addComment,
        setAddComment,
        removeComment,
        setRemoveComment,
        theme,
        setTheme,
      }}
    >
      <RouterProvider router={router} />{" "}
    </SomeContext.Provider>
  );
}

export default App;
