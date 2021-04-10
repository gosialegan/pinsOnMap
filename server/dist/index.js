"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const app = express_1.default();
app.set("port", process.env.PORT || 4000);
const http = require("http").Server(app);
const io = require("socket.io")(http);
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const getLabel = () => {
    return axios_1.default
        .get("https://randomuser.me/api/?&inc=name")
        .then((res) => {
        console.log(JSON.stringify(res.data.results[0].name.first, null, 2));
    })
        .catch((err) => {
        console.log(err);
    });
};
getLabel();
const fleet = [];
for (let i = 0; i <= 10; i++) {
    let longtitude = random(-180, 180);
    let latitude = random(-90, 90);
    const user = {
        label: "Szymon",
        latitude,
        longtitude,
    };
    fleet.push(user);
}
console.log(fleet);
io.on("connection", (socket) => {
    fleet.map((user, idx) => {
        user.latitude = user.latitude + random(-5, 5);
        user.longtitude = user.latitude + random(-5, 5);
    });
    io.emit("getCoords", fleet);
});
const server = http.listen(4000, () => {
    console.log("listening on *:4000");
});
//# sourceMappingURL=index.js.map