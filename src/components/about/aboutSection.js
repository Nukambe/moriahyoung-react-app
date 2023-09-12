export default function AboutSection({ info, index }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: 'column',
        margin: "3em 3em",
        justifyContent: "space-between",
        alignItems: 'center',
        borderTop: '0.1em solid lightgray',
      }}
    >
      <img
        src={info["img"]}
        alt={info["alt"]}
        style={{
          width: "auto",
          height: "auto",
          maxWidth: "100%",
          maxHeight: "100%",
          margin: '2em 0 1em',
          boxShadow: '0em -0em 0.5em gray'
        }}
      />
      <p
        style={{
          textAlign: "justify",
          margin: "0",
        }}
      >
        {info["description"]}
      </p>
    </div>
  );
}
