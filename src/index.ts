import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

import router from './routes'
import { env } from './config/env';
import connectToMongo from './config/dataBase';

const app = express();
const port = env.PORT || 8080;

app.use(cors({
  credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/', router());

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

connectToMongo()
