import express from 'express';
import { redisClient } from '../database/redisConnection';



export const cache = (duration: number) => {

    return (req: express.Request, res: express.Response, next: express.NextFunction) => {
        let key = '__express__' + req.originalUrl || req.url;
        let hashKey = Buffer.from(`${key}`).toString("base64");

        redisClient.hget(hashKey, key, function (err, cachedBody){
            if (err) {console.log(err);}

            if (cachedBody) {
                const parseBody = JSON.parse(cachedBody);
                console.log(parseBody);
                res.send(parseBody);
                return
            } else {
                let oldJSON = res.json;
                res.json = function(data) {
                    console.log(data);

                    //Cache data in redis 
                    redisClient.hset(hashKey, key, JSON.stringify(data));

                    res.json = oldJSON; 
                    return res.json(data);
                }

                next();
            }
        });
        
    }
}