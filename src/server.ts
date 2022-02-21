
import express from 'express';
import bodyParser from 'body-parser';
import { errors } from 'celebrate';
import routes from './routes';
import connectDB from './database/connection';
import { PORT } from './config';

const app = express();

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('port', PORT);

app.get('/', (req, res, next) => {

  return res.status(200).json({ message: 'Hello, welcome to my express server 💥' });
});

app.use('/api', routes);


app.use(errors());

app.listen(PORT, () => console.log(`Running on port ${PORT}`));