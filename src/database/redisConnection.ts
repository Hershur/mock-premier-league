import Redis from 'ioredis';
import connectRedis from 'connect-redis';
import { REDIS_HOST, REDIS_HOST_PORT, REDIS_PASSWORD } from '../config';


const redisClient =  new Redis({ 
        host: REDIS_HOST, 
        port: REDIS_HOST_PORT, 
        password: REDIS_PASSWORD,
        retryStrategy: function (options){
            return undefined;
        }
    });

redisClient.on('error', (err) => {
    console.log(err);
});

export { redisClient };



