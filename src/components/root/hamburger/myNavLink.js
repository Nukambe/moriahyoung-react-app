import { useContext, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { NavLink } from "react-router-dom";

export default function MyNavLink({ link }) {
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);
  const theme = useContext(ThemeContext);

  return (
    <NavLink
      to={link["path"]}
      className="mobile-nav"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setPressed(false);
      }}
      onMouseDown={() => setPressed(true)}
      onTouchStart={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onTouchEnd={() => setPressed(false)}
      style={{
        color: hover ? "white" : theme.header,
        fontWeight: "bold",
        fontSize: "2em",
        padding: "0.5em 2em",
        textAlign: "center",
        backgroundColor: pressed
          ? theme.secondary
          : hover
          ? theme.primary
          : null,
        fontFamily: "cinzel",
        opacity: "100%",
      }}
    >
      {link["text"]}
    </NavLink>
  );
}
