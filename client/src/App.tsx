import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "@/components/Navbar.tsx";
import axios from "axios";
import { findMyCoordinates } from "@/utils/currentPosition";
import { API_URL } from "./utils/consts";
import { Coordinates } from "./utils/types";

function App() {
  const [theme, setTheme] = useState<string>("light");
  const [weatherData, setWeatherData] = useState<number[] | null>(null);
  const [locationData, setLocationData] = useState<Coordinates>({
    latitude: 0,
    longitude: 0,
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    try {
      findMyCoordinates(setLocationData);
      if (locationData) {
        async function fetchData() {
          const data = await axios.get(
            `${API_URL}current.json?key=${
              import.meta.env.VITE_REACT_APP_API_KEY
            }&q=${locationData.latitude},${locationData.longitude}`
          );
          console.log(data.data);
        }
        fetchData();
      }
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
