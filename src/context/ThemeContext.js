import { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = props => {
    const themeColors = {
        background: '#161B1F',
        header: '#B98D72',
        primary: '#57233A',
        secondary: '#AE4951'
    };

    return (
        <ThemeContext.Provider value={themeColors}>
            {props.children}
        </ThemeContext.Provider>
    );
}
