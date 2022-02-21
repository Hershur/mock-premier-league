"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const utils_1 = require("../utils");
const config_1 = require("../config");
const verifyToken = (req, res, next) => {
    const authorization = req.headers['authorization'];
    const token = authorization === null || authorization === void 0 ? void 0 : authorization.split(' ')[1];
    try {
        const decoded = jsonwebtoken_1.default.verify(token, config_1.TOKEN_KEY);
        const checkAccess = utils_1.adminRoutes.map(x => req.url.includes(x)).filter(Boolean).length === 0;
        console.log(decoded);
        if ((decoded === null || decoded === void 0 ? void 0 : decoded.isAdmin) || ((decoded === null || decoded === void 0 ? void 0 : decoded.user_id) && checkAccess)) {
            return next();
        }
        else {
            return res.status(403).json({
                message: "error",
                error: "Invalid token authentication or you do not have permission to access this resource"
            });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(403).json({
            message: "error",
            error: "An error occurred while verifying token, token has expired"
        });
    }
};
exports.default = verifyToken;
//# sourceMappingURL=auth.js.map