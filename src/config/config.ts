import dotenv from 'dotenv';
dotenv.config();

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
}


const config = {
    mongo: MONGO,
    server: SERVER,
    swagger: SWAGGER_SERVER
};


export default config;