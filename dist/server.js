"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connect_redis_1 = __importDefault(require("connect-redis"));
const express_session_1 = __importDefault(require("express-session"));
const mongodbConnection_1 = __importDefault(require("./database/mongodbConnection"));
const config_1 = require("./config");
const redisConnection_1 = require("./database/redisConnection");
const utils_1 = require("./utils");
const app_1 = __importDefault(require("./app"));
(0, mongodbConnection_1.default)();
// var client  = redis.createClient();
const RedisStore = (0, connect_redis_1.default)(express_session_1.default);
app_1.default.set('port', config_1.PORT);
app_1.default.use((0, express_session_1.default)({
    secret: config_1.REDIS_SECRET,
    name: config_1.SESSION_NAME,
    store: new RedisStore({ client: redisConnection_1.redisClient, disableTouch: true }),
    cookie: utils_1.cookieOptions,
    rolling: true,
    saveUninitialized: false,
    resave: false
}));
app_1.default.listen(config_1.PORT, () => console.log(`Running on port ${config_1.PORT}`));
//# sourceMappingURL=server.js.map