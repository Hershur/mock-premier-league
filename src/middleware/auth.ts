import express from "express";
import jwt from "jsonwebtoken";
import { adminRoutes } from "../utils";
import { TOKEN_KEY } from "../config";
import { redisClient } from "../database/redisConnection";



const verifyToken =  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const { userEmail } = req.cookies;
    

        redisClient.get(userEmail, (err, data)=> {            
            if(err) {
                return res.status(403).json({
                    message: "error",
                    error:  "An  error occurred while verifying token"
                });
            }
            
            // const {isAdmin, user_id} = jwt.verify(data, TOKEN_KEY) as any;
            const checkAccess = adminRoutes.map(x => req.url.includes(x)).filter(Boolean).length === 0;
            
            jwt.verify(data, TOKEN_KEY, (err, result)=> {
                if(err) {
                    return res.status(403).json({
                        message: "error",
                        error:  "An  error occurred while verifying token"
                    });
                }

                const {isAdmin, user_id} = result as any;
                if(isAdmin || (user_id && checkAccess)) {
                    return next();
                } else {
                    return res.status(401).json({
                        message: "error",
                        error: "Invalid token authentication or you do not have permission to access this resource"
                    });
                }
            })

        })
        
    } catch (error) {

        return res.status(403).json({
            message: "error",
            error:  "An error occurred while verifying token, token has expired"
        });

    }

};

export default verifyToken;