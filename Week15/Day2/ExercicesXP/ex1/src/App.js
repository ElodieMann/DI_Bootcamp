import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import './App.css'
import Card from "./Card";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  console.log('====================================');
  console.log(theme);
  console.log('====================================');

  return (
    <div className={` ${theme === 'light' ? 'light' : 'dark'}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Theme Switcher Example</h1>
        <ThemeSwitcher />
        <Card />
      </div>
    </ThemeProvider>
  );
}

export default App;