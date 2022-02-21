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
const teams_controller_1 = __importDefault(require("../controllers/teams.controller"));
const teamsRouter = express_1.default.Router();
/**
 * @description Create team
 * @method POST/
 */
teamsRouter.post('/create', (0, celebrate_1.celebrate)({
    body: celebrate_1.Joi.object({
        name: celebrate_1.Joi.string()
            .required()
            .messages({
            "string.empty": "Name is required.",
        }),
        nickName: celebrate_1.Joi.string()
            .required()
            .messages({
            "string.empty": "nickName is required.",
        }),
        abbrName: celebrate_1.Joi.string()
            .required()
            .messages({
            "string.empty": "abbrName is required.",
        }),
        stadium: celebrate_1.Joi.string(),
    }),
}), (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield teams_controller_1.default.createTeam(req, res); }));
teamsRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield teams_controller_1.default.findTeams(req, res); }));
teamsRouter.get('/:teamId', (0, celebrate_1.celebrate)({
    params: celebrate_1.Joi.object({
        teamId: celebrate_1.Joi.string()
            .required()
            .messages({
            "string.empty": "team id params is required.",
        }),
    })
}), (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield teams_controller_1.default.findTeamById(req, res); }))
    .put('/edit/:teamId', (0, celebrate_1.celebrate)({
    params: celebrate_1.Joi.object({
        teamId: celebrate_1.Joi.string()
            .required()
            .messages({
            "string.empty": "team id params is required.",
        }),
    })
}), (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield teams_controller_1.default.updateTeamById(req, res); }))
    .delete('/remove/:teamId', (0, celebrate_1.celebrate)({
    params: celebrate_1.Joi.object({
        teamId: celebrate_1.Joi.string()
            .required()
            .messages({
            "string.empty": "team id params is required.",
        }),
    })
}), (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield teams_controller_1.default.deleteTeamById(req, res); }));
exports.default = teamsRouter;
//# sourceMappingURL=teams.routes.js.map