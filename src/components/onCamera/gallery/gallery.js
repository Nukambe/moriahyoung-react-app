import { useState, useEffect, useLayoutEffect, useRef } from "react";
import image0463 from "../../../assets/content/Moriah_Young-_0463.jpg";
import image0468 from "../../../assets/content/Moriah_Young-_0468.jpg";
import image0534 from "../../../assets/content/Moriah_Young-_0534.jpg";
import image0572 from "../../../assets/content/Moriah_Young-_0572.jpg";
import image0615 from "../../../assets/content/Moriah_Young-_0615.jpg";

const images = [image0463, image0468, image0534, image0572, image0615];

export default function Gallery() {
  const [galleryScroll, setGalleryScroll] = useState(0);
  const gallery = useRef(null);

  function handleScroll(event) {
    event.preventDefault();
    setGalleryScroll((prev) => prev + event.deltaY);
  }

  useEffect(() => {
    if (gallery.current) {
      gallery.current.scrollLeft = galleryScroll;
    }
  }, [galleryScroll]);

  return (
    <div className="gallery-wrapper">
      <div
        id="gallery"
        onScroll={(e) => handleScroll(e)}
        onWheel={(e) => handleScroll(e)}
        style={{
          display: "flex",
          columnGap: "1em",
          width: "100%",
          overflowX: "scroll",
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="gallery headshot"
            style={{
              width: "80%",
            }}
          />
        ))}
      </div>
    </div>
  );
}
