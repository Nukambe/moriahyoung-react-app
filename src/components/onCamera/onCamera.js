import { useContext } from "react";
import { ScreenContext } from "../../context/ScreenContext";
import Footer from "../root/footer";
import Gallery from "./gallery/gallery";

const reels = [
  { title: "Reel 1", src: "https://player.vimeo.com/video/849975538?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" },
  { title: "Reel 2", src: "https://player.vimeo.com/video/849974706?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" },
];

export default function OnCamera() {
  const mediaQueries = useContext(ScreenContext);

  return (
    <div>
      <Gallery />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {reels.map((reel, index) => (
          <div key={index} style={{ width: '95%', maxWidth: '60em' }}>
            <h3>{reel["title"]}</h3>
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe
                src={reel['src']}
                frameBorder="0"
                allow="fullscreen; picture-in-picture"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  // maxWidth: '10em'
                }}
                title="Moriah Reel Scene 1">
                </iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
        ))}
      </div>
      {!mediaQueries.mobile && <Footer />}
    </div>
  );
}
