"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixturesSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.fixturesSchema = new mongoose_1.default.Schema({
    homeTeam: {
        type: String,
        required: true
    },
    awayTeam: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    dateTime: {
        type: String,
        required: true
    },
    createdOn: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    referee: {
        type: String,
        required: true
    },
    uniqueLink: String,
    gameweek: String,
    hashTag: String,
});
//# sourceMappingURL=fixtures.schema.js.map