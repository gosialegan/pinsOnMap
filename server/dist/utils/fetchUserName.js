"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getName = void 0;
const axios_1 = __importDefault(require("axios"));
const getName = () => {
    return axios_1.default
        .get("https://randomuser.me/api/?results=10&nat=us&inc=name")
        .then((res) => {
        return res.data.results;
    })
        .catch((err) => {
        console.log(err);
    });
};
exports.getName = getName;
//# sourceMappingURL=fetchUserName.js.map