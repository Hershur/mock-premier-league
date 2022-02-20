"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const celebrate_1 = require("celebrate");
const routes_1 = __importDefault(require("./routes"));
const connection_1 = __importDefault(require("./database/connection"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const port = process.env.PORT || 3000;
(0, connection_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.set('port', port);
app.get('/', (req, res, next) => {
    return res.status(200).json({ message: 'Hello, welcome to my express server 💥' });
});
app.use('/api', routes_1.default);
app.use((0, celebrate_1.errors)());
app.listen(port, () => console.log(`Running on port ${port}`));
//# sourceMappingURL=server.js.map