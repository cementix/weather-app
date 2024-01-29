import { CurrentWeatherData } from "@/utils/types";

type Props = {
  weatherData: CurrentWeatherData;
};

export default function CurrentWeather({ weatherData }: Props) {
  return (
    <div className="mx-40">
      <h1 className="text-primary text-2xl font-montserrat">
        CURRENT WEATHER:
      </h1>
      <h3>Condition: {weatherData.current.condition.text}</h3>
      <p>Temperature: {weatherData.current.temp_c}°C</p>
      <p>{weatherData.current.feelslike_c}°C</p>
      <img src={weatherData.current.condition.icon} />
    </div>
  );
}
