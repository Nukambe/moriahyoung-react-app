import { Route, Routes } from 'react-router-dom';
import Hamburger from './hamburger/hamburger';
import './header.css'

const headings = [
    {path: '/', heading: 'Moriah L Young', size: '2em'},
    {path: '/about', heading: 'BEHIND THE SCENES', size: '1.5em'},
    {path: '/oncamera', heading: 'LIGHTS, CAMERA, ACTION', size: '1.4em'},
    {path: '/voice', heading: 'BEHIND THE MIC', size: '2em'},
    {path: '/creator', heading: 'INSIDE THE MIND', size: '2em'},
    {path: '/contact', heading: 'CONTACT ME', size: '2em'}
];

const headerBackgroundColor = 'rgb(230, 35, 93)';

export default function Header() {
    return (
        <header style={{
            backgroundColor: headerBackgroundColor,
            display: 'flex',
            alignItems: 'center',
            position: 'sticky',
            top: '0',
            zIndex: '2',
        }}>
            <Hamburger bgColor={headerBackgroundColor} />
            <Routes>
                {headings.map((heading, index) => (
                    <Route 
                        key={index} 
                        path={heading['path']} 
                        element={
                            <h1 style={{
                                color: 'white',
                                margin: '0.5em auto',
                                textAlign: 'center',
                                fontSize: heading['size'],
                                lineHeight: '1'
                            }}>
                                {heading['heading']}
                            </h1>
                        } />
                ))}
                <Route path="*" element={null} />
            </Routes>
        </header>
    );
}
