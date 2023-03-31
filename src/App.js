import "./css/App.css";
import "./css/NavBar.css";
import "./css/Footer.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Vegetables from "./components/Vegetables";
import HomeView from "./views/HomeView";
import CategoryCard from "./components/CategoryCard";
import VegView from "./views/VegView";

function Root() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}
function App() {
  const router = createHashRouter([
    {
      children: [
        { element: <HomeView />, path: "/" },
        { element: <About />, path: "/about" },
        { element: <Vegetables />, path: "/vegetables" },
        { element: <CategoryCard />, path: "/CategoryCard/:category" },
        { element: <VegView />, path: "/VegView/:name" },
      ],
      element: <Root />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
