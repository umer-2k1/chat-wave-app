import React, { useState, createContext, ReactNode, useContext } from "react";
import { theDarkTheme, theLightTheme } from "./themeColor";
interface ThemeContextProps {
  theme: object;
  isDark: boolean;
  changeTheme: () => void;
}
interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<any>({});
const ThemeProvider = (props: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState(theLightTheme);
  const [isDark, setDark] = useState(false);

  const changeTheme = () => {
    if (isDark) {
      setTheme(theLightTheme);
      setDark(false);
    } else {
      setTheme(theDarkTheme);
      setDark(true);
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme, isDark }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

// export default themeContextProvider;
const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};
export { useTheme, ThemeProvider };
