// eslint-disable-next-line no-unused-vars
import express, { Request, Response } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import routes from './routes/api';

const globalAny: any = global;

globalAny.fetch = fetch;

dotenv.config();

const app = express();
const port = process.env.PORT || 9000;

app.use(morgan('tiny'));

app.listen(port, () => console.log(`Server Started on ${port}`));

app.use('/', routes);
