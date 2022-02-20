"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const teams_schema_1 = require("./schemas/teams.schema");
const teamsModel = mongoose_1.default.model('Teams', teams_schema_1.teamSchema);
exports.default = teamsModel;
//# sourceMappingURL=teams.models.js.map