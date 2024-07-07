import { useState, useRef, useEffect } from "react";
import {
  PlayCircleIcon,
  SpeakerXMarkIcon,
  SpeakerWaveIcon,
  PauseCircleIcon,
  ForwardIcon,
  BackwardIcon,
} from "@heroicons/react/24/solid";
import AudioButton from "./audioButton";

export default function AudioPlayer({ name, src, skipTrack }) {
  const [mute, setMute] = useState(false);
  const [mutedVolume, setMutedVolume] = useState(30);
  const [volume, setVolume] = useState(30);
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const audio = useRef(new Audio(src));

  function playAudio() {
    audio.current.play();
    setPlaying(true);
  }

  function pauseAudio() {
    audio.current.pause();
    setPlaying(false);
  }

  function muteAudio() {
    audio.current.muted = true;
    setMutedVolume(volume);
    setVolume(0);
    setMute(true);
  }

  function unMuteAudio(restoreVolume) {
    setVolume(restoreVolume);
    audio.current.muted = false;
    setMute(false);
  }

  useEffect(() => {
    audio.current.currentTime = 0;
    audio.current.src = src;
    audio.current.load();
    setTimeout(() => playAudio(), 500);
  }, [src]);

  useEffect(() => {
    let audioTimer;

    if (playing) {
      audioTimer = setInterval(() => {
        setPosition(
          Math.floor((audio.current.currentTime / audio.current.duration) * 100)
        );
      }, 20);
    }

    if (!playing) clearInterval(audioTimer);

    return () => {
      clearInterval(audioTimer);
    };
  }, [playing]);

  useEffect(() => {
    if (mute && volume > 0) {
      unMuteAudio(volume);
    }
    audio.current.volume = volume / 100;
  }, [volume, mute]);

  useEffect(() => { // kill audio when component unmounts
    return () => {
      audio.current.pause();
    };
  }, []);

  return (
    <figure
      style={{ minWidth: "300px" }}
      className="flex flex-col items-center gap-6 bg-rose-800 px-4 py-4 shadow-2xl ring-1 ring-rose-900/5 backdrop-blur-sm md:px-6 rounded-lg text-white max-w-2xl"
    >
      <figcaption className="text-center w-full text-5xl font-bold py-12">
        {name}
      </figcaption>
      <div className="w-full">
        <div className="flex flex-none justify-around items-center gap-4">
          <AudioButton onClick={() => skipTrack(false)}>
            <BackwardIcon className="w-12" />
          </AudioButton>
          {!playing ? (
            <AudioButton onClick={() => playAudio()}>
              <PlayCircleIcon className="w-16" />
            </AudioButton>
          ) : (
            <AudioButton onClick={() => pauseAudio()}>
              <PauseCircleIcon className="w-16" />
            </AudioButton>
          )}
          <AudioButton onClick={() => skipTrack(true)}>
            <ForwardIcon className="w-12" />
          </AudioButton>
        </div>
        <div className="w-full h-4 flex items-center relative my-4">
          <div className="w-full h-full bg-gray-200" />
          <div
            className="h-full w-full bg-rose-500 absolute transition-all"
            style={{ width: `${position}%` }}
          />
          {/* <div
            className="h-6 w-2 bg-rose-950 rounded-md absolute transition-all"
            style={{ marginLeft: `${position}%` }}
          /> */}
        </div>
        <div className="flex items-center gap-4">
          {mute || volume < 1 ? (
            <AudioButton onClick={() => unMuteAudio(mutedVolume)}>
              <SpeakerXMarkIcon className="w-8" />
            </AudioButton>
          ) : (
            <AudioButton onClick={() => muteAudio(true)}>
              <SpeakerWaveIcon className="w-8" />
            </AudioButton>
          )}
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            className="w-full"
          />
        </div>
      </div>
    </figure>
  );
}
