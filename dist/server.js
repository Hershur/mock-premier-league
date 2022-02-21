"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const celebrate_1 = require("celebrate");
const routes_1 = __importDefault(require("./routes"));
const connection_1 = __importDefault(require("./database/connection"));
const config_1 = require("./config");
const app = (0, express_1.default)();
(0, connection_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.set('port', config_1.PORT);
app.get('/', (req, res, next) => {
    return res.status(200).json({ message: 'Hello, welcome to my express server 💥' });
});
app.use('/api', routes_1.default);
app.use((0, celebrate_1.errors)());
app.listen(config_1.PORT, () => console.log(`Running on port ${config_1.PORT}`));
//# sourceMappingURL=server.js.map