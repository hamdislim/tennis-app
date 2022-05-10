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
const Player_1 = __importDefault(require("../../dtos/Player"));
const validateAndConvert_1 = __importDefault(require("../../helpers/validateAndConvert"));
const dataProvider_1 = __importDefault(require("../../services/dataProvider"));
const higherCountryRatio = () => __awaiter(void 0, void 0, void 0, function* () {
    const countries = [];
    try {
        //get All players
        const data = yield (0, dataProvider_1.default)();
        //if players exists
        if (data.players.length > 0) {
            //convert data to type player
            const players = yield Promise.all(data.players.map((pl) => __awaiter(void 0, void 0, void 0, function* () {
                const validatedPlayer = yield (0, validateAndConvert_1.default)(Player_1.default, pl);
                if (!validatedPlayer.error) {
                    return pl;
                }
            })));
            //loop on players to groupe with country
            players.forEach((pl) => {
                // get if country alrady exists in the list of countries
                const index = countries.findIndex((co) => co.country === pl.country.code);
                // if country exists only recalculate the ratio 
                if (index !== -1) {
                    const rat = (pl.data.last.reduce((a, b) => a + b, 0) * 100) /
                        pl.data.last.length;
                    countries[index].ratio = (countries[index].ratio + rat) / 2;
                }
                // if country does not exists calculate the ratio and push it to the list 
                else {
                    countries.push({
                        country: pl.country.code,
                        ratio: (pl.data.last.reduce((a, b) => a + b, 0) * 100) /
                            pl.data.last.length,
                    });
                }
            });
            countries.sort(function (a, b) {
                return b.ratio - a.ratio;
            });
        }
        return Object.assign({}, countries[0]);
    }
    catch (e) {
        console.error(e);
        throw e;
    }
});
exports.default = higherCountryRatio;
