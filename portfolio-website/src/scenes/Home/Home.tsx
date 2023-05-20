import "./Home.css";
import ImgPlaceholder from "../../components/ImgPlaceholder/ImgPlaceholder";

const Home = () => {
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
        </div>
        <svg
          className="hero-diagonal"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100"></polygon>
        </svg>
        <ImgPlaceholder
          containerClass="hero-image-container"
          imgClass="hero-image"
          src="/images/hero.png"
          width="750px"
          height="524px"
        />
      </section>
    </div>
  );
};

export default Home;
