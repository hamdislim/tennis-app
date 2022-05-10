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
const getAllPlayers_1 = __importDefault(require("../../../controllers/players/getAllPlayers"));
const customError_1 = __importDefault(require("../../../dtos/customError"));
const helpers_1 = require("../../../helpers");
const getPlayers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const warnings = {};
        const limit = (0, helpers_1.limitHandler)(req, warnings);
        const skip = (0, helpers_1.skipHandler)(req, warnings);
        const { data, total } = yield (0, getAllPlayers_1.default)(limit, skip);
        if (!data || total === 0)
            throw new customError_1.default('NOT_FOUND', 404);
        res.status(200).send({
            data,
            total,
            warnings,
        });
    }
    catch (e) {
        console.error(e);
        return next(e);
    }
});
exports.default = getPlayers;
