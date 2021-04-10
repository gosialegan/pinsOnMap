"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getName = void 0;
const axios_1 = __importDefault(require("axios"));
const getName = async () => {
    return await axios_1.default
        .get("https://randomuser.me/api/?&inc=name")
        .then((res) => {
        return res.data.results[0].name.first;
    })
        .catch((err) => {
        console.log(err);
    });
};
exports.getName = getName;
//# sourceMappingURL=fetchUserName.js.map