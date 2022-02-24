"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const express_session_1 = __importDefault(require("express-session"));
const celebrate_1 = require("celebrate");
const routes_1 = __importDefault(require("./routes"));
const mongodbConnection_1 = __importDefault(require("./database/mongodbConnection"));
const config_1 = require("./config");
const redisConnection_1 = require("./database/redisConnection");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
(0, mongodbConnection_1.default)();
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.set('port', config_1.PORT);
// var client  = redis.createClient();
const RedisStore = (0, connect_redis_1.default)(express_session_1.default);
app.use((0, express_session_1.default)({
    secret: config_1.REDIS_SECRET,
    name: config_1.SESSION_NAME,
    store: new RedisStore({ client: redisConnection_1.redisClient, disableTouch: true }),
    cookie: {
        maxAge: 1000 * 60 * 2,
        sameSite: true,
        httpOnly: true,
        secure: config_1.NODE_ENV === "production"
    },
    rolling: true,
    saveUninitialized: false,
    resave: false
}));
app.get('/', (req, res, next) => {
    console.log(req.session);
    return res.status(200).json({ message: 'Hello, welcome to my express server 💥' });
});
app.use('/api', routes_1.default);
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Internal server error');
});
app.use((0, celebrate_1.errors)());
app.listen(config_1.PORT, () => console.log(`Running on port ${config_1.PORT}`));
//# sourceMappingURL=server.js.map