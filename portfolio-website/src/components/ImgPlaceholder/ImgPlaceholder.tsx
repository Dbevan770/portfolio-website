import { useState } from "react";
import "./ImgPlaceholder.css";

export default function ImgPlaceholder(props: any) {
  const [isLoading, setIsLoading] = useState(true);

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
          onClick={() => props.changeActiveImg(props.id)}
        />
      </div>
    </>
  );
}
