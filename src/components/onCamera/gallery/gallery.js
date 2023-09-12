import { useState, useEffect, useLayoutEffect, useRef } from "react";
import image0463 from "../../../assets/content/Moriah_Young-_0463.jpg";
import image0468 from "../../../assets/content/Moriah_Young-_0468.jpg";
import image0534 from "../../../assets/content/Moriah_Young-_0534.jpg";
import image0572 from "../../../assets/content/Moriah_Young-_0572.jpg";
import image0615 from "../../../assets/content/Moriah_Young-_0615.jpg";

const images = [image0463, image0468, image0534, image0572, image0615];

export default function Gallery() {

  return (
    <div className="gallery-wrapper"
      // style={{ overflow: 'hidden' }}
    >
      <div
        id="gallery"
        style={{
        display: 'flex',
        overflowX: 'hidden'
      }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="gallery headshot"
            style={{
              width: "75%",
              overflow: 'scroll'
            }}
          />
        ))}
      </div>
    </div>
  );
}
