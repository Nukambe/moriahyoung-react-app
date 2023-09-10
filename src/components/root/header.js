import { Route, Routes } from 'react-router-dom';
import Hamburger from './hamburger/hamburger';
import './header.css'

const headings = [
    {path: '/', heading: 'Morial L Young'},
    {path: '/about', heading: 'BEHIND THE SCENES'},
    {path: '/oncamera', heading: 'LIGHTS, CAMERA, ACTION'},
    {path: '/voice', heading: 'BEHIND THE MIC'},
    {path: '/creator', heading: 'INSIDE THE MIND'},
    {path: '/contact', heading: 'CONTACT ME'}
];

export default function Header() {
    return (
        <header style={{
            display: 'flex'
        }}>
            <Hamburger />
            <Routes>
                {headings.map((heading, index) => (
                    <Route 
                        key={index} 
                        path={heading['path']} 
                        element={
                            <h1 style={{
                                margin: '0.1em auto',
                                textAlign: 'center',
                                padding: '0 0.5em'
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
