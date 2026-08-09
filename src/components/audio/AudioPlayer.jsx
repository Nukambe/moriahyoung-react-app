import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  BackwardIcon,
  ForwardIcon,
  PauseIcon,
  PlayIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${String(secs).padStart(2, "0")}`;
}

/**
 * Sticky transport bar for the voice demos. Owns a single <audio> element so
 * playback survives track changes but is torn down with the component.
 */
export default function AudioPlayer({
  track,
  playing,
  onPlayingChange,
  onPrev,
  onNext,
  onClose,
}) {
  const audioRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [muted, setMuted] = useState(false);
  const [scrubbing, setScrubbing] = useState(false);

  const src = track?.src;

  // Pick up the new source. Playback itself is left to the effect below so the
  // two never race each other on mount.
  useEffect(() => {
    audioRef.current?.load();
  }, [src]);

  // Single source of truth for playback: mirror `playing` onto the element,
  // re-running after a source change so a queued track starts on its own.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      if (audio.paused) audio.play().catch(() => onPlayingChange(false));
    } else if (!audio.paused) {
      audio.pause();
    }
  }, [playing, src, onPlayingChange]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    audio.muted = muted;
  }, [volume, muted]);

  const handleSeek = useCallback((event) => {
    const value = Number(event.target.value);
    setCurrentTime(value);
    if (audioRef.current) audioRef.current.currentTime = value;
  }, []);

  if (!track) return null;

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <motion.div
      initial={{ y: 120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 120, opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-700 bg-ink-950/95 backdrop-blur-xl"
      role="region"
      aria-label="Audio player"
    >
      <audio
        ref={audioRef}
        src={track.src}
        preload="metadata"
        onLoadedMetadata={(event) => {
          setDuration(event.currentTarget.duration || 0);
          setCurrentTime(event.currentTarget.currentTime);
        }}
        onEmptied={() => {
          setDuration(0);
          setCurrentTime(0);
        }}
        onTimeUpdate={(event) => {
          if (!scrubbing) setCurrentTime(event.currentTarget.currentTime);
        }}
        onPlay={() => onPlayingChange(true)}
        onPause={() => onPlayingChange(false)}
        onEnded={onNext}
      />

      {/* Full-width progress read-out along the top edge */}
      <div className="h-px w-full bg-ink-700">
        <div
          className="h-full bg-gold-400 transition-[width] duration-150 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4 lg:flex-row lg:items-center lg:gap-8 lg:px-10">
        <div className="flex min-w-0 flex-1 items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="truncate font-display text-xl text-bone-50">{track.name}</p>
            {track.note && (
              <p className="truncate text-[0.65rem] tracking-[0.2em] text-bone-400 uppercase">
                {track.note}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close player"
            className="p-2 text-bone-400 transition-colors hover:text-bone-100 lg:hidden"
          >
            <XMarkIcon className="size-5" />
          </button>
        </div>

        <div className="flex flex-1 items-center gap-4">
          <div className="flex items-center gap-2">
            <TransportButton onClick={onPrev} label="Previous track">
              <BackwardIcon className="size-5" />
            </TransportButton>
            <TransportButton
              onClick={() => onPlayingChange(!playing)}
              label={playing ? "Pause" : "Play"}
              primary
            >
              {playing ? <PauseIcon className="size-5" /> : <PlayIcon className="size-5 translate-x-px" />}
            </TransportButton>
            <TransportButton onClick={onNext} label="Next track">
              <ForwardIcon className="size-5" />
            </TransportButton>
          </div>

          <span className="w-10 shrink-0 text-right font-mono text-xs text-bone-400 tabular-nums">
            {formatTime(currentTime)}
          </span>
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={currentTime}
            onChange={handleSeek}
            onPointerDown={() => setScrubbing(true)}
            onPointerUp={() => setScrubbing(false)}
            aria-label="Seek"
            style={{ "--range-progress": progress }}
            className="range-gold h-3 w-full min-w-24 flex-1"
          />
          <span className="w-10 shrink-0 font-mono text-xs text-bone-400 tabular-nums">
            {formatTime(duration)}
          </span>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={() => setMuted((value) => !value)}
            aria-label={muted ? "Unmute" : "Mute"}
            className="text-bone-300 transition-colors hover:text-gold-300"
          >
            {muted || volume === 0 ? (
              <SpeakerXMarkIcon className="size-5" />
            ) : (
              <SpeakerWaveIcon className="size-5" />
            )}
          </button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={muted ? 0 : volume}
            onChange={(event) => {
              setVolume(Number(event.target.value));
              setMuted(false);
            }}
            aria-label="Volume"
            style={{ "--range-progress": (muted ? 0 : volume) * 100 }}
            className="range-gold h-3 w-24"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close player"
            className="ml-2 text-bone-400 transition-colors hover:text-bone-100"
          >
            <XMarkIcon className="size-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function TransportButton({ children, onClick, label, primary = false }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={label}
      whileTap={{ scale: 0.9 }}
      className={
        primary
          ? "flex size-11 items-center justify-center rounded-full bg-gold-400 text-ink-950 transition-colors hover:bg-gold-300"
          : "flex size-9 items-center justify-center rounded-full text-bone-300 transition-colors hover:text-gold-300"
      }
    >
      {children}
    </motion.button>
  );
}

/** Three-bar animated equalizer shown next to the playing track. */
export function Equalizer({ active }) {
  return (
    <span className="flex h-4 items-end gap-[3px]" aria-hidden="true">
      <AnimatePresence>
        {[0, 1, 2].map((bar) => (
          <motion.span
            key={bar}
            className="w-[3px] rounded-full bg-gold-300"
            initial={{ height: 4 }}
            animate={
              active
                ? { height: [4, 14, 7, 16, 5] }
                : { height: 4 }
            }
            transition={
              active
                ? { duration: 1.1, repeat: Infinity, delay: bar * 0.15, ease: "easeInOut" }
                : { duration: 0.2 }
            }
          />
        ))}
      </AnimatePresence>
    </span>
  );
}
