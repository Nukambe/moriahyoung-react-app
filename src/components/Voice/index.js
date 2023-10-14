import AudioPlayer from "../AudioPlayer";

const tracks = [
  { title: "Commercial", src: "audio/Commercial_Demo_Moriah_Young.mp3" },
  { title: "Narration", src: "audio/Narration_Demo_Moriah_Young.mp3" },
  { title: "Anime", src: "audio/TBG_Test_Lines_2.mp3" },
];

export default function Voice() {
  return (
    <div style={{
      minHeight: '50vh'
    }}>
      <h2>DEMOS</h2>
      <h3>
        I USE MY VOICE FOR THE SOUL PURPOSE TO CONNECT, SERVE, ENGAGE, AND
        INFORM.
      </h3>
      <AudioPlayer tracks={tracks} />
    </div>
  );
}
