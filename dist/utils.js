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
exports.redisOptions = exports.cookieOptions = exports.adminRoutes = exports.generateHashedPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = require("./config");
const generateHashedPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield bcrypt_1.default.genSalt(10);
    const hashedPassword = yield bcrypt_1.default.hash(password, salt);
    return hashedPassword;
});
exports.generateHashedPassword = generateHashedPassword;
exports.adminRoutes = ['create', 'edit', 'remove'];
exports.cookieOptions = {
    maxAge: 1000 * 60 * config_1.TOKEN_EXPIRY,
    sameSite: true,
    httpOnly: true,
    secure: config_1.NODE_ENV === "production",
    secret: config_1.COOKIE_SECRET,
    signed: true
};
exports.redisOptions = {
    host: config_1.REDIS_HOST,
    port: config_1.REDIS_HOST_PORT,
    password: config_1.REDIS_PASSWORD,
    retryStrategy: function (_) {
        return undefined;
    }
};
//# sourceMappingURL=utils.js.map