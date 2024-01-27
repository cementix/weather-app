import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "@/components/Navbar.tsx";
import { findMyCoordinates } from "@/utils/currentPosition";
import { toggleTheme } from "@/utils/toggleTheme";
import { fetchData } from "@/utils/api";
import { Coordinates, CurrentWeather } from "@/utils/types";
import WeatherBlock from "@/components/CurrentWeatherBlock";

function App() {
  const [theme, setTheme] = useState<string>("light");
  const [weatherData, setWeatherData] = useState<any>();
  const [locationData, setLocationData] = useState<Coordinates>({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    findMyCoordinates(setLocationData);
  }, []);

  useEffect(() => {
    fetchData(locationData.latitude, locationData.longitude).then(
      (data: object) => {
        setWeatherData(data);
        console.log(weatherData);
      }
    );
  }, [locationData]);

  return (
    <div
      className="bg-bkg h-lvh transition-colors duration-500"
      data-theme="dark"
    >
      <Navbar
        onToggleTheme={() => toggleTheme(theme, setTheme)}
        theme={theme}
      />
      <WeatherBlock />
    </div>
  );
}

export default App;
