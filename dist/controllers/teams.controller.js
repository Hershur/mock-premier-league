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
const teams_services_1 = __importDefault(require("../services/teams.services"));
const typedi_1 = __importStar(require("typedi"));
let TeamController = class TeamController {
    createTeam(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const teamDTO = req.body;
                const createTeam = yield this._teamService.createTeamService(teamDTO);
                return res.status(201).json(createTeam);
            }
            catch (error) {
                return res.status(500).json({ success: false, message: "An error occurred" });
            }
        });
    }
    findTeams(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const findAllTeams = yield this._teamService.findTeamsService();
                return res.status(200).json(findAllTeams);
            }
            catch (error) {
                return res.status(500).json({ success: false, message: "An error occurred" });
            }
        });
    }
    findTeamById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const teamId = req.params.teamId;
                const findTeam = yield this._teamService.findTeamByIdService(teamId);
                return res.status(200).json(findTeam);
            }
            catch (error) {
                res.statusCode = 500;
                return res.json({ success: false, message: "An error occurred" });
            }
        });
    }
    updateTeamById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const teamId = req.params.teamId;
                const teamDTO = req.body;
                const updateTeam = yield this._teamService.updateTeamByIdService(teamId, teamDTO);
                return res.status(200).json(updateTeam);
            }
            catch (error) {
                return res.status(500).json({ success: false, message: "An error occurred" });
            }
        });
    }
    deleteTeamById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const teamId = req.params.teamId;
                const deleteTeam = yield this._teamService.deleteTeamByIdService(teamId);
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
    __metadata("design:type", teams_services_1.default)
], TeamController.prototype, "_teamService", void 0);
TeamController = __decorate([
    (0, typedi_1.Service)()
], TeamController);
const _teamController = typedi_1.default.get(TeamController);
exports.default = _teamController;
//# sourceMappingURL=teams.controller.js.map