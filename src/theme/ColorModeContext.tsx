import * as React from 'react';
import { createTheme,ThemeProvider} from '@mui/material';

interface IColorModeContext {
    toggleColorMode: () => void;
    mode:"dark"|"light";
}
interface IColorModeContextProviderProps {
    children: React.ReactNode;
  }

export const ColorModeContext = React.createContext<IColorModeContext>({
    toggleColorMode: () => {},
    mode:"light"
});

export const ColorModeContextProvider = ({children}: IColorModeContextProviderProps) => {
    const [mode, setMode] = React.useState<"light" | "dark">("light");
    const colorMode= React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
            },
            mode,
        }), 
        [mode]
    );

    const theme = React.useMemo(
        () =>
          createTheme({
            palette: {
              mode,
              ...(mode === 'light' ? {primary: {main: '#f5f2e9'},
                secondary: {main: '#292929'}}:{primary: {main: '#292929'},
                secondary: {main: '#f5f2e9'}})
              
            },
          }),
        [mode],
    );
    
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ColorModeContext.Provider>
    );
    
};

export const useColorMode = () => React.useContext(ColorModeContext);