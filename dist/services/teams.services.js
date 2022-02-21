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
const teams_repo_1 = require("../repositories/teams.repo");
let TeamService = class TeamService {
    constructor() {
        this.createTeamService = (teamBody) => __awaiter(this, void 0, void 0, function* () {
            //Check if team exists
            const checkTeam = yield (0, teams_repo_1.findTeamByNameAndAbbr)(teamBody);
            if (checkTeam) {
                return { success: false, message: "Team already exists" };
            }
            const createTeam = yield (0, teams_repo_1.createTeamRepo)(teamBody);
            return { success: true, data: createTeam };
        });
        this.findTeamsService = () => __awaiter(this, void 0, void 0, function* () {
            const findTeams = yield (0, teams_repo_1.findTeamsRepo)();
            return { success: true, data: findTeams };
        });
        this.findTeamByIdService = (id) => __awaiter(this, void 0, void 0, function* () {
            const findTeam = yield (0, teams_repo_1.findTeamByIdRepo)(id);
            return { success: true, data: findTeam };
        });
        this.updateTeamByIdService = (id, teamBody) => __awaiter(this, void 0, void 0, function* () {
            const updateTeam = yield (0, teams_repo_1.updateTeamByIdRepo)(id, teamBody);
            return { success: true, data: updateTeam };
        });
        this.deleteTeamByIdService = (id) => __awaiter(this, void 0, void 0, function* () {
            const deleteFixtures = yield (0, teams_repo_1.deleteTeamByIdRepo)(id);
            return { success: true };
        });
    }
};
TeamService = __decorate([
    (0, typedi_1.Service)()
], TeamService);
exports.default = TeamService;
//# sourceMappingURL=teams.services.js.map