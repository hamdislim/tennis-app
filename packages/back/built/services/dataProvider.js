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
/* eslint-disable no-useless-return */
const helpers_1 = require("../helpers");
const runtimeVars_1 = __importDefault(require("../config/runtimeVars"));
const customError_1 = __importDefault(require("../dtos/customError"));
const Player_1 = __importDefault(require("../dtos/Player"));
const validateAndConvert_1 = __importDefault(require("../helpers/validateAndConvert"));
const dataProvider = () => __awaiter(void 0, void 0, void 0, function* () {
    let players;
    try {
        const data = yield (0, helpers_1.request)('get', runtimeVars_1.default.DATA_HOST);
        players = yield Promise.all(data.data.players.map((player) => __awaiter(void 0, void 0, void 0, function* () {
            const validatedPlayer = yield (0, validateAndConvert_1.default)(Player_1.default, player);
            if (!validatedPlayer.error) {
                return player;
            }
            // eslint-disable-next-line consistent-return
            return;
        })));
        return players;
    }
    catch (e) {
        console.error(e);
        throw new customError_1.default('Internal Server Error', 500);
    }
});
exports.default = dataProvider;
