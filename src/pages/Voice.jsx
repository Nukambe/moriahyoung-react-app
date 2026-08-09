import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";
import PageTransition from "../components/ui/PageTransition";
import PageHeader from "../components/ui/PageHeader";
import Seo from "../components/ui/Seo";
import AudioPlayer, { Equalizer } from "../components/audio/AudioPlayer";
import Img from "../components/ui/Img";
import { images, voiceCategories } from "../data/site";

export default function Voice() {
  const [tab, setTab] = useState(0);
  // `null` when nothing has been queued yet.
  const [selection, setSelection] = useState(null);
  const [playing, setPlaying] = useState(false);

  const activeTrack =
    selection && voiceCategories[selection.category].tracks[selection.track];

  const selectTrack = (category, track) => {
    const isSame =
      selection && selection.category === category && selection.track === track;
    if (isSame) {
      setPlaying((value) => !value);
      return;
    }
    setSelection({ category, track });
    setPlaying(true);
  };

  const skip = useCallback(
    (step) => {
      setSelection((current) => {
        if (!current) return current;
        const tracks = voiceCategories[current.category].tracks;
        const next = (current.track + step + tracks.length) % tracks.length;
        return { ...current, track: next };
      });
    },
    []
  );

  return (
    <PageTransition>
      <Seo
        title="Voice"
        description="Commercial and narration voice over demos from Moriah Young — listen to full reels and individual spots."
      />

      <PageHeader
        eyebrow="Voice over"
        title={
          <>
            Demos
            <span className="block italic text-gold-300">& selected spots</span>
          </>
        }
        intro="Press play on a full reel, or dig into the individual reads below. Everything here was recorded in-house and delivered broadcast-ready."
      />

      <section className="mx-auto grid max-w-7xl gap-16 px-6 pb-40 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] lg:gap-24 lg:px-10">
        <div>
        {/* Category tabs */}
        <div role="tablist" aria-label="Demo categories" className="flex flex-wrap gap-2">
          {voiceCategories.map((category, index) => (
            <button
              key={category.id}
              role="tab"
              id={`tab-${category.id}`}
              aria-selected={tab === index}
              aria-controls={`panel-${category.id}`}
              onClick={() => setTab(index)}
              className={`rounded-full px-6 py-3 text-[0.7rem] tracking-[0.2em] uppercase transition-all duration-300 ${
                tab === index
                  ? "bg-gold-400 text-ink-950"
                  : "border border-ink-700 text-bone-300 hover:border-gold-500/60 hover:text-gold-300"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={voiceCategories[tab].id}
            id={`panel-${voiceCategories[tab].id}`}
            role="tabpanel"
            aria-labelledby={`tab-${voiceCategories[tab].id}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mt-8 text-sm text-bone-400">
              {voiceCategories[tab].description}
            </p>

            <ul className="mt-8 divide-y divide-ink-800 border-y border-ink-800">
              {voiceCategories[tab].tracks.map((track, index) => {
                const isActive =
                  selection?.category === tab && selection?.track === index;
                const isPlaying = isActive && playing;

                return (
                  <li key={track.src}>
                    <button
                      type="button"
                      onClick={() => selectTrack(tab, index)}
                      aria-label={`${isPlaying ? "Pause" : "Play"} ${track.name}`}
                      className="group flex w-full items-center gap-5 py-6 text-left transition-colors hover:bg-ink-850/60"
                    >
                      <span
                        className={`w-7 shrink-0 text-center font-mono text-xs tabular-nums ${
                          isActive ? "text-gold-300" : "text-bone-400"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`flex size-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isActive
                            ? "border-gold-400 bg-gold-400 text-ink-950"
                            : "border-ink-700 text-bone-200 group-hover:border-gold-400/70 group-hover:text-gold-300"
                        }`}
                      >
                        {isPlaying ? (
                          <PauseIcon className="size-4" />
                        ) : (
                          <PlayIcon className="size-4 translate-x-px" />
                        )}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span
                          className={`block font-display text-2xl transition-colors ${
                            isActive ? "text-gold-300" : "text-bone-50"
                          }`}
                        >
                          {track.name}
                        </span>
                        {track.note && (
                          <span className="mt-1 block text-[0.65rem] tracking-[0.2em] text-bone-400 uppercase">
                            {track.note}
                          </span>
                        )}
                      </span>

                      {isPlaying && <Equalizer active />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </AnimatePresence>

        <p className="mt-12 text-sm leading-relaxed text-bone-400">
          Looking for something you don&apos;t hear here — character work, IVR,
          audiobook, a custom read of your own script?{" "}
          <Link
            to="/contact"
            className="text-gold-300 underline decoration-gold-500/40 underline-offset-4 hover:text-gold-200"
          >
            Ask for a custom audition.
          </Link>
        </p>
        </div>

        <aside className="lg:sticky lg:top-32 lg:self-start">
          <figure className="relative">
            <div
              className="absolute -inset-3 rounded-sm border border-gold-500/25"
              aria-hidden="true"
            />
            <Img
              name={images.studio}
              alt="Moriah Young's home recording booth"
              sizes="(min-width: 1024px) 32vw, 100vw"
              className="relative w-full rounded-sm object-cover shadow-2xl shadow-black/50"
            />
          </figure>
          <p className="eyebrow mt-10">In the booth</p>
          <p className="mt-4 text-sm leading-relaxed text-bone-300">
            Every read here was tracked in a treated home studio and delivered
            broadcast-ready — no cleanup required.
          </p>
          <dl className="mt-8 space-y-4 border-t border-ink-800 pt-8">
            {[
              ["Formats", "WAV · MP3 · raw or edited"],
              ["Turnaround", "Most jobs inside 24–48 hrs"],
              ["Live direction", "Source-Connect · Zoom · Riverside"],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-[0.6rem] tracking-[0.25em] text-bone-400 uppercase">
                  {label}
                </dt>
                <dd className="mt-1 text-sm text-bone-200">{value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>

      <AnimatePresence>
        {activeTrack && (
          <AudioPlayer
            track={activeTrack}
            playing={playing}
            onPlayingChange={setPlaying}
            onPrev={() => skip(-1)}
            onNext={() => skip(1)}
            onClose={() => {
              setPlaying(false);
              setSelection(null);
            }}
          />
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
