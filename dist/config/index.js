"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SESSION_NAME = exports.REDIS_SECRET = exports.REDIS_HOST_PORT = exports.REDIS_HOST = exports.REDIS_PASSWORD = exports.MONGO_URI = exports.PORT = exports.TOKEN_EXPIRY = exports.TOKEN_KEY = exports.NODE_ENV = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const NODE_ENV = process.env.NODE_ENV === 'development' ? 'development' : 'production';
exports.NODE_ENV = NODE_ENV;
const TOKEN_KEY = process.env.TOKEN_KEY;
exports.TOKEN_KEY = TOKEN_KEY;
const TOKEN_EXPIRY = Number(process.env.TOKEN_EXPIRY);
exports.TOKEN_EXPIRY = TOKEN_EXPIRY;
const PORT = process.env.PORT;
exports.PORT = PORT;
const MONGO_URI = process.env.MONGO_URI;
exports.MONGO_URI = MONGO_URI;
const REDIS_PASSWORD = process.env.REDIS_PASSWORD;
exports.REDIS_PASSWORD = REDIS_PASSWORD;
const REDIS_HOST = process.env.REDIS_HOST;
exports.REDIS_HOST = REDIS_HOST;
const REDIS_SECRET = process.env.REDIS_SECRET;
exports.REDIS_SECRET = REDIS_SECRET;
const REDIS_HOST_PORT = Number(process.env.REDIS_HOST_PORT);
exports.REDIS_HOST_PORT = REDIS_HOST_PORT;
const SESSION_NAME = process.env.SESSION_NAME;
exports.SESSION_NAME = SESSION_NAME;
//# sourceMappingURL=index.js.map