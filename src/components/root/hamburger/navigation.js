import { useEffect } from "react";
import MyNavLink from "./myNavLink";

const navLinks = [
  { path: "/", text: "HOME" },
  { path: "/about", text: "ABOUT" },
  { path: "/oncamera", text: "ON CAMERA" },
  { path: "/voice", text: "VOICE" },
  { path: "/contact", text: "CONTACT" },
];

export default function Navigation({ setMenu }) {
  return (
    <div className="relative top-0 h-screen" onClick={() => setMenu(false)}>
      <nav className="flex flex-col space-y-8 py-8">
        {navLinks.map((link, index) => (
          <MyNavLink link={link} key={index} />
        ))}
      </nav>
    </div>
  );
}
