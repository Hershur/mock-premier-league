
import express from 'express';
import bodyParser from 'body-parser';
import connectRedis from 'connect-redis';
import session from 'express-session';
import { errors } from 'celebrate';
import routes from './routes';
import connectMongoDB from './database/mongodbConnection';
import { PORT, REDIS_SECRET, NODE_ENV, SESSION_NAME } from './config';
import { redisClient } from './database/redisConnection';
import cookieParser from 'cookie-parser';


const app = express();

connectMongoDB();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('port', PORT);


// var client  = redis.createClient();
const RedisStore = connectRedis(session);


app.use(session({
  secret: REDIS_SECRET,
  name: SESSION_NAME,

  store: new RedisStore({ client: redisClient, disableTouch: true}),
  cookie: {
    maxAge: 1000 * 60 * 2, //2 minutes
    sameSite: true, 
    httpOnly: true,
    secure: NODE_ENV === "production"
  },
  rolling: true,
  saveUninitialized: false,
  resave: false
}));

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