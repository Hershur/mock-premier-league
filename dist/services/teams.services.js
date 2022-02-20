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
exports.deleteTeamByIdService = exports.updateTeamByIdService = exports.findTeamByIdService = exports.findTeamsService = exports.createTeamService = void 0;
const teams_repo_1 = require("../repositories/teams.repo");
const createTeamService = (teamBody) => __awaiter(void 0, void 0, void 0, function* () {
    //Check if team exists
    const checkTeam = (0, teams_repo_1.findTeamByNameAndAbbr)(teamBody);
    if (checkTeam) {
        return { success: false, message: "Team already exists" };
    }
    const createTeam = yield (0, teams_repo_1.createTeamRepo)(teamBody);
    return { success: true, data: createTeam };
});
exports.createTeamService = createTeamService;
const findTeamsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const findTeams = yield (0, teams_repo_1.findTeamsRepo)();
    return { success: true, data: findTeams };
});
exports.findTeamsService = findTeamsService;
const findTeamByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const findTeam = yield (0, teams_repo_1.findTeamByIdRepo)(id);
    return { success: true, data: findTeam };
});
exports.findTeamByIdService = findTeamByIdService;
const updateTeamByIdService = (id, teamBody) => __awaiter(void 0, void 0, void 0, function* () {
    const updateTeam = yield (0, teams_repo_1.updateTeamByIdRepo)(id, teamBody);
    return { success: true, data: updateTeam };
});
exports.updateTeamByIdService = updateTeamByIdService;
const deleteTeamByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteFixtures = yield (0, teams_repo_1.deleteTeamByIdRepo)(id);
    return { success: true, data: deleteFixtures };
});
exports.deleteTeamByIdService = deleteTeamByIdService;
//# sourceMappingURL=teams.services.js.map