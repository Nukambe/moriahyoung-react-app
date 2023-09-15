import { useContext } from "react";
import { ScreenContext } from "../../context/ScreenContext";
import { ThemeContext } from "../../context/ThemeContext";
import Footer from "../root/footer";
import headshot from "../../assets/content/Moriah_Young-_0534.jpg";

export default function Home() {
  const mediaQueries = useContext(ScreenContext);
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: mediaQueries.phone ? "80%" : mediaQueries.tablet ? '70%' : '60%',
        margin: "0 auto",
      }}
    >
      <div style={{
        margin: mediaQueries.mobile ? '1em' : '4em 0',
        border: `0.1em solid ${theme.header}`,
        borderRadius: '1em',
        padding: '1em',
        boxShadow: `0.1em 0.1em 0.5em ${'black'}`,
        backgroundColor: theme.primary,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100%'
      }}>
        <div style={{
          borderRadius: '1em',
          padding: '1em',
          boxShadow: '0.1em 0.1em 0.5em black',
          marginBottom: '1em',
          backgroundColor: theme.secondary,
        }}>
          {!mediaQueries.mobile &&
            <h1 style={{
              margin: '0',
              color: 'white'
          }}>Moriah L Young</h1>}
          <h2
            style={{
              textAlign: "center",
              marginTop: mediaQueries.mobile ? '' : '1em',
              color: 'white'
            }}
          >
            Voice Actor + On Camera Talent
          </h2>
        </div>
        <img
          src={headshot}
          alt="headshot"
          style={{
            display: "block",
            width: "10em",
            margin: "0 auto 1em",
            boxShadow: '0.1em 0.1em 0.5em black'
          }}
        />
        <p
          style={{
            margin: "0 auto",
            textAlign: "justify",
            backgroundColor: theme.secondary,
            borderRadius: '1em',
            padding: '1em',
            boxShadow: '0.1em 0.1em 0.5em black',
            color: 'white'
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
      {!mediaQueries.mobile && <Footer />}
    </div>
  );
}
