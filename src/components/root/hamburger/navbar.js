import { NavLink } from "react-router-dom";

const navigationLinks = [
    { title: 'Home', icon: 'fi fi-rr-home', path: '/' },
    { title: 'About', icon: 'fi fi-rr-star', path: '/about' },
    { title: 'On Camera', icon: 'fi fi-rr-camera-movie', path: '/oncamera' },
    { title: 'Voice', icon: 'fi fi-rr-circle-microphone', path: '/voice' },
    { title: 'Contact', icon: 'fi fi-rr-at', path: '/contact' }
];

export default function NavBar() {
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
                    <i
                        className={nav.icon}
                        style={{
                            color: 'white',
                            fontSize: '2em',
                            padding: '0.3em 0'
                        }}
                    />
                </NavLink>
            ))}
        </nav>
    );
}
