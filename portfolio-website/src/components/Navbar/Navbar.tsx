import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const scrollToSection = (
    id: string,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event?.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const setExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`navbar-container ${isExpanded ? "expanded" : ""}`}>
      <ul className={`navbar-list ${isExpanded ? "expanded" : ""}`}>
        <li>
          <a
            onClick={(e) => scrollToSection("home", e)}
            className={`navbar-item underline-anim`}
            href="#home"
          >
            Home
          </a>
        </li>
        <li>
          <a
            onClick={(e) => scrollToSection("about", e)}
            href="#about"
            className={`navbar-item underline-anim`}
          >
            About
          </a>
        </li>
        <li>
          <a
            onClick={(e) => scrollToSection("projects", e)}
            href="#projects"
            className={`navbar-item underline-anim`}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            onClick={(e) => scrollToSection("contact", e)}
            href="#contact"
            className={`navbar-item underline-anim`}
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="navbar-icon">
        <img className="navbar-logo" src="/icons/white_256.png" />
      </div>
      <div className="navbar-menu-container">
        <button
          className={`navbar-menu ${isExpanded ? "expanded" : ""}`}
          aria-controls="primary-navigation"
          aria-expanded={isExpanded}
          onClick={setExpanded}
        >
          <svg className="hamburger" viewBox="0 0 100 100">
            <rect
              className="hamburger-line top"
              width="80"
              height="10"
              x="10"
              y="25"
              rx="5"
            ></rect>
            <rect
              className="hamburger-line middle"
              width="80"
              height="10"
              x="10"
              y="45"
              rx="5"
            ></rect>
            <rect
              className="hamburger-line bottom"
              width="80"
              height="10"
              x="10"
              y="65"
              rx="5"
            ></rect>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
