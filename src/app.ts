
import express from 'express';
import bodyParser from 'body-parser';
import { errors } from 'celebrate';
import routes from './routes';
import cookieParser from 'cookie-parser';
import { COOKIE_SECRET } from './config';



const app = express();


app.use(cookieParser(COOKIE_SECRET));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res, next) => {
    return res.status(200).json({ message: 'Hello, welcome to my express server 💥' });
});


app.use('/api', routes);

app.use((err: express.ErrorRequestHandler, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(500).send('Internal server error')
})

app.use(errors());


export default app;
  
  