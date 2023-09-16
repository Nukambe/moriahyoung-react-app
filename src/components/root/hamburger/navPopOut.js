import { useContext } from "react";
import { ThemeContext } from '../../../context/ThemeContext';

export default function NavPopOut({ title }) {
    const theme = useContext(ThemeContext);

    return (
        <div
            className={`nav-pop`}
            style={{
                position: 'absolute',
                left: '4em',
                border: '0.5em solid',
                borderColor: theme.primary,
                borderRadius: '0% 1em 1em 0%',
                backgroundColor: theme.secondary,
                width: 'fit-content',
                height: '2em',
                zIndex: '-20'
            }}>
            <h2 style={{
                margin: '0',
                padding: '0 0.5em',
                fontSize: '1.2em',
                whiteSpace: 'nowrap'
            }}>{title || 'Page Title'}</h2>
        </div>
    );
}
