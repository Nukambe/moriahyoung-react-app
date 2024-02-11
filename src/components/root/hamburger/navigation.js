import MyNavLink from "./myNavLink";
import { motion } from "framer-motion";

const navLinks = [
  { path: "/", text: "HOME" },
  { path: "/about", text: "ABOUT" },
  { path: "/oncamera", text: "ON CAMERA" },
  { path: "/voice", text: "VOICE" },
  { path: "/contact", text: "CONTACT" },
];

export default function Navigation({ setMenu }) {
  return (
    <motion.div
      className="relative top-0 h-screen"
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-100%" }}
      onClick={() => setMenu(false)}
    >
      <nav className="flex flex-col space-y-8 py-8">
        {navLinks.map((link, index) => (
          <MyNavLink link={link} key={index} />
        ))}
      </nav>
    </motion.div>
  );
}
