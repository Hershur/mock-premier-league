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
const app_1 = __importDefault(require("../app"));
const supertest_1 = __importDefault(require("supertest"));
const admin_services_1 = __importDefault(require("../services/admin.services"));
const redisConnection_1 = require("../database/redisConnection");
describe('test Admin routes', () => {
    const adminCreated = {
        name: "Assurance Femi",
        email: "user2@gmail.com",
        password: "Tester1234!",
        confirmPassword: "Tester1234!"
    };
    const adminUser = {
        name: "Assurance Femi",
        email: "admin@gmail.com",
    };
    describe('test create admin route', () => {
        const invalidUser = {
            email: "user2@gmail.com",
            password: "Tester1234!",
            confirmPassword: "Tester1234!"
        };
        it('should return an object with success and data details of admin user if successfully created', () => __awaiter(void 0, void 0, void 0, function* () {
            const mockCreateAdmin = jest.fn(() => ({ success: true, data: adminCreated }));
            jest
                .spyOn(admin_services_1.default.prototype, "createAdminAccountService")
                .mockImplementation(() => __awaiter(void 0, void 0, void 0, function* () { return mockCreateAdmin(); }));
            const res = yield (0, supertest_1.default)(app_1.default).post('/api/admin/create').send(adminCreated);
            expect(res.body).toHaveProperty("data");
            expect(res.body.success).toBe(true);
            expect(res.body.data.name).toBe(adminCreated.name);
        }));
        it('should return an invalid parameters error if the required fields are missing', () => __awaiter(void 0, void 0, void 0, function* () {
            var _a, _b, _c;
            const mockCreateAdmin = jest.fn(() => ({ success: true, data: adminCreated }));
            jest
                .spyOn(admin_services_1.default.prototype, "createAdminAccountService")
                .mockImplementation(() => __awaiter(void 0, void 0, void 0, function* () { return mockCreateAdmin(); }));
            const res = yield (0, supertest_1.default)(app_1.default).post('/api/admin/create').send(invalidUser);
            expect((_a = res.body) === null || _a === void 0 ? void 0 : _a.success).toBeUndefined();
            expect((_c = (_b = res.body) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.name).toBeUndefined();
        }));
    });
    describe('test admin login route', () => {
        const adminLogin = {
            email: "admin@gmail.com",
            password: "Tester1234!"
        };
        const invalidAdminLogin = {
            email: "user@gmail.com",
            password: "Tester1234!"
        };
        it('should return an object with success and data details of admin user if logged in created', () => __awaiter(void 0, void 0, void 0, function* () {
            const mockLoginAdmin = jest.fn(() => ({ success: true, data: adminUser }));
            jest
                .spyOn(admin_services_1.default.prototype, "loginAdminService")
                .mockImplementation(() => __awaiter(void 0, void 0, void 0, function* () { return mockLoginAdmin(); }));
            const res = yield (0, supertest_1.default)(app_1.default).post('/api/admin/login').send(adminLogin);
            expect(res.body).toHaveProperty("data");
            expect(res.body.success).toBe(true);
            expect(res.body.data.name).toBe(adminUser.name);
            expect(res.body.data.email).toBe(adminUser.email);
        }));
    });
});
// To close all open redis connections
afterAll(() => {
    (0, redisConnection_1.close)();
});
//# sourceMappingURL=admin.routes.test.js.map