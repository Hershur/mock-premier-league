import Redis from 'ioredis';
import connectRedis from 'connect-redis';
import { REDIS_HOST, REDIS_HOST_PORT, REDIS_PASSWORD } from '../config';
import { redisOptions } from '../utils';


const redisClient =  new Redis(redisOptions);


redisClient.on('connect', () => {
    console.log('redisClient connected to redis...');
})

redisClient.on('ready', () => {
    console.log('redisClient connected to redis and ready to use...');
})

redisClient.on('error', (err) => {
    console.log(err.message);
})

redisClient.on('end', () => {
    console.log('redisClient disconnected from redis');
})

process.on('SIGINT', () => {
    redisClient.quit();
})


const close = async () => {
    await new Promise<void>((resolve)=> {
        redisClient.quit(()=> resolve());
    });

    await new Promise((resolve)=> setImmediate(resolve));
}

export { redisClient, close };



