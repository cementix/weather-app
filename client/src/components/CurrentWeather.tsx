import { CurrentWeatherData } from "@/utils/types";
import { WiStrongWind } from "react-icons/wi";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

type Props = {
  weatherData: CurrentWeatherData;
};

export default function CurrentWeather({ weatherData }: Props) {
  console.log(weatherData.forecast);
  return (
    <div>
      <CardContainer>
        <CardBody className="bg-primary relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border flex flex-col items-center  ">
          <CardItem
            translateZ="50"
            className="text-bkg text-2xl font-montserrat text-nowrap"
          >
            CURRENT WEATHER
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-accent font-bold text-3xl max-w-sm mt-2 dark:text-neutral-300"
          >
            {weatherData.current.condition.text}
          </CardItem>
          <CardItem translateZ="100" className="">
            <img
              src={weatherData.current.condition.icon}
              height={200}
              width={200}
            />
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-bkg text-xl max-w-sm mt-2 dark:text-neutral-300"
          >
            Feels like:{" "}
            <b className="text-accent">{weatherData.current.feelslike_c}°C</b>
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-bkg text-xl max-w-sm mt-2 dark:text-neutral-300"
          >
            Last updated:{" "}
            <b className="text-accent">{weatherData.current.last_updated}</b>
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
}
