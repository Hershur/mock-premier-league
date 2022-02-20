"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const users_schema_1 = require("./schemas/users.schema");
const userModel = mongoose_1.default.model('Users', users_schema_1.userSchema);
exports.default = userModel;
//# sourceMappingURL=users.model.js.map