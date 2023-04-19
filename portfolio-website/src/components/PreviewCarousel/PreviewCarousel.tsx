import "./PreviewCarousel.css";
import { useState, CSSProperties } from "react";

const PreviewCarousel = (props: any) => {
  const [images, setImages] = useState<Array<string>>(props.images);
  const [animationActive, setAnimationActive] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleClick = () => {
    if (!animationActive) {
      setAnimationActive(true);
      if (activeIndex < 4) {
        setActiveIndex(activeIndex + 1);
      } else {
        setActiveIndex(0);
      }
      setTimeout(() => {
        setImages((prevImages) => {
          const [first, ...rest] = prevImages;
          const newImages = [...rest, first];
          return newImages;
        });
        setAnimationActive(false);
      }, 200);
    }
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setImages((prevImages) => {
      const shift = images.length - index;
      return [...prevImages.slice(shift), ...prevImages.slice(0, shift)];
    });
  };

  const onAnimationEnd = () => {
    setAnimationActive(false);
  };

  const renderImages = () => {
    return images.map((src: string, index: number) => {
      const zIndex = images.length - index;
      const top = 60 - index * 10;
      const right = 110 - index * 10;
      let className = "carousel-image";
      const style: CSSProperties = { zIndex, position: "absolute", top, right };
      return index === 0 ? (
        <img
          key={index}
          src={src}
          className={`carousel-image ${animationActive ? "animate" : ""}`}
          style={style}
          onClick={() => handleClick()}
          onAnimationEnd={onAnimationEnd}
        />
      ) : (
        <img key={index} src={src} className={className} style={style} />
      );
    });
  };

  return (
    <div className="carousel-container">
      {renderImages()}
      <div className="carousel-dots">
        {images.map((item: any, index: number) => (
          <div
            key={index}
            className={`carousel-dot ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PreviewCarousel;
