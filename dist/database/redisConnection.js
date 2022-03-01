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
const utils_1 = require("../utils");
const redisClient = new ioredis_1.default(utils_1.redisOptions);
exports.redisClient = redisClient;
redisClient.on('connect', () => {
    console.log('redisClient connected to redis...');
});
redisClient.on('ready', () => {
    console.log('redisClient connected to redis and ready to use...');
});
redisClient.on('error', (err) => {
    console.log(err.message);
});
redisClient.on('end', () => {
    console.log('redisClient disconnected from redis');
});
process.on('SIGINT', () => {
    redisClient.quit();
});
const close = () => __awaiter(void 0, void 0, void 0, function* () {
    yield new Promise((resolve) => {
        redisClient.quit(() => resolve());
    });
    yield new Promise((resolve) => setImmediate(resolve));
});
exports.close = close;
//# sourceMappingURL=redisConnection.js.map