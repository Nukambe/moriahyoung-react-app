import { useState } from "react";
import AudioPlayer from "../AudioPlayer";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    name: "Full Demos",
    content: [
      {
        name: "Commercial",
        src: "/audio/demos/Commercial_Demo_Moriah_Young.mp3",
      },
      {
        name: "Narration",
        src: "/audio/demos/Narration_Demo_Moriah_Young.mp3",
      },
    ],
  },
  {
    name: "Commercial",
    content: [
      { name: "Nissan", src: "/audio/commercial/Nissan.mp3" },
      { name: "Asthma", src: "/audio/commercial/PSA.mp3" },
      { name: "Pampers", src: "/audio/commercial/Pampers.mp3" },
      { name: "Salad", src: "/audio/commercial/Salad.mp3" },
      { name: "Spotify", src: "/audio/commercial/Spotify.mp3" },
    ],
  },
];

export default function Voice() {
  const [tab, setTab] = useState(0);
  const [track, setTrack] = useState([0, 0]);
  const [showPlayer, setShowPlayer] = useState(false);

  const skipTrack = (forward) => {
    let newTrack = track[1] + (forward ? 1 : -1);
    if (newTrack < 0) {
      newTrack = categories[track[0]].content.length - 1;
    } else if (newTrack >= categories[track[0]].content.length) {
      newTrack = 0;
    }
    setTrack([track[0], newTrack]);
  };

  return (
    <div className="p-16 bg-rose-50 h-full w-full">
      <div className="border-b border-gray-200 pb-5 sm:pb-0">
        <h3 className="sm:text-base font-semibold text-2xl leading-6 text-gray-900 mb-8">
          Demos
        </h3>
        <div className="mt-3 sm:mt-4">
          <ul className="-mb-px flex sm:space-x-8 flex-col sm:flex-row">
            {categories.map((category, index) => (
              <li key={index}>
                <button
                  onClick={() => setTab(index)}
                  className={`${
                    tab === index
                      ? "sm:border-rose-500 text-rose-600"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }
                  whitespace-nowrap sm:border-b-2 px-1 pb-4 text-xl font-medium text-left`}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ul className="py-8 space-y-4 max-w-xl">
        <AnimatePresence mode="wait">
          {categories[tab].content.map((sample, index) => (
            <motion.li
              key={sample.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0, transition: { delay: index * 0.1 } }}
              exit={{ opacity: 0, x: 200, transition: { delay: index * 0.1 } }}
              transition={{ duration: 0.2 }}
              className="shadow-md"
            >
              <button
                onClick={() => {
                  setTrack([tab, index]);
                  setShowPlayer(true);
                }}
                className="w-full rounded-md bg-rose-600 px-3.5 py-2.5 text-xl font-semibold shadow-md text-white hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600 flex justify-between items-center"
              >
                {sample.name}
                <motion.span whileHover={{ scale: 1.1 }}>
                  <PlayCircleIcon className="w-8" />
                </motion.span>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      {showPlayer && (
        <AudioPlayer
          name={categories[track[0]].content[track[1]].name}
          src={categories[track[0]].content[track[1]].src}
          skipTrack={skipTrack}
        />
      )}
    </div>
  );
}
