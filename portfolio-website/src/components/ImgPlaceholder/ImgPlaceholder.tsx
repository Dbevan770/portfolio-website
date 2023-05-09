import { useState } from "react";
import "./ImgPlaceholder.css";

interface ImgPlaceholderProps {
  containerClass?: string;
  width: string;
  height: string;
  imgClass?: string;
  src: string;
  customId?: string;
  id?: string;
  callback?(args: any): void;
  onAnimationEnd?(args: any): void;
}

export default function ImgPlaceholder(props: ImgPlaceholderProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = () => {
    if (props.callback) {
      props.callback(props.id);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <div
        className={`${props.containerClass} ${isLoading ? "img-loading" : ""}`}
        style={{
          width: props.width,
          height: props.height,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: isLoading ? "rgba(0,0,0,0.2)" : "transparent",
          position: "relative",
        }}
      >
        {isLoading && (
          <div
            className="img-loader-ring"
            id={props.customId || "img-loader-ring"}
          >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        <img
          src={props.src}
          className={`${props.imgClass}`}
          style={{
            opacity: isLoading ? 0 : 1,
          }}
          onLoad={handleLoad}
          alt={props.src}
          onClick={handleClick}
        />
      </div>
    </>
  );
}
