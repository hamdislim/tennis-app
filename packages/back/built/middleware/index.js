"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const documentation_1 = __importDefault(require("./documentation"));
const errorHandler_1 = __importDefault(require("./errorHandler"));
const middlewares = {
    bodyParser: body_parser_1.default.json(),
    cors: (0, cors_1.default)(),
    urlencoded: body_parser_1.default.urlencoded({
        extended: true,
    }),
    documentation: documentation_1.default,
    errorHandler: errorHandler_1.default,
};
exports.default = middlewares;
