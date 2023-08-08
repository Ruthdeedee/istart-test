import React, { useContext } from 'react'
import './darkMode.css'
import { ThemeContext, ThemeProvider } from "../context/ThemeContext";

const DarkMode = () => {
    const { toggle, mode } = useContext( ThemeContext)
    return (<ThemeProvider>
        <div className="container" onClick={toggle}>
            <div className="icon">🌙</div>
            <div className="icon">🔆 </div>
            <div className="ball" style={mode === "dark" ? { left: "2px" } : { right: "2px" }}/>
        </div>
        </ThemeProvider>
    )
}

export default DarkMode