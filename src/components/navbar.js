import { Link, Outlet } from "react-router-dom";
function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <img src="./images/list.svg" alt="icon" />
        <li>
          {/* <Link to="/vegetables">Grönsaker</Link> */}
          <li>Hem</li>
        </li>
        <li>Odling</li>
        <img src="./images/search.svg" alt="icon" />
      </ul>
    </nav>
  );
}
export default NavBar;

// import { Link, Outlet } from "react-router-dom";

// function NavBar() {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Hem</Link>
//           </li>
//           <li>
//             <Link to="/about">Om oss</Link>
//           </li>
//           <li>
//             <Link to="/vegetables">Grönsaker</Link>
//           </li>
//         </ul>
//       </nav>
//       <Outlet />
//     </>
//   );
// }
// export default NavBar;
