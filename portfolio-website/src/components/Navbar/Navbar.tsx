import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <ul className="navbar-list">
        <li>
          <a href="#home" className={`navbar-item underline-anim`}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className={`navbar-item underline-anim`}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" className={`navbar-item underline-anim`}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className={`navbar-item underline-anim`}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
