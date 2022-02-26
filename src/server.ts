
import express from 'express';
import bodyParser from 'body-parser';
import connectRedis from 'connect-redis';
import session from 'express-session';
import connectMongoDB from './database/mongodbConnection';
import { PORT, REDIS_SECRET, SESSION_NAME } from './config';
import { redisClient } from './database/redisConnection';
import { cookieOptions } from './utils';
import app from './app';



connectMongoDB();


// var client  = redis.createClient();
const RedisStore = connectRedis(session);


app.set('port', PORT);

app.use(session({
  secret: REDIS_SECRET,
  name: SESSION_NAME,
  store: new RedisStore({ client: redisClient, disableTouch: true}),
  cookie: cookieOptions,
  rolling: true,
  saveUninitialized: false,
  resave: false
}));



app.listen(PORT, () => console.log(`Running on port ${PORT}`));

