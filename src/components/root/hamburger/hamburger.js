import { useState } from "react";
import Navigation from "./navigation";

export default function Hamburger() {
  const [menu, setMenu] = useState(false);

  return (
    <>
        <i
          className="fi fi-bs-menu-burger"
          onClick={() => setMenu(!menu)}
          style={{
            zIndex: "4",
            margin: '0.5em',
            fontSize: "2em",
            color: menu ? "white" : "black",
          }}
        ></i>
      {menu ? <Navigation menu={menu} setMenu={setMenu} /> : null}
    </>
  );
}
