"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFleet = void 0;
const random_1 = require("../utils/random");
const updateFleet = (fleet) => {
    fleet.map((user, idx) => {
        if (user.latitude > -85 && user.latitude < 85) {
            user.latitude = user.latitude + random_1.random(-5, 5);
        }
        else
            user.latitude = random_1.random(-90, 90);
        if (user.longtitude > -175 && user.longtitude < 175) {
            user.longtitude = user.longtitude + random_1.random(-5, 5);
        }
        else
            user.longtitude = random_1.random(-180, 180);
    });
    return fleet;
};
exports.updateFleet = updateFleet;
//# sourceMappingURL=updateFleet.js.map