import 'dotenv/config';
import express, { json } from 'express';
import cors from 'cors';

import { routes } from './routes';
import { setupMongo } from './database';
import { errorHandler } from './middleware/error-handler.middleware';

setupMongo().then(() => {
  const app = express();

  app.use(
    cors({
      origin: process.env.FRONT_URL,
    }),
  );

  app.use(json());
  app.use(routes);
  app.use(errorHandler);

  app.listen(3001, () => console.log(' 🛜  Server is running at port 3001!'));
});
