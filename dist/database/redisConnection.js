"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisClient = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
const config_1 = require("../config");
const redisClient = new ioredis_1.default({
    host: config_1.REDIS_HOST,
    port: config_1.REDIS_HOST_PORT,
    password: config_1.REDIS_PASSWORD,
    retryStrategy: function (options) {
        return undefined;
    }
});
exports.redisClient = redisClient;
redisClient.on('error', (err) => {
    console.log(err);
});
//# sourceMappingURL=redisConnection.js.map