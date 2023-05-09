import "./ProjectShowcase.css";
import PreviewCarousel from "../PreviewCarousel/PreviewCarousel";
import ImgPlaceholder from "../ImgPlaceholder/ImgPlaceholder";
import { useState, useEffect } from "react";

const ProjectShowcase = (props: any) => {
  const activeProject = props.activeProject;
  const [imagesLoading, setImagesLoading] = useState<boolean>(true);
  const [loadedImagesCount, setLoadedImagesCount] = useState<number>(0);

  const handleImageLoad = () => {
    setLoadedImagesCount((prev) => {
      const newCount = prev + 1;
      if (newCount === activeProject.images.length) {
        setImagesLoading(false);
      }
      return newCount;
    });
  };

  useEffect(() => {
    setImagesLoading(true);
    setLoadedImagesCount(0);
  }, [activeProject]);

  return (
    <div className="showcase-grid">
      <div className="carousel-wrapper">
        <PreviewCarousel
          images={activeProject.images}
          onImageLoad={handleImageLoad}
          hidden={imagesLoading}
        />
        {imagesLoading && (
          <div className="carousel-loading-container">
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
      </div>
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
          <a href={activeProject.live} className="showcase-btn" target="_blank">
            Live
          </a>
        )}
        <a href={activeProject.code} className="showcase-btn" target="_blank">
          Code
        </a>
      </div>
    </div>
  );
};

export default ProjectShowcase;
