import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "@/components/Navbar.tsx";
import axios from "axios";

function App() {
  const [theme, setTheme] = useState<string>("light");
  const [weatherData, setWeatherData] = useState<number[] | null>(null);
  const [locationData, setLocationData] = useState<object | null>(null);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    try {
      function findMyCoordinates() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setLocationData({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
              console.log(locationData);
            },
            (err) => {
              alert(err.message);
            }
          );
        } else {
          alert("Geolocation is not supported by your browser");
        }
      }
      findMyCoordinates();
    } catch (e) {
      console.log(e);
    }
  }, [weatherData]);

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
