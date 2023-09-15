import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { ScreenContext } from "../../context/ScreenContext";

export default function AboutSection({ info, index }) {
  const theme = useContext(ThemeContext);
  const mediaQueries = useContext(ScreenContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: 'column',
        margin: "3em 3em",
        justifyContent: "space-between",
        alignItems: 'center',
        borderTop: `0.1em solid ${theme.header}`,
      }}
    >
      <img
        src={info["img"]}
        alt={info["alt"]}
        style={{
          width: "auto",
          height: "auto",
          maxWidth: mediaQueries.mobile? "100%" : '25em',
          maxHeight: "100%",
          margin: '2em 0 1em',
          boxShadow: '0em -0em 0.5em black'
        }}
      />
      <p
        style={{
          textAlign: "justify",
          margin: "0",
          color: 'white'
        }}
      >
        {info["description"]}
      </p>
    </div>
  );
}
