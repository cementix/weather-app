import { CurrentWeatherData } from "@/utils/types";

type Props = {
  weatherData: CurrentWeatherData;
};

export default function CurrentWeather({ weatherData }: Props) {
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-primary text-2xl font-montserrat text-nowrap">
        CURRENT WEATHER:
      </h1>
      <h3 className="text-xl text-primary">
        {weatherData.current.condition.text}
      </h3>
      <div className="flex items-center">
        <p className="text-2xl font-montserrat text-accent">
          <b>{weatherData.current.temp_c}°C</b>
        </p>
        <img src={weatherData.current.condition.icon} className="h-24" />
      </div>
      <p className="text-xl text-nowrap text-primary">
        Feels like: <b>{weatherData.current.feelslike_c}°C</b>
      </p>
      <p className="text-sm text-nowrap text-primary">
        Last updated: <b>{weatherData.current.last_updated}</b>
      </p>
    </div>
  );
}
