import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string>("home");

  const changeActiveLink = (name: string) => {
    setActiveLink(name);
  };

  return (
    <div className="navbar-container">
      <ul className="navbar-list">
        <li>
          <a
            href="#home"
            className={`navbar-item underline-anim ${
              activeLink === "home" ? "active" : ""
            }`}
            onClick={() => changeActiveLink("home")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={`navbar-item underline-anim ${
              activeLink === "about" ? "active" : ""
            }`}
            onClick={() => changeActiveLink("about")}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={`navbar-item underline-anim ${
              activeLink === "projects" ? "active" : ""
            }`}
            onClick={() => changeActiveLink("projects")}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={`navbar-item underline-anim ${
              activeLink === "contact" ? "active" : ""
            }`}
            onClick={() => changeActiveLink("contact")}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
