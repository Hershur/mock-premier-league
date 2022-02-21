"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGO_URI = exports.PORT = exports.TOKEN_EXPIRY = exports.TOKEN_KEY = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const TOKEN_KEY = process.env.TOKEN_KEY;
exports.TOKEN_KEY = TOKEN_KEY;
const TOKEN_EXPIRY = Number(process.env.TOKEN_EXPIRY);
exports.TOKEN_EXPIRY = TOKEN_EXPIRY;
const PORT = process.env.PORT;
exports.PORT = PORT;
const MONGO_URI = process.env.MONGO_URI;
exports.MONGO_URI = MONGO_URI;
//# sourceMappingURL=index.js.map