import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import { config } from './config';

const corsOptions = {
  origin: config.API_HOST,
};

export const createServer = () => {
  const app = express();

  app.use(cors(corsOptions));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(helmet());

  app.get('/healthcheck', (req: Request, res: Response) => {
    return res.sendStatus(200);
  });

  app.get('/', (req: Request, res: Response) => {
    return res.sendStatus(200);
  });

  app.get('/health', (req: Request, res: Response) => {
    return res.status(200).send('Hi!');
  });

  return app;
};
