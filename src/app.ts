
import express from 'express';
import bodyParser from 'body-parser';
import { errors } from 'celebrate';
import routes from './routes';
import { PORT } from './config';
import cookieParser from 'cookie-parser';


const app = express();


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('port', PORT);

app.get('/', (req, res, next) => {
    console.log(req.session);
    return res.status(200).json({ message: 'Hello, welcome to my express server 💥' });
});


app.use('/api', routes);

app.use((err: express.ErrorRequestHandler, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err);
    res.status(500).send('Internal server error')
})

app.use(errors());

app.listen(PORT, () => console.log(`Running on port ${PORT}`));


export default app;
  
  