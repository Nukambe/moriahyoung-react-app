import { useContext, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { NavLink } from "react-router-dom";

export default function MyNavLink({ link }) {
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);
  const theme = useContext(ThemeContext);

  return (
    <NavLink to={link.path} className="">
      {link.text}
    </NavLink>
  );
}
