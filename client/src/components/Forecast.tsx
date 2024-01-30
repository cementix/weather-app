import React from "react";
import HourIcon from "@/components/HourIcon";
import { CurrentWeatherData } from "@/utils/types";

type Props = {
  weatherData: CurrentWeatherData;
};

export default function Forecast({ weatherData }: Props) {
  if (
    !weatherData.forecast ||
    !weatherData.forecast.forecastday[0] ||
    !weatherData.forecast.forecastday[0].hour
  ) {
    console.error("Data structure is not as expected.");
    return <div>Forecast isn't avaible due to api error.</div>;
  }

  return (
    <div className="flex gap-3 overflow-x-auto">
      {weatherData.forecast.forecastday[0].hour.map(
        (hour: any, index: number) => (
          <HourIcon key={index} />
        )
      )}
    </div>
  );
}
