import express from 'express';
import { config } from 'dotenv';
import routes from './src/routes/index.js';
import bodyParser from 'body-parser';
import db from './connect.js';

config();
const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
routes(app);

db();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
