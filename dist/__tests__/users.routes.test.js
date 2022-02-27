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
const users_services_1 = __importDefault(require("../services/users.services"));
const redisConnection_1 = require("../database/redisConnection");
describe('test User routes', () => {
    const userCreated = {
        name: "Assurance Femi",
        email: "user2@gmail.com",
        password: "Tester1234!",
        confirmPassword: "Tester1234!"
    };
    const user = {
        name: "Assurance Femi",
        email: "user2@gmail.com",
    };
    describe('test create user route', () => {
        const invalidUser = {
            email: "user2@gmail.com",
            password: "Tester1234!",
            confirmPassword: "Tester1234!"
        };
        it('should return an object with success and data details of user if successfully created', () => __awaiter(void 0, void 0, void 0, function* () {
            const mockCreateUser = jest.fn(() => ({ success: true, data: userCreated }));
            jest
                .spyOn(users_services_1.default.prototype, "createUserAccountService")
                .mockImplementation(() => __awaiter(void 0, void 0, void 0, function* () { return mockCreateUser(); }));
            const res = yield (0, supertest_1.default)(app_1.default).post('/api/users/create').send(userCreated);
            expect(res.body).toHaveProperty("data");
            expect(res.body.success).toBe(true);
            expect(res.body.data.name).toBe(userCreated.name);
        }));
        it('should return an invalid parameters error if the required fields are missing', () => __awaiter(void 0, void 0, void 0, function* () {
            var _a, _b, _c;
            const mockCreateUser = jest.fn(() => ({ success: true, data: userCreated }));
            jest
                .spyOn(users_services_1.default.prototype, "createUserAccountService")
                .mockImplementation(() => __awaiter(void 0, void 0, void 0, function* () { return mockCreateUser(); }));
            const res = yield (0, supertest_1.default)(app_1.default).post('/api/users/create').send(invalidUser);
            expect((_a = res.body) === null || _a === void 0 ? void 0 : _a.success).toBeUndefined();
            expect((_c = (_b = res.body) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.name).toBeUndefined();
        }));
    });
    describe('test user login route', () => {
        const userLogin = {
            email: "user2@gmail.com",
            password: "Tester1234!"
        };
        const invalidUserLogin = {
            email: "user@gmail.com",
            password: "Tester1234!"
        };
        it('should return an object with success and data details of  user if logged in created', () => __awaiter(void 0, void 0, void 0, function* () {
            const mockLoginUser = jest.fn(() => ({ success: true, data: user }));
            jest
                .spyOn(users_services_1.default.prototype, "loginUserService")
                .mockImplementation(() => __awaiter(void 0, void 0, void 0, function* () { return mockLoginUser(); }));
            const res = yield (0, supertest_1.default)(app_1.default).post('/api/users/login').send(userLogin);
            expect(res.body).toHaveProperty("data");
            expect(res.body.success).toBe(true);
            expect(res.body.data.name).toBe(user.name);
            expect(res.body.data.email).toBe(user.email);
        }));
    });
});
// To close all open redis connections
afterAll(() => {
    (0, redisConnection_1.close)();
});
//# sourceMappingURL=users.routes.test.js.map