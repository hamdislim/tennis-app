"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isNumber_1 = __importDefault(require("./isNumber"));
const defaultValue = 10;
const limitHandler = (req, warnings) => {
    if (!req.query)
        return defaultValue;
    const { limit } = req.query;
    if (!limit)
        return defaultValue;
    if (typeof limit === "string" && (0, isNumber_1.default)(limit)) {
        return Number.parseInt(limit, 10);
    }
    if (warnings)
        warnings.skip = "ignored: must be integer";
    return defaultValue;
};
exports.default = limitHandler;
