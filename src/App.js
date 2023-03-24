import "./css/App.css";
import "./css/NavBar.css";
import "./css/Footer.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import {
  createHashRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import About from "./components/About";
import Vegetables from "./components/Vegetables";
import Home from "./components/Home";
import Root from "./Root";

function App() {
  return (
    <div className="App">
      <NavBar />
      <RouterProvider router={router} />

      <Footer />
    </div>
  );
}

const router = createHashRouter([
  {
    children: [
      { element: <Home />, path: "/" },
      { element: <About />, path: "/about" },
      { element: <Vegetables />, path: "/vegetables" },
    ],
    element: <Root />,
  },
]);

export default App;
