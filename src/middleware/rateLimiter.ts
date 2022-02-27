import express from 'express';
import { NO_OF_ATTEMPTS_ALLOWED_TIME, RATE_LIMIT_ALLOWED_TIME } from '../config';
import { redisClient } from '../database/redisConnection';

export const rateLimiter = async (req: express.Request, res: express.Response, next: express.NextFunction) =>{

    try {
        const { userEmail } = req.signedCookies;
        const rateKey = `${userEmail}__counter`;


        redisClient.incr(rateKey, (err, result)=> {
            if(result > NO_OF_ATTEMPTS_ALLOWED_TIME){
                return res.status(429).send("Too many requests at this time, try again in 15 minutes");
            } else {
                //Sets the key expiry if not found
                redisClient.expire(rateKey, 60 * RATE_LIMIT_ALLOWED_TIME);
                next();
            }
        });


    } catch (error) {
        return res.status(500).json("An unexpected error occurred");
    }
}