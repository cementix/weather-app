import { AnimatedTooltip } from "./ui/animated-tooltip";

const DayAstro = ({ forecastData }: { forecastData: any }) => {
  console.log(forecastData);
  const forecast = [
    {
      id: 1,
      name: "Sunset",
      designation: forecastData.sunset,
      image:
        "https://t4.ftcdn.net/jpg/00/67/24/59/360_F_67245954_ejVa8C414CwJ9X0UadIFu1QEUjeLuFnO.jpg",
    },
    {
      id: 2,
      name: "Sunrise",
      designation: forecastData.sunrise,
      image:
        "https://media.istockphoto.com/id/531253600/photo/sunrise.jpg?s=612x612&w=0&k=20&c=gdlZaKWcTjW1hmTRN8veqYIV25O4OfN4MhNx2H5Rgnk=",
    },
    {
      id: 3,
      name: "Moonset",
      designation: forecastData.moonset,
      image:
        "https://i.pinimg.com/236x/8d/d3/61/8dd361e8ed81de7b470483aaa782997c.jpg",
    },
    {
      id: 4,
      name: "Moonrise",
      designation: forecastData.moonrise,
      image:
        "https://c4.wallpaperflare.com/wallpaper/42/278/440/moonset-wallpaper-preview.jpg",
    },
    {
      id: 5,
      name: "Moon phase",
      designation: forecastData.moon_phase,
      image:
        "https://telescope.live/sites/default/files/styles/front_page_obs_w696_h452/public/2021-04/169369439_10225426809167693_4170287424818897502_n.png?itok=Wjwv4vdz",
    },
  ];
  return (
    <div className="flex flex-row gap-4 items-center justify-center mb-10 w-full h-72">
      <AnimatedTooltip items={forecast} />
    </div>
  );
};

export default DayAstro;
