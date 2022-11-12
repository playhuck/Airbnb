"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
require('dotenv').config();
const port = 3000 || process.env.PORT;
app.use(express_1.default.urlencoded());
app.listen(port, () => {
    console.log(`This Server Start Port : ${port}`);
});
