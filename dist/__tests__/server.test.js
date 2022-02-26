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
describe('test default route', () => {
    it('should return a welcome message', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.default).get('/');
        expect(res.body).toHaveProperty("message");
        expect(res.body.message).toEqual("Hello, welcome to my express server 💥");
    }));
});
// describe('test admin routes', () => {
//     describe('test create route', () => {
//         it('should return an object with success and data details of admin user if successfully created', async () => {
//           const res = await request(app).post('/api/admin/create').send({
//                 "name": "Assurance Femi",
//                 "email": "user2@gmail.com",
//                 "password": "Tester1234!",
//                 "confirmPassword": "Tester1234!"
//           });
//           expect(res.body).toHaveProperty("data");
//           expect(res.body.success).toBe(true);
//         })
//     });
// });
//# sourceMappingURL=server.test.js.map