
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { errors } from 'celebrate';
import routes from './routes';
import connectDB from './database/connection';

const app = express();

dotenv.config();

const port = process.env.PORT || 3000;

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('port', port);

app.get('/', (req, res, next) => {

  return res.status(200).json({ message: 'Hello, welcome to my express server 💥' });
});

app.use('/api', routes);


app.use(errors());

app.listen(port, () => console.log(`Running on port ${port}`));