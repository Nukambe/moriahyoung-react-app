import AudioPlayer from "../AudioPlayer";

const tracks = [
  { title: "Commercial", src: "audio/Commercial_Demo_Moriah_Young.mp3" },
  { title: "Narration", src: "audio/Narration_Demo_Moriah_Young.mp3" },
  { title: "Anime", src: "audio/TBG_Test_Lines_2.mp3" },
];

export default function Voice() {
  return (
    <>
      <h1>Voice Component</h1>
      <AudioPlayer tracks={tracks} />
    </>
  );
}
