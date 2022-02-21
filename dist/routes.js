"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./middleware/auth"));
const admin_routes_1 = __importDefault(require("./routes/admin.routes"));
const fixtures_routes_1 = __importDefault(require("./routes/fixtures.routes"));
const teams_routes_1 = __importDefault(require("./routes/teams.routes"));
const users_routes_1 = __importDefault(require("./routes/users.routes"));
const router = express_1.default.Router();
router.use('/users', users_routes_1.default);
router.use('/admin', admin_routes_1.default);
//Protected routes
//JWT Authentication middleware
router.use(auth_1.default);
router.use('/teams', teams_routes_1.default);
router.use('/fixtures', fixtures_routes_1.default);
exports.default = router;
//# sourceMappingURL=routes.js.map