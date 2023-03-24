import { Link, Outlet } from "react-router-dom";
function Root() {
  return (
    <>
      <nav>
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
      </nav>
      <Outlet />
    </>
  );
}
export default Root;
