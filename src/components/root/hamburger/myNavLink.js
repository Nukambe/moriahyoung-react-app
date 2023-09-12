import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function MyNavLink({ link }) {
    const [hover, setHover] = useState(false);
    const [pressed, setPressed] = useState(false);

    return (
        <NavLink
        to={link['path']}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => {
            setHover(false)
            setPressed(false)
        }}
        onMouseDown={() => setPressed(true)}
        onTouchStart={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onTouchEnd={() => setPressed(false)}
        style={{
            color: hover ? 'white' : 'white',
            fontWeight: 'bold',
            fontSize: '2em',
            padding: '0.5em 2em',
            textAlign: 'center',
            backgroundColor: pressed ? 'rgb(145, 23, 60)' : hover ? 'rgb(230, 35, 93)' : null,
            fontFamily: 'cinzel',
            opacity: '100%'
        }}
        >
            {link['text']}
        </NavLink>
    );
}