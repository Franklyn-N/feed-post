"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerDoc = swagger_jsdoc_1.default({
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Feeds Manager",
            description: "Manages the creation, deletion, and other details of feeds.",
            version: "1.0.0",
        },
        servers: [
            {
                // url: config.swagger,
                url: "http://localhost:8080"
            },
        ],
    },
    apis: ['./src/routes/*.ts'],
});
exports.default = swaggerDoc;
