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
exports.deleteFixturesByIdRepo = exports.updateFixturesByIdRepo = exports.findFixturesByStatusRepo = exports.findFixturesByIdRepo = exports.findFixturesRepo = exports.createFixturesRepo = void 0;
const fixtures_model_1 = __importDefault(require("../models/fixtures.model"));
const fixtureStatus_enum_1 = require("../enums/fixtureStatus.enum");
const createFixturesRepo = (fixturesBody) => __awaiter(void 0, void 0, void 0, function* () {
    const fixtures = new fixtures_model_1.default({
        homeTeam: fixturesBody.homeTeam,
        awayTeam: fixturesBody.awayTeam,
        status: fixtureStatus_enum_1.FixtureStatus.Pending,
        dateTime: fixturesBody.dateTime,
        venue: fixturesBody.venue,
        gameweek: fixturesBody.gameweek,
        referee: fixturesBody.referee,
        uniqueLink: fixturesBody.uniqueLink,
        hashTag: fixturesBody.hashTag,
        createdOn: new Date().toLocaleString()
    });
    const createFixtures = yield fixtures.save();
    const fixtureId = createFixtures._id;
    const uniqueLink = `/api/fixtures/${fixtureId}`;
    const returnedFixture = yield (0, exports.updateFixturesByIdRepo)(fixtureId, Object.assign(Object.assign({}, fixturesBody), { uniqueLink }));
    return returnedFixture;
});
exports.createFixturesRepo = createFixturesRepo;
const findFixturesRepo = () => __awaiter(void 0, void 0, void 0, function* () {
    const fixtures = yield fixtures_model_1.default.find();
    return fixtures;
});
exports.findFixturesRepo = findFixturesRepo;
const findFixturesByIdRepo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const fixtures = yield fixtures_model_1.default.findById(id);
    return fixtures;
});
exports.findFixturesByIdRepo = findFixturesByIdRepo;
const findFixturesByStatusRepo = (status) => __awaiter(void 0, void 0, void 0, function* () {
    const findFixtures = yield fixtures_model_1.default.find({ status: status }).exec();
    return findFixtures;
});
exports.findFixturesByStatusRepo = findFixturesByStatusRepo;
const updateFixturesByIdRepo = (id, fixturesBody) => __awaiter(void 0, void 0, void 0, function* () {
    const updateFixtures = yield fixtures_model_1.default.findByIdAndUpdate(id, fixturesBody);
    return updateFixtures;
});
exports.updateFixturesByIdRepo = updateFixturesByIdRepo;
const deleteFixturesByIdRepo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteFixtures = yield fixtures_model_1.default.findByIdAndDelete(id);
    return deleteFixtures;
});
exports.deleteFixturesByIdRepo = deleteFixturesByIdRepo;
//# sourceMappingURL=fixtures.repo.js.map