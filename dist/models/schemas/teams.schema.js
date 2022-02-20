"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.teamSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    nickName: {
        type: String,
        required: true
    },
    abbrName: {
        type: String,
        required: true,
        unique: true
    },
    createdOn: {
        type: String,
        required: true
    },
    stadium: String,
});
//# sourceMappingURL=teams.schema.js.map