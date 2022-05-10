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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const swagger_parser_1 = __importDefault(require("@apidevtools/swagger-parser"));
const swagger_routes_express_1 = require("swagger-routes-express");
const express_openapi_validator_1 = require("express-openapi-validator");
const body_parser_1 = __importDefault(require("body-parser"));
const api_1 = __importDefault(require("./api"));
const loadMiddleware_1 = __importDefault(require("./helpers/loadMiddleware"));
const middleware_1 = __importDefault(require("./middleware"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
    }
    config() {
        return __awaiter(this, void 0, void 0, function* () {
            const parser = new swagger_parser_1.default();
            const apiDefinitionLocation = './src/api/api.yaml';
            const apiDescription = yield parser.validate(apiDefinitionLocation);
            const connect = (0, swagger_routes_express_1.connector)(api_1.default, apiDescription);
            (0, loadMiddleware_1.default)(this.app, middleware_1.default);
            this.app.use(body_parser_1.default.json());
            this.app.use(body_parser_1.default.urlencoded({
                extended: true,
            }));
            this.app.get("/", (req, res) => res.send("Hello World!"));
            this.app.use((0, cors_1.default)());
            connect(this.app);
            this.app.use((0, express_openapi_validator_1.middleware)({
                apiSpec: apiDefinitionLocation,
                validateResponses: false,
                validateRequests: true,
            }));
            return this.app;
        });
    }
}
exports.default = App;
