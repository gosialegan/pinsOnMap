import { random } from "../utils/random";
import { pin } from "../interface/pin";

export const updateFleet = (fleet: any) => {
  fleet.map((user: pin, idx: number) => {
    if (user.latitude > -85 && user.latitude < 85) {
      user.latitude = user.latitude + random(-5, 5);
    } else user.latitude = random(-90, 90);

    if (user.longtitude > -175 && user.longtitude < 175) {
      user.longtitude = user.longtitude + random(-5, 5);
    } else user.longtitude = random(-180, 180);
  });
  return fleet;
};
