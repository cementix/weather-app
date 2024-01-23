import { MapPinIcon } from "@heroicons/react/16/solid";

type Props = {};

function Navbar({}: Props) {
  return (
    <nav className="flex justify-between items-center md:mx-40 sm:mx-20 xs:mx-3 font-montserrat pt-2 h-15">
      <div>
        <h1 className="xs:text-2xl md:text-3xl ">
          WEATHER<span className="text-yellow-500">.CO</span>
        </h1>
      </div>
      <div className="flex justify-between gap-2 items-center">
        <MapPinIcon className="md:size-11 xs:size-7 cursor-pointer" />
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
