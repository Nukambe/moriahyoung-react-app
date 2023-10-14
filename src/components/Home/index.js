// import HomeBG from "../../assets/content/0463-_Moriah_Young-_Larger_File.jpg";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          backgroundImage: "url(images/0463-_Moriah_Young-_Larger_File.jpg)",
          backgroundSize: "cover",
          position: "absolute",
          top: "0",
          width: "100%",
          height: "100vh",
          zIndex: "-2",
        }}
      />
      <div
        style={{
          backgroundColor: "black",
          opacity: "32%",
          position: "absolute",
          top: "0",
          width: "100%",
          height: "100vh",
          zIndex: "-1",
        }}
      />
      <div
        style={{
          margin: "10% 1em",
        }}
      >
        <h1
          style={{
            fontSize: "4em",
            margin: "0",
            color: "white",
          }}
        >
          MORIAH <span style={{ color: "white" }}>YOUNG</span>
        </h1>
        <h2
          style={{
            fontSize: "1.5em",
            margin: "0",
            color: 'white'
          }}
        >
          AFRICAN AMERICAN FEMALE VOICE ACTOR
        </h2>
        <h2
          style={{
            fontSize: "2em",
            margin: "0",
            color: 'white'
          }}
        >
          SOOOOTHING VOICE
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "2em",
        }}
      >
        <button
          style={{
            width: "50%",
            margin: "0 auto 2em",
            fontSize: "1em",
          }}
        >
          LISTEN NOW
        </button>
        <button
          style={{
            border: "none",
            backgroundColor: "unset",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          SCROLL DOWN<span>V</span>
          <span>V</span>
        </button>
      </div>
    </div>
  );
}
