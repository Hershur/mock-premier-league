"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookieOptions = exports.adminRoutes = exports.generateHashedPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = require("./config");
const generateHashedPassword = (password) => {
    const salt = bcrypt_1.default.genSaltSync(10);
    const hashedPassword = bcrypt_1.default.hashSync(password, salt);
    return hashedPassword;
};
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
//# sourceMappingURL=utils.js.map