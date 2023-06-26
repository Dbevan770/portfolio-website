import "./Home.css";
import ImgPlaceholder from "../../components/ImgPlaceholder/ImgPlaceholder";

const Home = () => {
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
    <div className="home">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Danny</h1>
          <h2 className="hero-subtitle">Full-Stack Software Developer</h2>
          <p className="hero-body">
            I'm a full-stack software developer that recently transitioned out
            of the US Army where I worked as a Cyber Operations Specialist (17C)
            doing cyber security. I am excited to take the next step in my
            journey and am confident I will be a fantastic addition to your
            team.
          </p>
          <div className="hero-btn-container">
            <a
              href="#projects"
              className="hero-btn-primary"
              onClick={(e) => scrollToSection("projects", e)}
            >
              My Work
            </a>
            <a
              href="https://docs.google.com/document/d/10Oe0TA5m2bjHTuuF4GDfGwnojERJ4Pgx/edit?usp=sharing&ouid=116974167728244284383&rtpof=true&sd=true"
              target="_blank"
              className="hero-btn-secondary"
            >
              Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
