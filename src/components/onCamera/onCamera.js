const reels = [
  {
    title: "Reel 1",
    src: "https://player.vimeo.com/video/849975538?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  },
  {
    title: "Reel 2",
    src: "https://player.vimeo.com/video/849974706?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  },
];

export default function OnCamera() {
  return (
    <div className="bg-rose-50 h-full">
      <ul className="flex flex-col items-center space-y-24 py-16 px-8">
        {reels.map((reel, index) => (
          <li key={index} style={{ width: "95%", maxWidth: "60em" }}>
            <h2 className="mb-8 text-4xl font-semibold">{reel.title}</h2>
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                src={reel.src}
                frameBorder="0"
                allow="fullscreen; picture-in-picture"
                className="w-full h-full absolute top-0 left-0"
                title={`Moriah Reel Scene ${index + 1}`}
              />
            </div>
            <script src="https://player.vimeo.com/api/player.js" />
          </li>
        ))}
      </ul>
    </div>
  );
}
