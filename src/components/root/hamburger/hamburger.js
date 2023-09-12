import { useState } from "react";
import Navigation from "./navigation";

export default function Hamburger({ bgColor }) {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <i
        className="fi fi-bs-menu-burger"
        onClick={() => setMenu(!menu)}
        style={{
          zIndex: "4",
          margin: "0.5em 0.5em 0.2em",
          fontSize: "2em",
          color: menu ? "rgb(230, 35, 93)" : "white",
        }}
      ></i>
      {menu ? <Navigation menu={menu} setMenu={setMenu} /> : null}
    </>
  );
}
