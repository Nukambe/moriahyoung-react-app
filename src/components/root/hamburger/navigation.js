import { NavLink } from "react-router-dom";
import './navigation.css';

export default function Navigation() {
    return (
        <div
            style={{
                position: 'absolute',
                top: '0',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <nav
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <NavLink to='/'>HOME</NavLink>
                <NavLink to='/about'>ABOUT</NavLink>
                <NavLink to='/oncamera'>ON CAMERA</NavLink>
                <NavLink to='/voice'>VOICE</NavLink>
                <NavLink to='/contact'>CONTACT</NavLink>
            </nav>
        </div>
    );
}
