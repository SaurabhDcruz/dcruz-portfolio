import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { ThemeType } from "./Theme.modal";
import { THEMES } from "./Theme.config";


export const ThemeContext = React.createContext({
  themeType: "light",
  Color: THEMES["light"],
});


export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeType>("light");

  return (
    <ThemeContext.Provider
      value={{
        themeType: currentTheme,
        Color: THEMES[currentTheme],
        setCurrentTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
