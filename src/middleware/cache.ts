import express from 'express';
import { redisClient } from '../database/redisConnection';



export const cache = (duration: number) => {

    return (req: express.Request, res: express.Response, next: express.NextFunction) => {
        let key = '__express__' + req.originalUrl || req.url;
        let hashKey = Buffer.from(`${key}`).toString("base64");

        redisClient.hgetall(hashKey)
        .then((result) => {
            if (key in result) {
                // console.log((result[key])); 
                // const parseBody = JSON.parse(JSON.stringify(res[key]));
                // console.log(parseBody);
                res.send(JSON.parse(result[key]));
                return;
            } else {
                console.log('flused')
                let oldJSON = res.json;
                res.json = function(data) {
                    // console.log(data);
    
                    //Cache data in redis 
                    redisClient.hset(hashKey, key, JSON.stringify(data));
    
                    res.json = oldJSON; 
                    return res.json(data);
                }
    
                next();
            }
            
        })
        .catch(err => console.log(err));
       

        redisClient.hmget(hashKey, key, function (err, cachedBody){
            if (err) {console.log(err);}

        });
        
    }
}