import { Coordinates } from "./types";

export const findMyCoordinates = (
  setLocationData: React.Dispatch<React.SetStateAction<Coordinates>>
): void => {
  try {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocationData({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      console.log("Your browser doesn't support this feature :(");
    }
  } catch (e) {
    console.log(e);
  }
};
