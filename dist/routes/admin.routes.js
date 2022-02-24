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
const express_1 = __importDefault(require("express"));
const celebrate_1 = require("celebrate");
const admin_controller_1 = __importDefault(require("../controllers/admin.controller"));
const adminRouter = express_1.default.Router();
/**
 * @description Create admin
 * @method POST/
 */
adminRouter.post('/create', (0, celebrate_1.celebrate)({
    body: celebrate_1.Joi.object({
        name: celebrate_1.Joi.string()
            .required()
            .messages({
            "string.empty": "Name is required.",
        }),
        email: celebrate_1.Joi.string()
            .email()
            .lowercase()
            .trim()
            .required()
            .example("user@example.com")
            .messages({
            "string.email": "Not a valid email address.",
            "string.empty": "Email is required.",
        }),
        password: celebrate_1.Joi.string()
            .trim()
            .pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!=_%&*?])[A-Za-z\d#$@!=_%&*?]{8,30}$/))
            .required()
            .example("passW@rd1")
            .messages({
            "string.pattern.base": "Password must be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
            "string.empty": "password is required.",
        }),
        confirmPassword: celebrate_1.Joi.string()
            .valid(celebrate_1.Joi.ref('password'))
            .required()
            .example("passW@rd1")
            .messages({
            "any.only": "Password does not match",
            "string.empty": "confirm password is required.",
        }),
    }),
}), (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield admin_controller_1.default.createAdmin(req, res); }))
    .post('/login', (0, celebrate_1.celebrate)({
    body: celebrate_1.Joi.object({
        email: celebrate_1.Joi.string()
            .trim()
            .required(),
        password: celebrate_1.Joi.string()
            .trim()
            .required()
    })
}), (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield admin_controller_1.default.loginAdmin(req, res); }));
;
exports.default = adminRouter;
//# sourceMappingURL=admin.routes.js.map