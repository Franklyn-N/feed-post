"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const SERVER_PORT = process.env.SERVER_PORT;
const SERVER_HOST = process.env.SERVER_HOST;
const SWAGGER_SERVER_URL = process.env.SWAGGER_URL;
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.PASSWORD;
const MONGO_HOST = process.env.MONGO_HOST;
const MONGO = {
    user: MONGO_USER,
    password: MONGO_PASSWORD,
    host: MONGO_HOST
};
const SERVER = {
    hostname: SERVER_HOST,
    port: SERVER_PORT
};
const SWAGGER_SERVER = {
    url: SWAGGER_SERVER_URL
};
const config = {
    mongo: MONGO,
    server: SERVER,
    swagger: SWAGGER_SERVER
};
exports.default = config;
