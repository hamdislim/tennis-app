"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isNumber_1 = __importDefault(require("./isNumber"));
const defaultValue = 0;
const skipHandler = (req, warnings) => {
    if (!req.query)
        return defaultValue;
    const { skip } = req.query;
    if (!skip)
        return defaultValue;
    if (typeof skip === "string" && (0, isNumber_1.default)(skip)) {
        return Number.parseInt(skip, 10);
    }
    if (warnings)
        warnings.skip = "ignored: must be integer";
    return defaultValue;
};
exports.default = skipHandler;
