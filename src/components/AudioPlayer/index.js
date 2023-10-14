import { useEffect, useState, useRef } from "react";

export default function AudioPlayer({ tracks }) {
  const [playing, setPlaying] = useState(false);
  const [track, setTrack] = useState(0);
  const [shouldPlay, setShouldPlay] = useState(false);
  const [audioPosition, setAudioPosition] = useState(0);
  const [playPause, setPlayPause] = useState("fi fi-br-play-circle");
  const audioRef = useRef(null);

  useEffect(() => {
    let audioTimer;

    if (playing) {
      setShouldPlay(true);
      audioRef.current.play();
      audioTimer = setInterval(() => {
        setAudioPosition(audioRef.current?.currentTime);
        console.log("audioplayer position timer is on");
      }, 20);
    } else {
      audioRef.current.pause();
      //   clearInterval(audioTimer);
    }

    return () => {
      clearInterval(audioTimer);
    };
  }, [playing]);

  useEffect(() => {
    if (shouldPlay) {
      if (playing) {
        audioRef.current.play();
      } else {
        setPlaying(true);
      }
    }
  }, [track]);

  useEffect(() => {
    setPlayPause(playing ? "fi fi-br-pause-circle" : "fi fi-br-play-circle");
  }, [playing]);

  function seekAudio(position) {
    audioRef.current.currentTime = position;
    setAudioPosition(audioRef.current?.currentTime);
  }

  return (
    <>
      <figure style={{ margin: "0 auto" }}>
        <figcaption>{tracks[track].title}</figcaption>
        <audio ref={audioRef} src={tracks[track].src} typeof="audio/mp3">
          <a href={tracks[track].src}>Download audio</a>
        </audio>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => setPlaying(!playing)}
            style={{
              background: "unset",
              border: "unset",
              color: "orange",
            }}
          >
            <i
              className={playPause}
              style={{
                fontSize: "32px",
                width: "32px",
                height: "32px",
                margin: "auto",
                display: "block",
              }}
            />
          </button>
          <input
            type="range"
            min="0"
            max={audioRef.current?.duration || "0"}
            value={audioPosition}
            onChange={(e) => seekAudio(e.target.value)}
            style={{
              margin: "auto 0",
            }}
          />
          <button
            onClick={() =>
              setTrack((prev) => (prev === 0 ? tracks.length - 1 : prev - 1))
            }
            style={{
              background: "unset",
              border: "unset",
              color: "orange",
            }}
          >
            <i
              className="fi fi-br-rewind"
              style={{
                fontSize: "32px",
                width: "32px",
                height: "32px",
                margin: "auto",
                display: "block",
              }}
            />
          </button>
          <button
            onClick={() =>
              setTrack((prev) => (prev === tracks.length - 1 ? 0 : prev + 1))
            }
            style={{
              background: "unset",
              border: "unset",
              color: "orange",
            }}
          >
            <i
              className="fi fi-br-forward"
              style={{
                fontSize: "32px",
                width: "32px",
                height: "32px",
                margin: "auto",
                display: "block",
              }}
            />
          </button>
        </div>
      </figure>

      <ul>
        {tracks.map((track, index) => (
          <li key={index}>
            <button onClick={() => setTrack(index)}>{track.title}</button>
          </li>
        ))}
      </ul>
    </>
  );
}
