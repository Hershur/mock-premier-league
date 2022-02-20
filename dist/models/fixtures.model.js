"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const fixtures_schema_1 = require("./schemas/fixtures.schema");
const fixturesModel = mongoose_1.default.model('Fixtures', fixtures_schema_1.fixturesSchema);
exports.default = fixturesModel;
//# sourceMappingURL=fixtures.model.js.map