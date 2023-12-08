import { useState } from "react";
import Navigation from "./navigation";

export default function Hamburger() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="md:hidden flex justify-end text-5xl px-4 bg-rose-600 text-white relative w-full flex-col">
      <i
        className={`fi ${menu ? "fi-rr-cross" : "fi-rr-menu-burger"} mt-2`}
        onClick={() => setMenu(!menu)}
      />
      {menu ? <Navigation menu={menu} setMenu={setMenu} /> : null}
    </div>
  );
}
