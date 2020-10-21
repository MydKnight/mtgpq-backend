/* eslint-disable no-console */
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cardRoutes from './src/routes/cardRoutes';
import userRoutes from './src/routes/userRoutes';

const app = express();
const PORT = 8000;

// Environment Variables
dotenv.config({ silent: true });

// Connect mongo to API
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/mtgpq?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch((error) => console.log(`Problem Connecting: ${error}`));

// Setup Body Parser - So incoming requests will be parsed through Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use morgan to log requests to the console 
app.use(morgan('dev'));

cardRoutes(app);
userRoutes(app);

app.get('/', (req, res) => res.send(`Node and Express server is up and running. Port: ${PORT}`));

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
