"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
const typedi_1 = require("typedi");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const utils_1 = require("../utils");
const admin_repo_1 = require("../repositories/admin.repo");
const config_1 = require("../config");
const redisConnection_1 = require("../database/redisConnection");
let AdminAccountService = class AdminAccountService {
    createAdminAccountService(adminBody) {
        return __awaiter(this, void 0, void 0, function* () {
            //Check if admin exists
            const checkAdmin = yield (0, admin_repo_1.findAdminByEmail)(adminBody.email);
            if (checkAdmin) {
                return { success: false, message: "Admin already exists" };
            }
            //Hash Password
            const hashedPassword = (0, utils_1.generateHashedPassword)(adminBody.password);
            const admin = Object.assign(Object.assign({}, adminBody), { hashedPassword });
            const createAdmin = yield (0, admin_repo_1.createAdminAccountRepo)(admin);
            return { success: true, data: createAdmin };
        });
    }
    loginAdminService(loginBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const adminLogin = yield (0, admin_repo_1.loginAdminRepo)(loginBody);
            const checkPassword = bcrypt_1.default.compareSync(loginBody.password, adminLogin.password);
            if (!checkPassword)
                return { success: false, message: "Incorrect username or password" };
            const token = jsonwebtoken_1.default.sign({ user_id: adminLogin._id, email: adminLogin.email, isAdmin: true }, config_1.TOKEN_KEY, {
                expiresIn: 60 * config_1.TOKEN_EXPIRY,
            });
            const retrievedLogin = {
                _id: adminLogin._id,
                email: adminLogin.email,
                name: adminLogin.name,
                created: adminLogin.createdOn,
            };
            redisConnection_1.redisClient.set(retrievedLogin.email, token, function (err, result) {
                if (err)
                    console.log(err);
            });
            return { success: true, data: retrievedLogin };
        });
    }
};
AdminAccountService = __decorate([
    (0, typedi_1.Service)()
], AdminAccountService);
exports.default = AdminAccountService;
//# sourceMappingURL=admin.services.js.map