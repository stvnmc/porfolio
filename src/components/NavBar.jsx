import { Link } from "react-router-dom";

function NavBar() {
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Projects", path: "/projects" },
    { title: "Videos", path: "/videos" },
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
    </div>
  );
}

export default NavBar;
