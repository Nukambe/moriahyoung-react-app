const reels = [
  {
    title: "Reel 1",
    src: "/video/Reel1.mp4",
  },
  {
    title: "Reel 2",
    src: "/video/Reel2.mp4",
  },
];

export default function OnCamera() {
  return (
    <div className="bg-rose-50 h-full">
      <ul className="flex flex-col items-center space-y-24 py-16 px-8">
        {reels.map((reel, index) => (
          <li key={index} style={{ width: "95%", maxWidth: "60em" }}>
            <h2 className="mb-8 text-4xl font-semibold">{reel.title}</h2>
            <video className="w-full rounded-lg" controls src={reel.src}>
              <a href={reel.src}>Download the reel.</a>
            </video>
          </li>
        ))}
      </ul>
    </div>
  );
}
