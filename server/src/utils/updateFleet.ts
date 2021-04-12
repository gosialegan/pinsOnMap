import { random } from "../utils/random";
import { pin } from "../interface/pin";

/**
 * * Here we update coords of our "fleet of planes"
 * * * latitue -90 to 90, longitude -180 to 180
 * * We randomize our movment by +/- 5, if our plane wants to see whats on the oder side (tries to go out of coords range) we randomize it's location once again
 */

export const updateFleet = (fleet: any) => {
  fleet.map((user: pin) => {
    if (user.latitude > -85 && user.latitude < 85) {
      user.latitude = user.latitude + random(-5, 5);
    } else user.latitude = random(-90, 90);

    if (user.longtitude > -175 && user.longtitude < 175) {
      user.longtitude = user.longtitude + random(-5, 5);
    } else user.longtitude = random(-180, 180);
  });
  return fleet;
};
