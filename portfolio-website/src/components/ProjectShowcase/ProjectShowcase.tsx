import "./ProjectShowcase.css";
import PreviewCarousel from "../PreviewCarousel/PreviewCarousel";
import ImgPlaceholder from "../ImgPlaceholder/ImgPlaceholder";

const ProjectShowcase = (props: any) => {
  const activeProject = props.activeProject;
  const images = [
    "/images/projects/mysteryincbookstore/mibs_home.png",
    "/images/projects/mysteryincbookstore/mibs_home_cart.png",
    "/images/projects/mysteryincbookstore/mibs_admin.png",
    "/images/projects/mysteryincbookstore/mibs_checkout.png",
    "/images/projects/mysteryincbookstore/mibs_stripe.png",
  ];
  return (
    <div className="showcase-grid">
      <PreviewCarousel images={images} />
      <div className="showcase-languages">
        {activeProject.languages.map((language: string, index: number) => (
          <ImgPlaceholder
            key={index}
            containerClass="showcase-language-container"
            imgClass="showcase-language-icon"
            src={`/icons/languages/${language}-original.svg`}
            width="80px"
            height="80px"
          />
        ))}
      </div>
      <h1 className="showcase-project-title">{activeProject.title}</h1>
      <p className="showcase-project-description">{activeProject.full_desc}</p>
      <div className="showcase-btns">
        {activeProject.live && (
          <a href={activeProject.live} className="showcase-btn">
            Live
          </a>
        )}
        <a href={activeProject.code} className="showcase-btn">
          Code
        </a>
      </div>
    </div>
  );
};

export default ProjectShowcase;
