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
const customError_1 = __importDefault(require("../../dtos/customError"));
const Player_1 = __importDefault(require("../../dtos/Player"));
const validateAndConvert_1 = __importDefault(require("../../helpers/validateAndConvert"));
const dataProvider_1 = __importDefault(require("../../services/dataProvider"));
const medianeHigh = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //get All players
        const data = yield (0, dataProvider_1.default)();
        //if players exists
        if (data.players.length > 0) {
            //convert data to type player
            let players = yield Promise.all(data.players.map((pl) => __awaiter(void 0, void 0, void 0, function* () {
                const validatedPlayer = yield (0, validateAndConvert_1.default)(Player_1.default, pl);
                if (!validatedPlayer.error) {
                    return pl;
                }
            })));
            // sort table with the players height
            players.sort((a, b) => a.data.height - b.data.height);
            // if the table length is an even number
            if (players.length % 2 === 0) {
                return players[players.length / 2].data.height;
                // if the table length is an odd number    
            }
            else {
                return (players[Math.trunc(players.length / 2)].data.height +
                    players[Math.trunc(players.length / 2) + 1].data.height) /
                    2;
            }
        }
    }
    catch (e) {
        throw new customError_1.default('Internal Server Error', 500);
    }
});
exports.default = medianeHigh;
