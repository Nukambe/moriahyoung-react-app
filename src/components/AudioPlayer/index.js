import { useEffect, useState, useRef } from "react";

export default function AudioPlayer({ tracks }) {
  const [playing, setPlaying] = useState(false);
  const [track, setTrack] = useState(0);
  const [shouldPlay, setShouldPlay] = useState(false);
  const [audioPosition, setAudioPosition] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    let audioTimer;

    if (playing) {
      setShouldPlay(true);
      audioRef.current.play();
      audioTimer = setInterval(() => {
        setAudioPosition(audioRef.current?.currentTime);
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

  function seekAudio(position) {
      audioRef.current.currentTime = position;
      setAudioPosition(audioRef.current?.currentTime);
  }

  return (
    <>
      <figure>
        <figcaption>{tracks[track].title}</figcaption>
        <audio ref={audioRef} src={tracks[track].src}>
          <a href={tracks[track].src}>Download audio</a>
        </audio>
        <button onClick={() => setPlaying(!playing)}>PLAY/PAUSE</button>
        <input
          type="range"
          min="0"
          max={audioRef.current?.duration || "0"}
          value={audioPosition}
          onChange={(e) => seekAudio(e.target.value)}
        />
        <button>{"<<"}</button>
        <button>{">>"}</button>
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
