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
const teams_services_1 = __importDefault(require("../services/teams.services"));
const redisConnection_1 = require("../database/redisConnection");
describe('test Teams routes', () => {
    const createTeam = {
        name: "Manchester United",
        nickName: "Red Devils",
        abbrName: "MUN",
        stadium: "Old Trafford"
    };
    describe('test create admin route', () => {
        const invalidUser = {
            email: "user2@gmail.com",
            password: "Tester1234!",
            confirmPassword: "Tester1234!"
        };
        it('should return an error object if user is not logged in', () => __awaiter(void 0, void 0, void 0, function* () {
            const mockCreateTeam = jest.fn(() => ({ success: true, data: createTeam }));
            jest
                .spyOn(teams_services_1.default.prototype, "createTeamService")
                .mockImplementation(() => __awaiter(void 0, void 0, void 0, function* () { return mockCreateTeam(); }));
            const res = yield (0, supertest_1.default)(app_1.default).post('/api/teams/create').send(createTeam);
            expect(res.body).toHaveProperty("error");
            expect(res.body.message).toBe("error");
        }));
    });
});
// To close all open redis connections
afterAll(() => {
    (0, redisConnection_1.close)();
});
//# sourceMappingURL=teams.routes.test.js.map