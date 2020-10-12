import express from 'express';
import routes from './src/routes/cardRoutes'

const app = express();
const PORT = 8000;

routes(app); 

app.get('/', (req, res) => 
    res.send(`Node and express server is up and running. Port: ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Backend running on port ${PORT}`)
);
