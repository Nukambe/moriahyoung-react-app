import { useEffect, useState } from 'react';
import MyNavLink from './myNavLink';

const navLinks = [
    { path: '/', text: 'HOME' },
    { path: '/about', text: 'ABOUT' },
    { path: '/oncamera', text: 'ON CAMERA' },
    { path: '/voice', text: 'VOICE' },
    { path: '/contact', text: 'CONTACT' }
];

export default function Navigation({ menu, setMenu }) {
    const [visibility, setVisibility] = useState(false);

    useEffect(() => {
        const visibilityTimer = setTimeout(() => {
            setVisibility(true);
        }, 100);

        return () => {
            clearTimeout(visibilityTimer);
        }
    }, []);

    return (
        <div
            onClick={() => setMenu(false)}
            style={{
                position: 'absolute',
                top: '0',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'black',
                opacity: visibility ? '80%' : '0%',
                transition: 'opacity 0.1s'
            }}
        >
            <nav
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: 'white'
                }}
            >
                {navLinks.map((link, index) => (
                    <MyNavLink link={link} key={index} />
                ))}
            </nav>
        </div>
    );
}
