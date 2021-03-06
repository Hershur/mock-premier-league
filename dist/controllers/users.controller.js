"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
require("reflect-metadata");
const users_services_1 = __importDefault(require("../services/users.services"));
const typedi_1 = __importStar(require("typedi"));
const config_1 = require("../config");
const utils_1 = require("../utils");
let UserController = class UserController {
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userDTO = req.body;
                const createUser = yield this._userService.createUserAccountService(userDTO);
                return res.status(201).json(createUser);
            }
            catch (error) {
                return res.status(500).json({ success: false, message: "An error occurred" });
            }
        });
    }
    loginUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const loginDTO = req.body;
                const loginUser = yield this._userService.loginUserService(loginDTO);
                if (loginUser.data) {
                    res.cookie("userEmail", loginUser.data.email, utils_1.cookieOptions);
                }
                return res.status(200).json(loginUser);
            }
            catch (error) {
                console.log(error);
                if (req.session) {
                    req.session.destroy((error) => {
                        if (error)
                            return res.status(500).json({ message: 'Internal Server Error' });
                        res.clearCookie(config_1.SESSION_NAME);
                    });
                }
                return res.status(401).json({ success: false, message: "Incorrect username or password" });
            }
        });
    }
};
__decorate([
    (0, typedi_1.Inject)(),
    __metadata("design:type", users_services_1.default)
], UserController.prototype, "_userService", void 0);
UserController = __decorate([
    (0, typedi_1.Service)()
], UserController);
const _userController = typedi_1.default.get(UserController);
exports.default = _userController;
//# sourceMappingURL=users.controller.js.map