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
    // redisClient.disconnect(false);
});


const close = async () => {
    await new Promise<void>((resolve)=> {
        redisClient.quit(()=> resolve());
    });

    await new Promise((resolve)=> setImmediate(resolve));
}

export { redisClient, close };



