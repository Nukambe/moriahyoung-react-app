import { useContext, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import Navigation from "./navigation";

export default function Hamburger({ bgColor }) {
  const [menu, setMenu] = useState(false);
  const theme = useContext(ThemeContext);

  return (
    <>
      <i
        className="fi fi-bs-menu-burger"
        onClick={() => setMenu(!menu)}
        style={{
          zIndex: "4",
          margin: "0.5em 0.5em 0.2em",
          fontSize: "2em",
          color: menu ? theme.header : "white",
        }}
      ></i>
      {menu ? <Navigation menu={menu} setMenu={setMenu} /> : null}
    </>
  );
}
