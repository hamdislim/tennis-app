"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const yamljs_1 = __importDefault(require("yamljs"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const swaggerDocument = yamljs_1.default.parse(fs_1.default.readFileSync(path_1.default.join(__dirname, '/../api/api.yaml'), 'utf8'));
const documentation = express_1.default
    .Router()
    .use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument))
    .get('/swagger.json', (req, res) => {
    res.send(swaggerDocument);
});
exports.default = documentation;
