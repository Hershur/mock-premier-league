"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cache = void 0;
const redisConnection_1 = require("../database/redisConnection");
const cache = (duration) => {
    return (req, res, next) => {
        let key = '__express__' + req.originalUrl || req.url;
        let hashKey = Buffer.from(`${key}`).toString("base64");
        redisConnection_1.redisClient.hgetall(hashKey)
            .then((result) => {
            if (key in result) {
                console.log((result[key]));
                // const parseBody = JSON.parse(JSON.stringify(res[key]));
                // console.log(parseBody);
                res.send(JSON.parse(result[key]));
                return;
            }
            else {
                console.log('flused');
                let oldJSON = res.json;
                res.json = function (data) {
                    // console.log(data);
                    //Cache data in redis 
                    redisConnection_1.redisClient.hset(hashKey, key, JSON.stringify(data));
                    res.json = oldJSON;
                    return res.json(data);
                };
                next();
            }
        })
            .catch(err => console.log(err));
        redisConnection_1.redisClient.hmget(hashKey, key, function (err, cachedBody) {
            if (err) {
                console.log(err);
            }
        });
    };
};
exports.cache = cache;
//# sourceMappingURL=cache.js.map