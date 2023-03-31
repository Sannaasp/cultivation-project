import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../css/NavBar.css";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [searchText, setSearchText] = useState("");
  const [vegetables, setVegetables] = useState(null);
  const [filteredVegetables, setFilteredVegetables] = useState(null);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }
  function toggleIcon() {
    setShowIcon(!showIcon);
    if (showIcon) {
      setFilteredVegetables(null);
      setSearchText("");
    }
  }

  function search() {
    if (!vegetables) {
      setSearchText("");
    }

    setFilteredVegetables(
      vegetables.filter((vegetable) => {
        if (
          searchText &&
          vegetable.name.toLowerCase().includes(searchText.toLowerCase())
        )
          return true;

        if (
          category &&
          vegetable.category.toLowerCase() === category.toLowerCase()
        ) {
          return true;
        }
        return false;
        // if (!searchText) {
        //   return true;
        // }
        // return vegetable.name.toLowerCase().includes(searchText.toLowerCase());
      })
    );
  }

  useEffect(() => {
    axios
      .get("/vegetables.json")
      .then((response) => setVegetables(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Navbar />
      <nav className="navbar">
        <div className="hamburger-menu">
          <button onClick={toggleMenu}>
            <img src="./images/list.svg" alt="icon" />
          </button>
        </div>

        {showMenu && (
          <div className="menu">
            <ul>
              <li>
                <Link to="/">Hem</Link>
              </li>
              <li>
                <Link to="/about">Om oss</Link>
              </li>
              <li>
                <Link to="/vegetables">Grönsaker</Link>
              </li>
            </ul>
          </div>
        )}

        <i className="fa fa-bars"></i>
        <div className="searchBox">
          <div className="searchField">
            <div className="searchInput">
              {showIcon && (
                <input
                  id="searchfield"
                  type="text"
                  placeholder="Sök grönsaker..."
                  value={searchText}
                  onChange={(event) => setSearchText(event.target.value)}
                />
              )}
            </div>

            {/* <div v-if="searchText !== ''" id="linkdiv">
        <span @click="handleClick">
          <span v-if="notFound">
            <p>"{{ searchText }}" hittades inte.</p> */}

            {showIcon && <button onClick={search}>Sök</button>}
            <div className="icon">
              <img
                className="searchIcon"
                onClick={toggleIcon}
                src="./images/search.svg"
                alt="icon"
              />
            </div>
          </div>
          {/* <div v-if="vegetables !== null && vegetables[0] !== null">
          {{vegetables[0].name}}
        </div> */}
          {searchText !== "" && (
            <div>
              <span onClick={searchText}>
                <p>{searchText} hittades inte</p>

                {filteredVegetables !== null && (
                  <Link to={`/VegView/${filteredVegetables[0].name}`}>
                    {filteredVegetables !== null &&
                      filteredVegetables[0] !== null && (
                        <div className="result">
                          {filteredVegetables[0].name}
                        </div>
                      )}
                  </Link>
                )}
              </span>
            </div>
          )}
        </div>
        {/* <div v-if="vegetables !== null" v-for="vegetable in vegetables"></div> */}
        {/* {vegetables !== null &&
          filteredVegetables.map((vegetable) => (
            <div key={vegetable.id}>{vegetable.name}</div>
          ))} */}
      </nav>
      <header className="header">
        <img className="App-img" src="./images/kanna.jpg" alt="kanna.jpg" />
        <div className="App-start">
          <p>Lär dig odla</p>
        </div>
        <h1 className="App-heading">Sannas odling</h1>
      </header>
    </>
  );
}
export default NavBar;
