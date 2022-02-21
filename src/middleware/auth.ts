import express from "express";
import jwt from "jsonwebtoken";
import { adminRoutes } from "../utils";
import { TOKEN_KEY } from "../config";



const verifyToken = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const authorization = req.headers['authorization'] as string;
    const token = authorization?.split(' ')[1];


    try {
        const decoded = jwt.verify(token, TOKEN_KEY) as any;
        const checkAccess = adminRoutes.map(x => req.url.includes(x)).filter(Boolean).length === 0;

        console.log(decoded);
        if(decoded?.isAdmin || (decoded?.user_id && checkAccess)) {
            return next();
        } else {
            return res.status(403).json({
                message: "error",
                error: "Invalid token authentication or you do not have permission to access this resource"
            });
        }
        
    } catch (error) {
        console.log(error);

        return res.status(403).json({
            message: "error",
            error:  "An error occurred while verifying token, token has expired"
        });

    }

};

export default verifyToken;