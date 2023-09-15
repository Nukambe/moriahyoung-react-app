import { Route, Routes } from 'react-router-dom';
import { ScreenContext } from '../../context/ScreenContext';
import { ThemeContext } from '../../context/ThemeContext';
import Hamburger from './hamburger/hamburger';
import './header.css'
import { useContext } from 'react';
import NavBar from './hamburger/navbar';

const headings = [
    { path: '/', heading: 'Moriah L Young', size: '2em' },
    { path: '/about', heading: 'BEHIND THE SCENES', size: '1.5em' },
    { path: '/oncamera', heading: 'LIGHTS, CAMERA, ACTION', size: '1.4em' },
    { path: '/voice', heading: 'BEHIND THE MIC', size: '2em' },
    { path: '/creator', heading: 'INSIDE THE MIND', size: '2em' },
    { path: '/contact', heading: 'CONTACT ME', size: '2em' }
];

const headerBackgroundColor = 'rgb(230, 35, 93)';

export default function Header() {
    const mediaQueries = useContext(ScreenContext);
    const theme = useContext(ThemeContext);

    return (
        <header style={{
            backgroundColor: theme.header,
            boxShadow: '0.1em 0em 0.2em ',
            display: 'flex',
            flexDirection: mediaQueries.mobile ? 'row' : 'column',
            height: mediaQueries.mobile ? '' : '100vh',
            alignItems: 'center',
            position: 'sticky',
            top: '0',
            zIndex: '2',
        }}>
            {mediaQueries.mobile &&
                (<>
                    <Hamburger bgColor={headerBackgroundColor} />
                    <Routes>
                        {headings.map((heading, index) => (
                            <Route
                                key={index}
                                path={heading['path']}
                                element={
                                    <h1 style={{
                                        color: 'white',
                                        margin: `0.5em ${mediaQueries.mobile ? '' : 'auto'}`,
                                        fontSize: mediaQueries.mobile ? heading.size : '2em',
                                        lineHeight: '1'
                                    }}>
                                        {heading['heading']}
                                    </h1>
                                } />
                        ))}
                        <Route path="*" element={null} />
                    </Routes>
                </>)}
            {!mediaQueries.mobile && <NavBar />}
        </header>
    );
}
