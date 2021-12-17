// Import the libraries
import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import moongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';

// Imports
import rootRouter from './routes/root.api';

// Setting the environment variables
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app: Application = express();

// Setup moongoose connection with mongoDB
moongoose.connect(process.env.DB_CONNECTION || 'mongodb://127.0.0.1:27017/template_data', {}, () =>
  console.log('Connected to mongoDB'),
);

// Middlewares
app.use(
  cors({
    origin: [process.env.CORS_ORIGIN, 'http://localhost:3000', 'http://localhost:3001'],
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(helmet());
app.use('/api', rootRouter);

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
