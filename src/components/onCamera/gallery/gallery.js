import { useState, componentDidMount, componentWillUnmount } from "react";
import image0463 from "../../../assets/content/Moriah_Young-_0463.jpg";
import image0468 from "../../../assets/content/Moriah_Young-_0468.jpg";
import image0534 from "../../../assets/content/Moriah_Young-_0534.jpg";
import image0572 from "../../../assets/content/Moriah_Young-_0572.jpg";
import image0615 from "../../../assets/content/Moriah_Young-_0615.jpg";

const images = [image0463, image0468, image0534, image0572, image0615];

export default function Gallery() {
  const [galleryScroll, setGalleryScroll] = useState(0);

  function handleScroll(event) {
    console.log(event.deltaX);
  }

  //   componentDidMount() {
  //     document.getElementById('gallery').addEventListener('scroll', handleScroll);
  //   };

  //   componentWillUnmount() {
  //     document.getElementById('gallery').removeEventListener('scroll', handleScroll);
  //   };

  return (
    <div
      className="gallery-wrapper"
      style={{
        paddingTop: "5em",
      }}
    >
      <div
        onScroll={(e) => handleScroll(e)}
        id="gallery"
        style={{
          display: "flex",
          columnGap: "1em",
          padding: "1em 0",
          overflow: "scroll",
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="gallery headshot"
            style={{
              width: "12em",
            }}
          />
        ))}
      </div>
    </div>
  );
}