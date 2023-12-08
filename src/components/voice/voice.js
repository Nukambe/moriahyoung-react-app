import { useState } from "react";
import AudioPlayer from "../AudioPlayer";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

export default function Voice() {
  const [tab, setTab] = useState(0);
  const [track, setTrack] = useState([0, 0]);
  const [showPlayer, setShowPlayer] = useState(false);
  const categories = [
    {
      name: "Full Demos",
      content: [
        { name: "Commercial", src: "/audio/Commercial_Demo_Moriah_Young.mp3" },
        { name: "Narration", src: "/audio/Narration_Demo_Moriah_Young.mp3" },
      ],
    },
    {
      name: "Commercial",
      content: [
        { name: "Nissan", src: "" },
        { name: "Asthma", src: "" },
        { name: "Pampers", src: "" },
        { name: "Salad", src: "" },
        { name: "Spotify", src: "" },
      ],
    },
    {
      name: "Narration",
      content: [
        { name: "Narration", src: "" },
        { name: "Narration", src: "" },
      ],
    },
  ];

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
                  whitespace-nowrap sm:border-b-2 px-1 pb-4 text-xl sm:text-sm font-medium text-left`}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ul className="py-8 space-y-4 max-w-xl">
        {categories[tab].content.map((sample, index) => (
          <li>
            <button
              onClick={() => {
                setTrack([tab, index]);
                setShowPlayer(true);
              }}
              className="w-full rounded-md bg-rose-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600 flex justify-between items-center"
            >
              {sample.name}
              <span>
                <PlayCircleIcon className="w-8" />
              </span>
            </button>
          </li>
        ))}
      </ul>
      {showPlayer && (
        <AudioPlayer
          name={categories[track[0]].content[track[1]].name}
          src={categories[track[0]].content[track[1]].src}
        />
      )}
    </div>
  );
}
