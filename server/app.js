import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import Behance from 'behance-api';
import behanceRouter from './../routes/behance';
import config from './../config/config';

const app = express();
app.config = config;
app.behance = new Behance(app.config.behance_key);

app.set('port', process.env.PORT || 3000);


app.use(cors());
app.use(bodyParser.json());

behanceRouter(app);


export default app;
