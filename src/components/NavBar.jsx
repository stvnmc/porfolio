import { Link } from "react-router-dom";
import perfil from "../img/perfil.png";

function NavBar() {
  const navLinks = [
    { title: "Home", path: "/porfolio" },
    { title: "All Projects", path: "/porfolio/projectos" },
  ];

  return (
    <div className="navbar">
      <ul>
        {navLinks.map((navLink) => (
          <li key={navLink.path}>
            <Link to={navLink.path}>{navLink.title}</Link>
          </li>
        ))}
      </ul>
      <div className="perfil">
        <img src={perfil} />
      </div>
    </div>
  );
}

export default NavBar;
