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
exports.findAdminByEmail = exports.createAdminAccountRepo = void 0;
const admin_model_1 = __importDefault(require("../models/admin.model"));
const createAdminAccountRepo = (adminBody) => __awaiter(void 0, void 0, void 0, function* () {
    const admin = new admin_model_1.default({
        name: adminBody.name,
        email: adminBody.email,
        password: adminBody.hashedPassword,
        createdOn: new Date().toLocaleString()
    });
    const createAdmin = yield admin.save();
    return createAdmin;
});
exports.createAdminAccountRepo = createAdminAccountRepo;
const findAdminByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const findAdmin = yield admin_model_1.default.findOne({ email: email }).exec();
    return findAdmin;
});
exports.findAdminByEmail = findAdminByEmail;
//# sourceMappingURL=admin.repo.js.map