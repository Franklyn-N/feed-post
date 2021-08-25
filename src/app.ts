import http from 'http';
import express from 'express';
import config from './config/config';
import mongoose from 'mongoose';
import compression from 'compression';
const swaggerUi = require('swagger-ui-express');
import swaggerDoc from './swagger';
import cors from 'cors';
import blogRoutes from './routes/feed';

const app = express();


const MONGODB_URI = `mongodb+srv://${config.mongo.user}:${config.mongo.password}@mycluster.eruob.mongodb.net/${config.mongo.host}`

app.use(express.json());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use(cors());
app.use(compression());


app.use('/api', blogRoutes);

app.use((req, res, next) => {
    res.status(200).json({ message: 'app is live!'}); 
    next();
});


const httpServer = http.createServer(app);
mongoose.connect(MONGODB_URI).then((result) => {
    httpServer.listen(config.server.port, () => console.log(`Server running on ${config.server.port}`));
}).catch((err) => {
    console.log(err);
})