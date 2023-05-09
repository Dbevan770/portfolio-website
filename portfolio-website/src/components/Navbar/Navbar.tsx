import "./Navbar.css";

const Navbar = () => {
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
  return (
    <div className="navbar-container">
      <ul className="navbar-list">
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
    </div>
  );
};

export default Navbar;
