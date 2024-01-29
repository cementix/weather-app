import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "@/components/Navbar.tsx";
import { findMyCoordinates } from "@/utils/currentPosition";
import { toggleTheme } from "@/utils/toggleTheme";
import { fetchData } from "@/utils/api";
import { Coordinates } from "@/utils/types";
import CurrentWeather from "@/components/CurrentWeather";
import loading from "@/assets/loading.json";
import Lottie from "lottie-react";

function App() {
  const [theme, setTheme] = useState<string>("light");
  const [weatherData, setWeatherData] = useState<any>();
  const [locationData, setLocationData] = useState<Coordinates>({
    latitude: 0,
    longitude: 0,
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    findMyCoordinates(setLocationData);
  }, []);

  useEffect(() => {
    fetchData(locationData.latitude, locationData.longitude).then(
      (data: object) => {
        setWeatherData(data);
        setIsLoading(false);
      }
    );
  }, [locationData]);

  useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);

  if (isLoading) {
    return (
      <div className="h-lvh w-lvw flex justify-center items-center">
        <Lottie className="size-64" animationData={loading} />
      </div>
    );
  } else {
    return (
      <div
        className="bg-bkg h-lvh transition-colors duration-500"
        data-theme="dark"
      >
        <Navbar
          onToggleTheme={() => toggleTheme(theme, setTheme)}
          theme={theme}
        />
        <div className="flex flex-col m-auto items-center w-lvw">
          <h2 className="text-primary font-montserrat text-2xl text-center">
            Current location is{" "}
            <span className="text-accent">
              {weatherData.location.name}, {weatherData.location.region},{" "}
              {weatherData.location.country}
            </span>
          </h2>
        </div>
        <CurrentWeather weatherData={weatherData} />
      </div>
    );
  }
}

export default App;
