import { serverError } from './middlewares/error/serverError';
import express, { Application } from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import route from './routes';
import { notFoundError } from './middlewares';
///express is a function
/// app return express() return objrct of type express
const app: Application = express();

app.use([
  compression(),
  morgan('dev'),
  cookieParser(),
  express.urlencoded({ limit: '10mb', extended: true }),
  express.json({
    limit: '10mb',
  }),
  cors(),
]);
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/', route);
app.use(notFoundError);
app.use(serverError);

export default app;
