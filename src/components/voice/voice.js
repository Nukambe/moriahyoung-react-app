import { useContext } from "react";
import { ScreenContext } from "../../context/ScreenContext";
import Footer from "../root/footer";
import avatar from "../../assets/content/Moriah_Young-_Avatar.jpg";
import studio from "../../assets/content/mystudio.jpg";

const demos = [
  { title: "Commercial", src: "Commercial_Demo_Moriah_Young.mp3", link: 'https://soundcloud.com/moriah-young-463207945/commercial-demo?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
  { title: "Narration", src: "Narration_Demo_Moriah_Young.mp3", link: 'https://soundcloud.com/moriah-young-463207945/narration-demo?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
];

export default function Voice() {
  const mediaQueries = useContext(ScreenContext);

  return (
    <div style={{
      margin: '0 auto',
      width: '80%',
      minWidth: mediaQueries.mobile ? '400px' : '1000px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <div style={{
        display: !mediaQueries.mobile && 'flex',
        marginTop: '3em',
        justifyContent: 'center'
      }}>
        <div style={{
          width: '50%'
        }}>
          <img
            src={avatar}
            alt="avatar"
            style={{
              width: "8em",
              borderRadius: "5em",
              boxShadow: '0.2em 0.2em 1em gray',
              display: "block",
              margin: "2em auto 0",
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
              <figure style={{
                border: '0.1em solid gray',
                borderRadius: '5em',
                padding: '0.5em 1em',
                boxShadow: '0.1em 0.1em 0.1em gray'
              }}>
                <figcaption style={{
                  paddingLeft: '2em',
                  marginBottom: '0.2em'
                }}>{demo.title}</figcaption>
                <audio controls src={`audio/${demo.src}`}>
                  <a href={demo.link}>Play on SoundCloud</a>
                </audio>
              </figure>
            </div>
          ))}
        </div>
        <div style={{
          border: '0.1em solid gray',
          borderRadius: '1em',
          boxShadow: '0.1em 0.1em 0.1em gray',
          width: mediaQueries.mobile ? '100%' : '50%'
        }}>
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
              flexDirection: 'column',
              justifyContent: "space-between",
              width: "16em",
              margin: "0 auto",
            }}
          >
            <img
              src={studio}
              alt="studio"
              style={{
                borderTop: '0.1em solid darkred',
                borderRight: '0.1em solid darkred',
                borderLeft: '0.1em solid lightblue',
                borderBottom: '0.1em solid lightblue',
                boxShadow: '1em -1em 0 lightblue, -1em 0.5em 0 darkred'
              }}
            />
            <p
              style={{
                textAlign: "justify",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      {!mediaQueries.mobile && <Footer />}
    </div>
  );
}
