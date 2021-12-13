// Import the libraries
import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';

// Import the Types
import { IHelloMessage } from './types/types';

// Setting the environment variables
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app: Application = express();

// Middlewares
app.use(morgan('dev'));
app.use(cors({ origin: ['http://localhost:3000', process.env.APP_BASE] }));

/**
 * Route to get the Hello Message
 * @name  get/api/
 * @param {Request} req
 * @param {Response} res
 * @returns {IHelloMessage}
 */
app.get('/api', (req: Request, res: Response) => {
  const helloMessage: IHelloMessage = { msg: 'Hello World!' };
  res.json(helloMessage);
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
