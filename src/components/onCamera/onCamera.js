import Gallery from "./gallery/gallery";

const reels = [
  { title: "Reel 1", url: "" },
  { title: "Reel 2", url: "" },
  { title: "Reel 3", url: "" },
  { title: "Reel 4", url: "" },
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
          <div key={index}>
            <h3>{reel["title"]}</h3>
            <div>...video...</div>
          </div>
        ))}
      </div>
    </>
  );
}
