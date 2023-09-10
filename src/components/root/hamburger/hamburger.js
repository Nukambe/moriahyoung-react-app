import { useState } from "react";
import Navigation from "./navigation";

export default function Hamburger() {
    const [menu, setMenu] = useState(false);

    return (
        <>
            <div
                style={{
                    marginLeft: '0.5em',
                    
                }}
            >
                <i className="fi fi-bs-menu-burger"
                    onClick={() => setMenu(!menu)}
                    style={{
                        position: 'relative',
                        zIndex: '2',
                        fontSize: '3em',
                        color: menu ? 'white' : 'black'
                    }}></i>
            </div>
            {menu ? <Navigation menu={menu} setMenu={setMenu} /> : null}
        </>
    );
}
