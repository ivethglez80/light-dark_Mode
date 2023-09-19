import './App.css';
import Form from "./components/Form"
import { createContext, useState } from 'react';
import ReactSwitch from "react-switch"

export const ThemeMode = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () =>{
    setTheme((curr)=>(curr==="light" ? "dark" : "light"));
  }

  return (
    <ThemeMode.Provider value={{theme, toggleTheme}}>
    <div className="App" id={theme}>
      <Form />
      <div className="themeswitch">
        <label>{theme==="light" ? "Light mode" : "Dark mode"}</label>
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
      </div>
    </div>
    </ThemeMode.Provider>
  );
}

export default App;
