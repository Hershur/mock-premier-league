"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_routes_1 = __importDefault(require("./routes/users.routes"));
// import swaggerUI from 'swagger-ui-express';
// import { readFile } from 'fs/promises';
// const swaggerDocument = JSON.parse(await readFile(new URL('./swagger.json', import.meta.url)));
const router = express_1.default.Router();
// //Swagger documentation
// router.use("/docs", swaggerUI.serve, (req, res)=> {
//     let html = swaggerUI.generateHTML(swaggerDocument);
//     res.send(html);
// });
router.use('/users', users_routes_1.default);
exports.default = router;
//# sourceMappingURL=routes.js.map