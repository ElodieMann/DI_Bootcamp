import React from "react";
import { useTheme } from "./ThemeContext";

const Card = () => {
  const { theme, toggleTheme } = useTheme();

  return (
      <div className={` ${theme === "light" ? "light" : "dark"}`} style={{width: '300px', height: '300px'}}>
    </div>
  );
};

export default Card;
