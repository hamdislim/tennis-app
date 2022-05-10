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
const getPlayer_1 = __importDefault(require("../../../controllers/players/getPlayer"));
const customError_1 = __importDefault(require("../../../dtos/customError"));
const helpers_1 = require("../../../helpers");
const getPlayer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { playerId } = req.params;
        if (!playerId || !(0, helpers_1.isNumber)(playerId))
            throw new customError_1.default('INVALID_INPUT', 422);
        const { data } = yield (0, getPlayer_1.default)(Number.parseInt(playerId, 10));
        if (!data || !data.id)
            throw new customError_1.default('NOT_FOUND', 404);
        res.status(200).send({
            data,
        });
    }
    catch (e) {
        console.error(e);
        return next(e);
    }
});
exports.default = getPlayer;
