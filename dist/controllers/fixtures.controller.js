"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const fixtures_services_1 = __importDefault(require("../services/fixtures.services"));
const typedi_1 = __importStar(require("typedi"));
let FixtureController = class FixtureController {
    createFixture(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const fixtureDTO = req.body;
                const createFixture = yield this._fixtureService.createFixturesService(fixtureDTO);
                console.log("Creating", createFixture);
                return res.status(201).json(createFixture);
            }
            catch (error) {
                res.statusCode = 500;
                return res.status(500).json({ success: false, message: error.message });
            }
        });
    }
    findFixtures(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const findAllFixtures = yield this._fixtureService.findFixturesService();
                return res.status(200).json(findAllFixtures);
            }
            catch (error) {
                return res.status(500).json({ success: false, message: "An error occurred" });
            }
        });
    }
    findFixtureById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const fixtureId = req.params.fixtureId;
                const findFixture = yield this._fixtureService.findFixtureByIdService(fixtureId);
                return res.status(200).json(findFixture);
            }
            catch (error) {
                return res.status(500).json({ success: false, message: "An error occurred" });
            }
        });
    }
    findFixturesByStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const fixtureStatus = req.query.status;
                const findFixture = yield this._fixtureService.findFixturesByStatusService(fixtureStatus.toLowerCase());
                console.log("query");
                return res.status(200).json(findFixture);
            }
            catch (error) {
                return res.status(500).json({ success: false, message: "An error occurred" });
            }
        });
    }
    updateFixtureById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const fixtureId = req.params.fixtureId;
                const fixtureDTO = req.body;
                const updateFixture = yield this._fixtureService.updateFixturesByIdService(fixtureId, fixtureDTO);
                return res.status(200).json(updateFixture);
            }
            catch (error) {
                return res.status(500).json({ success: false, message: "An error occurred" });
            }
        });
    }
    deleteFixtureById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const fixtureId = req.params.fixtureId;
                const deleteFixture = yield this._fixtureService.deleteFixturesByIdService(fixtureId);
                return res.status(204);
            }
            catch (error) {
                return res.status(500).json({ success: false, message: "An error occurred" });
            }
        });
    }
};
__decorate([
    (0, typedi_1.Inject)(),
    __metadata("design:type", fixtures_services_1.default)
], FixtureController.prototype, "_fixtureService", void 0);
FixtureController = __decorate([
    (0, typedi_1.Service)()
], FixtureController);
const _fixtureController = typedi_1.default.get(FixtureController);
exports.default = _fixtureController;
//# sourceMappingURL=fixtures.controller.js.map