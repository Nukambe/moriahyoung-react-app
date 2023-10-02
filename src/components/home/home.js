import { useContext } from "react";
import { ScreenContext } from "../../context/ScreenContext";
import { ThemeContext } from "../../context/ThemeContext";
import Footer from "../root/footer";
import headshot from "../../assets/content/0463-_Moriah_Young-_Larger_File.jpg";

export default function Home() {
  const mediaQueries = useContext(ScreenContext);
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: mediaQueries.phone ? "95%" : mediaQueries.tablet ? "70%" : "60%",
        maxWidth: mediaQueries.mobile ? "100%" : "50%",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          margin: mediaQueries.mobile ? "1em" : "4em 0",
          border: `0.1em solid ${theme.header}`,
          borderRadius: "1em",
          padding: "1em",
          boxShadow: `0.1em 0.1em 0.5em black`,
          backgroundColor: theme.primary,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          height: "100%",
        }}
      >
        <div
          style={{
            borderRadius: "1em",
            padding: "1em",
            boxShadow: "0.1em 0.1em 0.5em black",
            marginBottom: "1em",
            backgroundColor: theme.secondary,
          }}
        >
          {!mediaQueries.mobile && (
            <h1
              style={{
                margin: "0",
                color: "white",
                textAlign: "center",
              }}
            >
              Moriah L Young
            </h1>
          )}
          <h2
            style={{
              textAlign: "center",
              marginTop: mediaQueries.mobile ? "" : "1em",
              color: "white",
            }}
          >
            Voice Actor + On Camera Talent
          </h2>
        </div>
        <img
          src={headshot}
          alt="headshot"
          style={{
            // display: "block",
            maxWidth: mediaQueries.mobile ? "100%" : "50%",
            maxHeight: mediaQueries.mobile ? "24em" : "auto",
            margin: "0 auto 1em",
            boxShadow: "0.1em 0.1em 0.5em black",
            borderRadius: "1em",
          }}
        />
        <p
          style={{
            margin: "0 auto",
            textAlign: "justify",
            backgroundColor: theme.secondary,
            borderRadius: "1em",
            padding: "1em",
            boxShadow: "0.1em 0.1em 0.5em black",
            color: "white",
          }}
        >
          Welcome to the virtual home of a woman who thrives off the entertainment of others. Moriah Young is a voice over artist and on screen talent who loves little more than bringing smiles, joy and thought provoking emotions out of people. Please make yourself at home (browse) and see what she’s all about!
        </p>
      </div>
      {!mediaQueries.mobile && <Footer />}
    </div>
  );
}
