import "./Home.css";

const Home = () => {
  return (
    <div className="home" id="home">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Danny</h1>
          <h2 className="hero-subtitle">Full-Stack Software Engineer</h2>
          <p className="hero-body">
            I'm a full-stack software engineer that recently transitioned out of
            the US Army where I worked as a Cyber Operations Specialist (17C)
            doing cyber security. I am excited to take the next step in my
            journey and and am confident I will be a fantastic addition to your
            team.
          </p>
        </div>
        <img
          className="hero-image"
          src="/images/hero.png"
          alt="Stylized image of a coding window"
        />
      </section>
    </div>
  );
};

export default Home;
