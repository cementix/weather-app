import { CurrentWeatherData } from "@/utils/types";

type Props = {
  weatherData: CurrentWeatherData;
};

export default function CurrentWeather({ weatherData }: Props) {
  return (
    <div className="mx-40 flex justify-center flex-col items-center">
      <h1 className="text-primary text-2xl font-montserrat">
        CURRENT WEATHER:
      </h1>
      <h3 className="text-xl">{weatherData.current.condition.text}</h3>
      <div className="flex items-center">
        <p className="text-2xl font-montserrat">
          <b>{weatherData.current.temp_c}°C</b>
        </p>
        <img src={weatherData.current.condition.icon} className="h-24" />
      </div>
      <p className="text-xl">
        Feels like: <b>{weatherData.current.feelslike_c}°C</b>
      </p>
    </div>
  );
}
