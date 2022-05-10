"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customError_1 = __importDefault(require("../dtos/customError"));
const errorHandler = (err, req, res, next) => {
    let customError = err;
    if (!(err instanceof customError_1.default)) {
        customError = new customError_1.default('Internal Server Error', 500);
    }
    console.log('heeer');
    res.status(customError.status).send({ message: customError.name });
};
exports.default = errorHandler;
