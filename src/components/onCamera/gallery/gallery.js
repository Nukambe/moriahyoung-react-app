import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { ScreenContext } from "../../../context/ScreenContext";

import image0463 from "../../../assets/content/0463-_Moriah_Young-_Larger_File.jpg";
import image0468 from "../../../assets/content/0468-_Moriah_Young-_Larger_File.jpg";
import image0534 from "../../../assets/content/0534-_Moriah_Young-_Larger_File.jpg";
import image0572 from "../../../assets/content/0572-_Moriah_Young-_Larger_File.jpg";
import image0615 from "../../../assets/content/0615-_Moriah_Young-_Larger_File.jpg";

const images = [image0463, image0468, image0534, image0572, image0615];

export default function Gallery() {
  const theme = useContext(ThemeContext);
  const mediaQueries = useContext(ScreenContext);

  return (
    <div className="gallery-wrapper">
      <div
        id="gallery"
        style={{
          display: 'flex',
          columnGap: mediaQueries.mobile ? '0.1em' : '0.2em',
          overflowX: 'hidden',
          backgroundColor: theme.header,
          padding: '0.1em 0'
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
