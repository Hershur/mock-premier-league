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
const express_1 = __importDefault(require("express"));
const celebrate_1 = require("celebrate");
const fixtures_controller_1 = __importDefault(require("../controllers/fixtures.controller"));
const fixturesRouter = express_1.default.Router();
/**
 * @description Create fixture
 * @method POST/
 */
fixturesRouter.post('/create', (0, celebrate_1.celebrate)({
    body: celebrate_1.Joi.object({
        homeTeam: celebrate_1.Joi.string()
            .required()
            .messages({
            "string.empty": "Homefixture is required.",
        }),
        awayTeam: celebrate_1.Joi.string()
            .required()
            .messages({
            "string.empty": "AwayFixture is required.",
        }),
        dateTime: celebrate_1.Joi.string()
            .required()
            .messages({
            "string.empty": "Date and time of fixture is required.",
        }),
        venue: celebrate_1.Joi.string()
            .required()
            .messages({
            "string.empty": "Venue is required.",
        }),
        referee: celebrate_1.Joi.string()
            .required()
            .messages({
            "string.empty": "Referee is required.",
        }),
        gameweek: celebrate_1.Joi.string(),
        hashTag: celebrate_1.Joi.string(),
    }),
}), (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield fixtures_controller_1.default.createFixture(req, res); }));
fixturesRouter.get('/find', (0, celebrate_1.celebrate)({
    query: celebrate_1.Joi.object({
        status: celebrate_1.Joi.string()
            .required()
            .messages({
            "string.empty": "status query params is required.",
        }),
    })
}), (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield fixtures_controller_1.default.findFixturesByStatus(req, res); })).get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield fixtures_controller_1.default.findFixtures(req, res); })).get('/:fixtureId', (0, celebrate_1.celebrate)({
    params: celebrate_1.Joi.object({
        fixtureId: celebrate_1.Joi.string()
            .required()
            .messages({
            "string.empty": "fixture id params is required.",
        }),
    })
}), (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield fixtures_controller_1.default.findFixtureById(req, res); })).put('/edit/:fixtureId', (0, celebrate_1.celebrate)({
    params: celebrate_1.Joi.object({
        fixtureId: celebrate_1.Joi.string()
            .required()
            .messages({
            "string.empty": "fixture id params is required.",
        }),
    })
}), (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield fixtures_controller_1.default.updateFixtureById(req, res); })).delete('/remove/:fixtureId', (0, celebrate_1.celebrate)({
    params: celebrate_1.Joi.object({
        fixtureId: celebrate_1.Joi.string()
            .required()
            .messages({
            "string.empty": "fixture id params is required.",
        }),
    })
}), (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield fixtures_controller_1.default.deleteFixtureById(req, res); }));
exports.default = fixturesRouter;
//# sourceMappingURL=fixtures.routes.js.map