import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <img src="./images/list.svg" alt="icon" />
          <li>
            <Link to="/">Hem</Link>
          </li>
          <li>
            <Link to="/about">Om oss</Link>
          </li>
          <li>
            <Link to="/vegetables">Grönsaker</Link>
          </li>
          <img src="./images/search.svg" alt="icon" />
        </ul>
      </nav>
    </>
  );
}
export default NavBar;
