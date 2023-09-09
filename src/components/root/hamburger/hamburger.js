import { useState } from "react";
import Navigation from "./navigation";

export default function Hamburger() {
    const [menu, setMenu] = useState(true);

    return (
        <>
            <button
                onClick={() => setMenu(!menu)}
            >
                {`menu is ${menu}`}
            </button>
            {menu ? <Navigation menu={menu} setMenu={setMenu} /> : null}
        </>
    );
}
