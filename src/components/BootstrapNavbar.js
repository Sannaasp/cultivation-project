import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useContext } from "react";
import SomeContext from "../SomeContext";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../css/NavBar.css";
import "../index.css";

function BootstrapNavbar() {
  const { theme, setTheme } = useContext(SomeContext);
  const [searchText, setSearchText] = useState("");
  const [vegetables, setVegetables] = useState(null);
  const [filteredVegetables, setFilteredVegetables] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  function clearSearchHistory() {
    setSearchText("");
    setFilteredVegetables(null);
  }

  function clickSearchResult() {
    closeMenu();
    clearSearchHistory();
  }
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      if (searchText) {
        search();
      }
    }
  }

  function search() {
    if (!vegetables) {
      setSearchText("");
    }

    const filtered = vegetables.filter(
      (vegetable) =>
        vegetable.name &&
        vegetable.name.toLowerCase().includes(searchText.toLowerCase())
    );

    if (filtered.length === 0) {
      alert("Ingen matchning hittades.");
      setSearchText("");
      return;
    }

    setFilteredVegetables(
      vegetables.filter((vegetable) => {
        if (
          searchText &&
          vegetable.name.toLowerCase().includes(searchText.toLowerCase())
        ) {
          return true;
        }
        return false;
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
    <Navbar bg="" expand="lg" className="navbar fixed-top">
      <Container fluid>
        <Link to="/">
          <img
            style={{ width: "100px", height: "50px" }}
            src="./images/odlingtest.jpg"
            alt="loggo"
          />
        </Link>
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          onClick={() => setMenuOpen(true)}
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={menuOpen}
        >
          <Offcanvas.Header closeButton onHide={closeMenu}>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <img
                style={{ width: "100px", height: "50px" }}
                src="./images/odlingtest.jpg"
                alt="loggo"
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={NavLink} to="/" onClick={closeMenu}>
                Hem
              </Nav.Link>
              <Nav.Link as={NavLink} to="/forum" onClick={closeMenu}>
                Forum
              </Nav.Link>
              <Nav.Link as={NavLink} to="/vegetables" onClick={closeMenu}>
                Grönsaker
              </Nav.Link>

              <NavDropdown title="Mer" id="offcanvasNavbarDropdown">
                <NavDropdown.Item>Ändra tema</NavDropdown.Item>

                <Button
                  className="BootstrapNavbar-theme"
                  variant="outline-secondary"
                  onClick={() => {
                    if (theme === "dark") {
                      document.body.style.backgroundColor = "#fffef8";
                      setTheme("light");
                    } else {
                      document.body.style.backgroundColor = "#C6B89E";
                      setTheme("dark");
                    }
                  }}
                >
                  {theme}
                </Button>
              </NavDropdown>
            </Nav>
            <div>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={searchText}
                  onKeyDown={handleKeyPress}
                  onChange={(event) => setSearchText(event.target.value)}
                />

                <Button
                  disabled={!searchText}
                  variant="outline-success"
                  onClick={search}
                >
                  Sök
                </Button>
              </Form>
              {filteredVegetables !== null && (
                <Link
                  to={`/VegView/${filteredVegetables[0].name}`}
                  onClick={clickSearchResult}
                >
                  {filteredVegetables !== null &&
                    filteredVegetables[0] !== null && (
                      <div>
                        <div className="BootstrapNavbar-result">
                          {filteredVegetables[0].name}
                        </div>
                      </div>
                    )}
                </Link>
              )}
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default BootstrapNavbar;
