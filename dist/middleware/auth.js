"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const utils_1 = require("../utils");
const config_1 = require("../config");
const redisConnection_1 = require("../database/redisConnection");
const verifyToken = (req, res, next) => {
    try {
        const { userEmail } = req.signedCookies;
        redisConnection_1.redisClient.get(userEmail, (err, data) => {
            if (err) {
                return res.status(403).json({
                    message: "error",
                    error: "An  error occurred while verifying token"
                });
            }
            // const {isAdmin, user_id} = jwt.verify(data, TOKEN_KEY) as any;
            const checkAccess = utils_1.adminRoutes.map(x => req.url.includes(x)).filter(Boolean).length === 0;
            jsonwebtoken_1.default.verify(data, config_1.TOKEN_KEY, (err, result) => {
                if (err) {
                    return res.status(403).json({
                        message: "error",
                        error: "An  error occurred while verifying token"
                    });
                }
                const { isAdmin, user_id } = result;
                if (isAdmin || (user_id && checkAccess)) {
                    return next();
                }
                else {
                    return res.status(401).json({
                        message: "error",
                        error: "Invalid token authentication or you do not have permission to access this resource"
                    });
                }
            });
        });
    }
    catch (error) {
        return res.status(403).json({
            message: "error",
            error: "An error occurred while verifying token, token has expired"
        });
    }
};
exports.default = verifyToken;
//# sourceMappingURL=auth.js.map