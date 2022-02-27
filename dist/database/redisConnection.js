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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.close = exports.redisClient = void 0;
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
    // redisClient.disconnect(false);
});
const close = () => __awaiter(void 0, void 0, void 0, function* () {
    yield new Promise((resolve) => {
        redisClient.quit(() => resolve());
    });
    yield new Promise((resolve) => setImmediate(resolve));
});
exports.close = close;
//# sourceMappingURL=redisConnection.js.map