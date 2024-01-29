import { MapPinIcon, SunIcon, MoonIcon } from "@heroicons/react/16/solid";

type Props = {
  onToggleTheme: () => void;
  theme: string;
};

function Navbar({ onToggleTheme, theme }: Props) {
  const toggleThemeClass = "text-primary md:size-11 xs:size-7 cursor-pointer";

  return (
    <nav className="flex xs:gap-3 xs:justify-center s:justify-between items-center md:mx-40 sm:mx-20 xs:mx-3 xs:flex-wrap pt-2 h-15 mb-11">
      <div>
        <h1 className="xs:text-2xl xs:hidden s:block md:text-3xl font-montserrat text-primary">
          WEATHER<span className="text-accent">.CO</span>
        </h1>
      </div>
      {theme === "dark" ? (
        <SunIcon onClick={onToggleTheme} className={toggleThemeClass} />
      ) : (
        <MoonIcon onClick={onToggleTheme} className={toggleThemeClass} />
      )}

      <div className="flex justify-between gap-2 items-center">
        <MapPinIcon className="md:size-11 xs:size-7 cursor-pointer text-primary" />
        <input
          type="text"
          placeholder="Your city"
          className="xs:h-8 md:h-11 rounded-xl outline-none xs:text-sm md:text-lg pl-3"
        />
      </div>
    </nav>
  );
}

export default Navbar;
