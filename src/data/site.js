export const site = {
  name: "Moriah Young",
  role: "Voice & On-Camera Actress",
  email: "moriah.young@outlook.com",
  tagline:
    "A voice over artist and on-camera talent who lives for the moment a story lands — the smile, the pause, the second take that finally tells the truth.",
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/voice", label: "Voice" },
  { to: "/oncamera", label: "On-Camera" },
  { to: "/contact", label: "Contact" },
];

export const socials = [
  {
    name: "Instagram",
    icon: "/icons/instagram.svg",
    url: "https://www.instagram.com/moriahlyoung/",
  },
  {
    name: "IMDb",
    icon: "/icons/imdb.svg",
    url: "https://www.imdb.com/name/nm12554084/",
  },
  {
    name: "SoundCloud",
    icon: "/icons/soundcloud.svg",
    url: "https://soundcloud.com/moriah-young-463207945",
  },
  {
    name: "Facebook",
    icon: "/icons/facebook.svg",
    url: "https://www.facebook.com/moriah.young.5",
  },
  {
    name: "Email",
    icon: "/icons/outlook.svg",
    url: `mailto:${site.email}`,
  },
];

/** Slugs of the optimized derivatives in `src/assets/optimized`. */
export const images = {
  portraitMain: "portrait-main",
  portraitComedic: "portrait-comedic",
  portraitWarm: "portrait-warm",
  portraitEditorial: "portrait-editorial",
  portraitDramatic: "portrait-dramatic",
  headshotCasual: "headshot-casual",
  headshotBusiness: "headshot-business",
  studio: "studio",
};

export const gallery = [
  { name: images.portraitMain, alt: "Moriah Young — warm, open headshot" },
  { name: images.portraitEditorial, alt: "Moriah Young — editorial portrait" },
  { name: images.portraitComedic, alt: "Moriah Young — comedic headshot" },
  { name: images.portraitDramatic, alt: "Moriah Young — dramatic portrait" },
  { name: images.portraitWarm, alt: "Moriah Young — natural light portrait" },
  { name: images.headshotCasual, alt: "Moriah Young — casual commercial headshot" },
  { name: images.headshotBusiness, alt: "Moriah Young — corporate headshot" },
];

export const disciplines = [
  {
    title: "Voice Over",
    to: "/voice",
    blurb:
      "Commercial, narration and character work recorded from a treated home studio with broadcast-ready turnaround.",
  },
  {
    title: "On-Camera",
    to: "/oncamera",
    blurb:
      "Film, television and commercial performance — grounded, expressive and comfortable in front of a lens.",
  },
  {
    title: "Theater",
    to: "/about",
    blurb:
      "Years on stage built the instrument: breath, presence and the discipline of telling a story live, once, well.",
  },
];

export const bio = [
  "Moriah Young is a voice and on-camera actress whose performances are built on a simple belief — that a story only works when someone in the room actually feels it. Whether she's reading forty seconds of commercial copy or holding a scene in a single take, she's after the same thing: something true.",
  "Her range moves easily between the warm and conversational and the sharp and comedic. Clients come to her for read-the-room instincts, clean direction-taking, and a voice that sounds like a person rather than an announcer. Long-form narration, animated characters, explainer scripts and national-style commercial spots all live comfortably in her wheelhouse.",
  "Theater taught her the craft first. Years on stage — the breath work, the timing, the discipline of a live audience — became the foundation everything else is built on. That training shows up on camera as stillness and on mic as control.",
  "When she isn't recording, she's usually in the booth building something new, coaching a scene, or hunting for the version of a line nobody's tried yet.",
];

export const atAGlance = [
  { label: "Based in", value: "United States · Remote-ready" },
  { label: "Studio", value: "Treated home booth, broadcast-quality" },
  { label: "Delivery", value: "WAV / MP3, raw or edited, 24–48 hrs" },
  { label: "Direction", value: "Live sessions via Source-Connect, Zoom, Riverside" },
];

export const reels = [
  {
    title: "On-Camera Reel — Drama",
    description:
      "Scene work highlighting grounded, character-driven performance.",
    src: "https://player.vimeo.com/video/849975538?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    title: "On-Camera Reel — Commercial",
    description:
      "Bright, conversational spots and brand-forward on-camera presence.",
    src: "https://player.vimeo.com/video/849974706?badge=0&autopause=0&player_id=0&app_id=58479",
  },
];

export const voiceCategories = [
  {
    id: "demos",
    name: "Full Demos",
    description: "Complete reels — the fastest way to hear the range.",
    tracks: [
      {
        name: "Commercial Demo",
        note: "Warm, conversational, brand-friendly",
        src: "/audio/demos/Commercial_Demo_Moriah_Young.mp3",
      },
      {
        name: "Narration Demo",
        note: "Documentary, e-learning and long-form",
        src: "/audio/demos/Narration_Demo_Moriah_Young.mp3",
      },
    ],
  },
  {
    id: "commercial",
    name: "Commercial Spots",
    description: "Individual reads, straight from the booth.",
    tracks: [
      { name: "Nissan", note: "Confident · Automotive", src: "/audio/commercial/Nissan.mp3" },
      { name: "Asthma PSA", note: "Sincere · Public service", src: "/audio/commercial/PSA.mp3" },
      { name: "Pampers", note: "Tender · Family", src: "/audio/commercial/Pampers.mp3" },
      { name: "Salad", note: "Playful · Lifestyle", src: "/audio/commercial/Salad.mp3" },
      { name: "Spotify", note: "Bright · Youthful", src: "/audio/commercial/Spotify.mp3" },
    ],
  },
];
