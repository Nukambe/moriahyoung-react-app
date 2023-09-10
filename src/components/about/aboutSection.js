export default function AboutSection({ info, index }) {
  return (
    <div
      style={{
        display: "flex",
        margin: "1em",
        justifyContent: "space-between",
        flexDirection: index % 2 === 0 ? "row-reverse" : "row",
      }}
    >
      <img
        src={info["img"]}
        alt={info["alt"]}
        style={{
          width: "auto",
          height: "auto",
          maxWidth: "5em",
          maxHeight: "5em",
        }}
      />
      <p
        style={{
          textAlign: "justify",
          width: "70%",
          margin: "0",
        }}
      >
        {info["description"]}
      </p>
    </div>
  );
}
