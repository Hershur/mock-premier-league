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
exports.deleteFixturesByIdService = exports.updateFixturesByIdService = exports.findFixturesByStatusService = exports.findFixtureByIdService = exports.findFixturessService = exports.createFixturesService = void 0;
const fixtures_repo_1 = require("../repositories/fixtures.repo");
const createFixturesService = (teamBody) => __awaiter(void 0, void 0, void 0, function* () {
    const createFixtures = yield (0, fixtures_repo_1.createFixturesRepo)(teamBody);
    return { success: true, data: createFixtures };
});
exports.createFixturesService = createFixturesService;
const findFixturessService = () => __awaiter(void 0, void 0, void 0, function* () {
    const findFixtures = yield (0, fixtures_repo_1.findFixturesRepo)();
    return { success: true, data: findFixtures };
});
exports.findFixturessService = findFixturessService;
const findFixtureByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const findFixture = yield (0, fixtures_repo_1.findFixturesByIdRepo)(id);
    return { success: true, data: findFixture };
});
exports.findFixtureByIdService = findFixtureByIdService;
const findFixturesByStatusService = (status) => __awaiter(void 0, void 0, void 0, function* () {
    const findFixtures = yield (0, fixtures_repo_1.findFixturesByStatusRepo)(status);
    return { success: true, data: findFixtures };
});
exports.findFixturesByStatusService = findFixturesByStatusService;
const updateFixturesByIdService = (id, fixturesBody) => __awaiter(void 0, void 0, void 0, function* () {
    const updateFixtures = yield (0, fixtures_repo_1.updateFixturesByIdRepo)(id, fixturesBody);
    return updateFixtures;
});
exports.updateFixturesByIdService = updateFixturesByIdService;
const deleteFixturesByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteFixtures = yield (0, fixtures_repo_1.deleteFixturesByIdRepo)(id);
    return deleteFixtures;
});
exports.deleteFixturesByIdService = deleteFixturesByIdService;
//# sourceMappingURL=fixtures.services.js.map