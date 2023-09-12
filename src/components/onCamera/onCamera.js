import Gallery from "./gallery/gallery";

const reels = [
  { title: "Reel 1", src: "https://player.vimeo.com/video/849975538?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" },
  { title: "Reel 2", src: "https://player.vimeo.com/video/849974706?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" },
  { title: "Reel 3", src: "" },
  { title: "Reel 4", src: "" },
];

export default function OnCamera() {
  return (
    <>
      <Gallery />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {reels.map((reel, index) => (
          <div key={index} style={{ width: '95%'}}>
            <h3>{reel["title"]}</h3>
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe
                src={reel['src']}
                frameborder="0"
                allow="fullscreen; picture-in-picture"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%'
                }}
                title="Moriah Reel Scene 1">
                </iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
        ))}
      </div>
    </>
  );
}
