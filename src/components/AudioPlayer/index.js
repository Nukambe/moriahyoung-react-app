import { useState, useRef, useEffect, useCallback } from "react";
import {
  PlayIcon,
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
  SpeakerXMarkIcon,
  SpeakerWaveIcon,
  PauseIcon,
} from "@heroicons/react/24/solid";

export default function AudioPlayer({ name, src }) {
  const [mute, setMute] = useState(false);
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

  function muteAudio(shouldMute) {
    audio.current.muted = shouldMute;
    setMute(shouldMute);
    console.log(audio.current.muted);
  }

  function skipAudio(length) {
    const newPosition = audio.current.currentTime + length;
    if (newPosition < 0) audio.current.currentTime = 0;
    if (newPosition > audio.current.duration) {
      audio.current.currentTime = audio.current.duration;
    } else {
      audio.current.currentTime = newPosition;
    }
    setPosition(
      Math.floor((audio.current.currentTime / audio.current.duration) * 100)
    );
  }

  useEffect(() => {
    audio.current.currentTime = 0;
    audio.current.src = src;
    audio.current.load();
    setTimeout(() => playAudio(), 1000);
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

  return (
    <figure className="flex flex-col items-center gap-6 bg-rose-800 px-4 py-4 shadow shadow-rose-200/80 ring-1 ring-rose-900/5 backdrop-blur-sm md:px-6 rounded-lg text-white max-w-2xl">
      <figcaption className="text-left w-full text-lg font-medium">
        {name}
      </figcaption>
      <div className="flex gap-6 w-full">
        <div className="flex flex-none items-center gap-4">
          <button onClick={() => skipAudio(-10)}>
            <ArrowUturnLeftIcon className="w-8" />
          </button>
          {!playing ? (
            <button onClick={() => playAudio()}>
              <PlayIcon className="w-8" />
            </button>
          ) : (
            <button onClick={() => pauseAudio()}>
              <PauseIcon className="w-8" />
            </button>
          )}
          <button onClick={() => skipAudio(10)}>
            <ArrowUturnRightIcon className="w-8" />
          </button>
        </div>
        <div className="w-full h-8 flex items-center relative">
          <div className="w-full h-4 bg-rose-600 rounded-md" />
          <div
            className="h-6 w-2 bg-rose-950 rounded-md absolute transition-all"
            style={{ marginLeft: `${position}%` }}
          />
        </div>
        <div className="flex items-center gap-4">
          {mute ? (
            <button onClick={() => muteAudio(false)}>
              <SpeakerXMarkIcon className="w-8" />
            </button>
          ) : (
            <button onClick={() => muteAudio(true)}>
              <SpeakerWaveIcon className="w-8" />
            </button>
          )}
        </div>
      </div>
    </figure>
  );
}
