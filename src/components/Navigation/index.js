import { useEffect } from 'react';
import NavigationLink from "./NavigationLink";
import Socials from '../Socials';

export default function Navigation() {
  useEffect(() => {
    const home = document.getElementById('home');
    const voice = document.getElementById("voice");
  });

  return (
    <div style={{
      position: 'sticky',
      top: '0',
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <nav
        style={{
          display: "flex",
          gap: '1em',
          padding: '0.5em 1em'
        }}
      >
        <NavigationLink page="home">HOME</NavigationLink>
        <NavigationLink page="voice">VOICE</NavigationLink>
        <NavigationLink page="video">VIDEO</NavigationLink>
        <NavigationLink page="about">ABOUT</NavigationLink>
        <NavigationLink page="contact">CONTACT</NavigationLink>
      </nav>
      <Socials />
    </div>
  );
}
