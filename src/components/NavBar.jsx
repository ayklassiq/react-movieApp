// import { Link } from "react-router-dom";

// function NavBar() {
//   return (
//     <nav>
//       <div className="navbar">
//         <Link to="/" className="nav-link">
//           Home
//         </Link>
//         <Link to="/favorites" className="nav-link">
//           Home
//         </Link>
//       </div>
//     </nav>
//   );
// }
import { Link } from "react-router-dom";
import "../css/NavBar.css";
function NavBar() {
  return (
    <nav>
      <div className="navbar">
        <div className="navbar-brand">
          <Link to="/">Movie App</Link>
        </div>
        <div className="navbar-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/favorites" className="nav-link">
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
