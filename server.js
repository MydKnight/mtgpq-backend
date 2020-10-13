import express from 'express';
import routes from './src/routes/cardRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

const app = express();
const PORT = 8000;

// Environment Variables
dotenv.config({ silent: true })

// Connect mongo to API
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/mtgpq?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(error => console.log(`Problem Connecting: ${error}`));

// console.log(mongoose);
  
// Setup Body Parser - So incoming requests will be parsed through Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

routes(app); 

app.get('/', (req, res, next) => 
    res.send(`Node and express server is up and running. Port: ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Backend running on port ${PORT}`)
);
