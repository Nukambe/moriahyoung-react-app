import { NavLink } from "react-router-dom";

export default function MyNavLink({ link }) {
  return (
    <NavLink to={link.path} className="">
      {link.text}
    </NavLink>
  );
}
