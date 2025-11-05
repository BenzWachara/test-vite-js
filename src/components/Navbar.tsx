import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        display: "flex",
      }}
    >
      <ul
        style={{
          display: "flex",
          gap: "20px",
          listStyle: "none",
          marginBottom: 10,
          padding: 0,
        }}
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
