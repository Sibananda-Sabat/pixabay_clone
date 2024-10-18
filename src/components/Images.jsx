import React from "react";
import PixapayContext from "../context/PixapayContext";
import { useContext } from "react";

const Images = () => {
  const { imageData } = useContext(PixapayContext);

  return (
    <div className="container my-5">
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
          gap: "50px",
        }}
      >
        {imageData.map((item) => (
          <div className="item" key={imageData.indexOf(item)}>
            <div
              className="item"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={item.largeImageURL}
                alt="image"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "10px",
                  border: "2px solid yellow",
                  transition: "transform 0.5s ease",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
