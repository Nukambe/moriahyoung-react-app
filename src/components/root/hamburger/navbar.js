import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavPopOut from "./navPopOut";

const navigationLinks = [
    { title: 'Home', icon: 'fi fi-rr-home', path: '/' },
    { title: 'About', icon: 'fi fi-rr-star', path: '/about' },
    { title: 'On Camera', icon: 'fi fi-rr-camera-movie', path: '/oncamera' },
    { title: 'Voice', icon: 'fi fi-rr-circle-microphone', path: '/voice' },
    { title: 'Contact', icon: 'fi fi-rr-at', path: '/contact' }
];

export default function NavBar() {
    const [linkHover, setLinkHover] = useState(false);

    function hoverNavLink(hover) {
        if (hover) {
            setLinkHover(true);
        } else {
            console.log('stop hover')
        }
    }

    return (
        <nav
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                rowGap: '2em',
                width: '4em'
            }}
        >
            {navigationLinks.map((nav, index) => (
                <NavLink
                    key={index}
                    to={nav.path}
                    className='rail-link'
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <div style={{
                        padding: '0.3em 0',
                        display: 'flex'
                    }}>
                        <i
                            className={nav.icon}
                            style={{
                                color: 'white',
                                fontSize: '2em',

                            }}
                        />
                        <NavPopOut title={nav.title} />
                    </div>
                </NavLink>
            ))}
        </nav>
    );
}
