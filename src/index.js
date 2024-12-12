/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import { env } from '~/config/env';
import { API } from '~/routes/index';
import cookieParser from 'cookie-parser';
import { connectToDB } from '~/config/connectDatabase';

const SERVER = () => {
  const app = express();

  app.use(cookieParser());

  app.use((req, res, next) => {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
    next();
  });

  var corsOptions = {
    origin: true,
    credentials: true
  };

  app.use(cors(corsOptions));
  app.use(express.json());

  app.use('/api', API);

  if (env.BUILD_MODE == 'dev') {
    app.listen(env.APP_PORT, () => {
      console.log(`Running on: http://${env.APP_HOST}:${env.APP_PORT}/api`);
    });
  }
};

connectToDB()
  .then(() => console.log('Connect to MySQL successfully!'))
  .then(() => SERVER())
  .catch((err) => console.log(err));
