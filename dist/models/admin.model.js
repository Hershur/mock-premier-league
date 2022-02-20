"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const admin_schema_1 = require("./schemas/admin.schema");
const adminModel = mongoose_1.default.model('Admin', admin_schema_1.adminSchema);
exports.default = adminModel;
//# sourceMappingURL=admin.model.js.map