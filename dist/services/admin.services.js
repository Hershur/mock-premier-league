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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdminAccountService = void 0;
const utils_1 = require("../utils");
const admin_repo_1 = require("../repositories/admin.repo");
const createAdminAccountService = (adminBody) => __awaiter(void 0, void 0, void 0, function* () {
    //Check if admin exists
    const checkAdmin = (0, admin_repo_1.findAdminByEmail)(adminBody.email);
    if (checkAdmin) {
        return { success: false, message: "Admin already exists" };
    }
    //Hash Password
    const hashedPassword = (0, utils_1.generateHashedPassword)(adminBody.password);
    const admin = Object.assign(Object.assign({}, adminBody), { hashedPassword });
    const createAdmin = yield (0, admin_repo_1.createAdminAccountRepo)(admin);
    return { success: true, data: createAdmin };
});
exports.createAdminAccountService = createAdminAccountService;
//# sourceMappingURL=admin.services.js.map