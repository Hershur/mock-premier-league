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
exports.findUserByEmail = exports.loginUserRepo = exports.createUserAccountRepo = void 0;
const users_model_1 = __importDefault(require("../models/users.model"));
const createUserAccountRepo = (userBody) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new users_model_1.default({
        name: userBody.name,
        email: userBody.email,
        password: userBody.hashedPassword,
        createdOn: new Date().toLocaleString()
    });
    const createUser = yield user.save();
    const { name, email, createdOn } = createUser;
    return { name, email, createdOn };
});
exports.createUserAccountRepo = createUserAccountRepo;
const loginUserRepo = (loginBody) => __awaiter(void 0, void 0, void 0, function* () {
    const checkUserExists = yield users_model_1.default.findOne({ email: loginBody.email });
    return checkUserExists ? checkUserExists : null;
});
exports.loginUserRepo = loginUserRepo;
const findUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const findUser = yield users_model_1.default.findOne({ email: email }).exec();
    return findUser;
});
exports.findUserByEmail = findUserByEmail;
//# sourceMappingURL=users.repo.js.map