import { MapPinIcon, SunIcon, MoonIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";

type Props = {};

function Navbar({}: Props) {
  const [isThemeDark, setThemeDark] = useState(false);
  const toggleThemeClasses =
    "md:size-11 xs:size-7 cursor-pointer dark:text-indigo-50";

  useEffect(() => {
    if (isThemeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isThemeDark]);

  return (
    <nav className="flex justify-between items-center md:mx-40 sm:mx-20 xs:mx-3 pt-2 h-15">
      <div>
        <h1 className="xs:text-2xl md:text-3xl dark:text-indigo-50 font-montserrat">
          WEATHER<span className="text-yellow-500">.CO</span>
        </h1>
      </div>
      {isThemeDark ? (
        <SunIcon
          onClick={() => setThemeDark(!isThemeDark)}
          className={toggleThemeClasses}
        />
      ) : (
        <MoonIcon
          onClick={() => setThemeDark(!isThemeDark)}
          className={toggleThemeClasses}
        />
      )}
      <div className="flex justify-between gap-2 items-center">
        <MapPinIcon className="md:size-11 xs:size-7 cursor-pointer dark:text-indigo-50" />
        <input
          type="text"
          placeholder="Your city"
          font-montserrat
          className="xs:h-8 md:h-11 rounded-xl outline-none xs:text-sm md:text-lg pl-3"
        />
      </div>
    </nav>
  );
}

export default Navbar;
