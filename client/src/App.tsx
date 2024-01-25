import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "@/components/Navbar.tsx";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div
      className="bg-bkg h-lvh transition-colors duration-500"
      data-theme="dark"
    >
      <Navbar onToggleTheme={toggleTheme} theme={theme} />
    </div>
  );
}

export default App;
