"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const random_1 = require("./../utils/random");
const express_1 = __importDefault(require("express"));
const fetchUserName_1 = require("./../utils/fetchUserName");
const app = express_1.default();
app.set("port", process.env.PORT || 4000);
const http = require("http").Server(app);
const io = require("socket.io")(http);
const fleet = [];
for (let i = 0; i <= 10; i++) {
    let longtitude = random_1.random(-180, 180);
    let latitude = random_1.random(-90, 90);
    const user = {
        label: fetchUserName_1.getName(),
        latitude,
        longtitude,
    };
    fleet.push(user);
}
console.log(fleet);
io.on("connection", (socket) => {
    console.log("a user connected");
    fleet.map((user, idx) => {
        user.latitude = user.latitude + random_1.random(-5, 5);
        user.longtitude = user.latitude + random_1.random(-5, 5);
    });
    io.emit("fleet", fleet);
});
const server = http.listen(4000, () => {
    console.log("listening on *:4000");
});
//# sourceMappingURL=index.js.map