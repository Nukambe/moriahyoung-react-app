import { createContext } from "react";
import { useMediaQuery } from "react-responsive";

export const ScreenContext = createContext();

export const ScreenProvider = props => {
    const mediaQueries = {
        phone: useMediaQuery({ maxWidth: 600 }),
        tablet: useMediaQuery({ maxWidth: 1023 }),
        desktop: useMediaQuery({ maxWidth: 1920 }),
        tv: useMediaQuery({ minWidth: 1921 }),
        isPortrait: useMediaQuery({ orientation: 'portrait' })
    };

    return (
        <ScreenContext.Provider value={mediaQueries}>
            {props.children}
        </ScreenContext.Provider>
    );
}
