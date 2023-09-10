import avatar from "../../assets/content/Moriah_Young-_Avatar.jpg";

const demos = [
  { title: "Commercial", icon: "", url: "" },
  { title: "Narration", icon: "", url: "" },
];

export default function Voice() {
  return (
    <div>
      <img
        src={avatar}
        alt="avatar"
        style={{
          width: "4em",
          borderRadius: "5em",
          display: "block",
          margin: "3em auto 0",
        }}
      />
      <h2
        style={{
          textAlign: "center",
        }}
      >
        Demos
      </h2>
      {demos.map((demo, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <i
            className="fi fi-rr-play"
            style={{
              marginRight: "1em",
            }}
          ></i>
          <p>{demo["title"]} audio...</p>
        </div>
      ))}
      <h2
        style={{
          textAlign: "center",
        }}
      >
        Studio
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "16em",
          margin: "0 auto",
        }}
      >
        <img src="" alt="studio" />
        <p
          style={{
            textAlign: "justify",
            width: "75%",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}
