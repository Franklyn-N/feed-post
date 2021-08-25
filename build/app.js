"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config/config"));
const mongoose_1 = __importDefault(require("mongoose"));
const compression_1 = __importDefault(require("compression"));
const swaggerUi = require('swagger-ui-express');
const swagger_1 = __importDefault(require("./swagger"));
const cors_1 = __importDefault(require("cors"));
const feed_1 = __importDefault(require("./routes/feed"));
const app = express_1.default();
const MONGODB_URI = `mongodb+srv://${config_1.default.mongo.user}:${config_1.default.mongo.password}@mycluster.eruob.mongodb.net/${config_1.default.mongo.host}`;
app.use(express_1.default.json());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swagger_1.default));
app.use(cors_1.default());
app.use(compression_1.default());
app.use('/api', feed_1.default);
app.use((req, res, next) => {
    res.status(200).json({ message: 'app is live!' });
    next();
});
const httpServer = http_1.default.createServer(app);
mongoose_1.default.connect(MONGODB_URI).then((result) => {
    httpServer.listen(config_1.default.server.port, () => console.log(`Server running on ${config_1.default.server.port}`));
}).catch((err) => {
    console.log(err);
});
