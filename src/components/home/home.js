import headshot from "../../assets/content/Moriah_Young-_0534.jpg";
// import SocialLinks from "../socials/socials";

export default function Home() {
  return (
    <div style={{
      width: '80%',
      margin: '0 auto'
    }}>
      <h2
        style={{
          textAlign: "center",
        }}
      >
        Voice Actor + On Camera Talent
      </h2>
      <img
        src={headshot}
        alt="headshot"
        style={{
          display: "block",
          width: "10em",
          margin: "0 auto 2em",
        }}
      />
      <p
        style={{
          margin: "0 auto",
          textAlign: "justify",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
}
