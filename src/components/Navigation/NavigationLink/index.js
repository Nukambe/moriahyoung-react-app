import { useRef } from "react";
import { NavLink } from "react-router-dom";

export default function NavigationLink({ children, page }) {
  const pageRef = useRef(document.getElementById(page));

  function clickLink(event) {
    event.preventDefault();
    if (!pageRef.current) pageRef.current = document.getElementById(page);
    if (page === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      pageRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }

    return <NavLink onClick={(e) => clickLink(e)} style={{
        textDecoration: 'none',
        color: 'red'
  }}>{children}</NavLink>;
}
