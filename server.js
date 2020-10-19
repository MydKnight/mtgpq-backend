/* eslint-disable no-console */
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import routes from './src/routes/cardRoutes';

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

routes(app);

app.get('/', (req, res) => res.send(`Node and express server is up and running. Port: ${PORT}`));

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
