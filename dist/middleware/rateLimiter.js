"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateLimiter = void 0;
const config_1 = require("../config");
const redisConnection_1 = require("../database/redisConnection");
const rateLimiter = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userEmail } = req.signedCookies;
        const rateKey = `${userEmail}__counter`;
        redisConnection_1.redisClient.incr(rateKey, (err, result) => {
            if (result > config_1.NO_OF_ATTEMPTS_ALLOWED_TIME) {
                return res.status(429).send("Too many requests at this time, try again in 15 minutes");
            }
            else {
                //Sets the key expiry if not found
                redisConnection_1.redisClient.expire(rateKey, 60 * config_1.RATE_LIMIT_ALLOWED_TIME);
                next();
            }
        });
    }
    catch (error) {
        return res.status(500).json("An unexpected error occurred");
    }
});
exports.rateLimiter = rateLimiter;
//# sourceMappingURL=rateLimiter.js.map