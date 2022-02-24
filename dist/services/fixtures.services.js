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
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typedi_1 = require("typedi");
const fixtures_repo_1 = require("../repositories/fixtures.repo");
let FixtureService = class FixtureService {
    constructor() {
        this.createFixturesService = (fixtureBody) => __awaiter(this, void 0, void 0, function* () {
            const createFixtures = yield (0, fixtures_repo_1.createFixturesRepo)(fixtureBody);
            return { success: true, data: createFixtures };
        });
        this.findFixturesService = () => __awaiter(this, void 0, void 0, function* () {
            const findFixtures = yield (0, fixtures_repo_1.findFixturesRepo)();
            return { success: true, data: findFixtures };
        });
        this.findFixtureByIdService = (id) => __awaiter(this, void 0, void 0, function* () {
            const findFixture = yield (0, fixtures_repo_1.findFixturesByIdRepo)(id);
            return { success: true, data: findFixture };
        });
        this.findFixturesByStatusService = (status) => __awaiter(this, void 0, void 0, function* () {
            const findFixtures = yield (0, fixtures_repo_1.findFixturesByStatusRepo)(status);
            return { success: true, data: findFixtures };
        });
        this.updateFixturesByIdService = (id, fixturesBody) => __awaiter(this, void 0, void 0, function* () {
            const updateFixtures = yield (0, fixtures_repo_1.updateFixturesByIdRepo)(id, fixturesBody);
            return { success: true, data: updateFixtures };
        });
        this.deleteFixturesByIdService = (id) => __awaiter(this, void 0, void 0, function* () {
            const deleteFixtures = yield (0, fixtures_repo_1.deleteFixturesByIdRepo)(id);
            return { success: true };
        });
    }
};
FixtureService = __decorate([
    (0, typedi_1.Service)()
], FixtureService);
exports.default = FixtureService;
//# sourceMappingURL=fixtures.services.js.map