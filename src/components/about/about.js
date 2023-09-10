import avatar from "../../assets/content/Moriah_Young-_Avatar.jpg";
import AboutSection from "./aboutSection";

const abouts = [
  {
    img: avatar,
    alt: "123",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: avatar,
    alt: "123",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: avatar,
    alt: "123",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function About() {
  return (
    <>
      <div
        style={{
          display: "flex",
          height: "7em",
          margin: "2em auto 0",
          alignItems: "center",
          position: "sticky",
          top: "1em",
        }}
      >
        <h2>Moriah</h2>
        <img
          src={avatar}
          alt=""
          style={{
            width: "7em",
            borderRadius: "5em",
            margin: "0 1em",
          }}
        />
        <h2>Who?</h2>
      </div>
      <div>
        {abouts.map((about, index) => (
          <AboutSection key={index} info={about} index={index} />
        ))}
      </div>
    </>
  );
}
