import { useContext } from 'react';
import { ScreenContext } from '../../context/ScreenContext';
// import { ThemeContext } from '../../context/ThemeContext';
import Footer from '../root/footer';
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
  const mediaQueries = useContext(ScreenContext);
  // const theme = useContext(ThemeContext);

  return (
    <div style={{
      width: mediaQueries.mobile ? '90%' : '70%',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      // backgroundColor: theme.primary
    }}>
      <div
        style={{
          display: "flex",
          height: "7em",
          margin: "1em auto",
          alignItems: "center",
          width: 'fit-content'
        }}
      >
        <h2 style={{ width: '3.5em', textAlign: 'center', color: 'white'}}>Moriah</h2>
        <img
          src={avatar}
          alt=""
          style={{
            width: "7em",
            borderRadius: "5em",
            boxShadow: '0em 0em 0.5em black',
            margin: "0 1em",
          }}
        />
        <h2 style={{ width: '3.5em', textAlign: 'center', color: 'white'}}>Who?</h2>
      </div>
      <p style={{
        width: '80%',
        textAlign: 'justify',
        margin: '0 auto',
        color: 'white'
      }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div>
        {abouts.map((about, index) => (
          <AboutSection key={index} info={about} index={index} />
        ))}
      </div>
      {!mediaQueries.mobile && <Footer />}
    </div>
  );
}
