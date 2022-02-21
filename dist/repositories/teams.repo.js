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
exports.deleteTeamByIdRepo = exports.updateTeamByIdRepo = exports.findTeamByNameAndAbbr = exports.findTeamByIdRepo = exports.findTeamsRepo = exports.createTeamRepo = void 0;
const teams_models_1 = __importDefault(require("../models/teams.models"));
const createTeamRepo = (teamBody) => __awaiter(void 0, void 0, void 0, function* () {
    const team = new teams_models_1.default({
        name: teamBody.name,
        nickName: teamBody.nickName,
        abbrName: teamBody.abbrName,
        stadium: teamBody.stadium,
        createdOn: new Date().toLocaleString()
    });
    const createTeam = yield team.save();
    return createTeam;
});
exports.createTeamRepo = createTeamRepo;
const findTeamsRepo = () => __awaiter(void 0, void 0, void 0, function* () {
    const teams = yield teams_models_1.default.find();
    return teams;
});
exports.findTeamsRepo = findTeamsRepo;
const findTeamByIdRepo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const team = yield teams_models_1.default.findById(id);
    return team;
});
exports.findTeamByIdRepo = findTeamByIdRepo;
const findTeamByNameAndAbbr = (teamBody) => __awaiter(void 0, void 0, void 0, function* () {
    const findTeam = yield teams_models_1.default.findOne({ name: teamBody.name, abbrName: teamBody.abbrName }).exec();
    return findTeam;
});
exports.findTeamByNameAndAbbr = findTeamByNameAndAbbr;
const updateTeamByIdRepo = (id, teamBody) => __awaiter(void 0, void 0, void 0, function* () {
    const updateTeam = yield teams_models_1.default.findByIdAndUpdate(id, teamBody).exec();
    return updateTeam;
});
exports.updateTeamByIdRepo = updateTeamByIdRepo;
const deleteTeamByIdRepo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteTeam = yield teams_models_1.default.findByIdAndDelete(id);
    return deleteTeam;
});
exports.deleteTeamByIdRepo = deleteTeamByIdRepo;
//# sourceMappingURL=teams.repo.js.map