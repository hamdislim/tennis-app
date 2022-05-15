"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getPlayers_1 = __importDefault(require("./v1/players/getPlayers"));
const getPlayer_1 = __importDefault(require("./v1/players/getPlayer"));
const higherCountryRatio_1 = __importDefault(require("./v1/statistiques/higherCountryRatio"));
const getImc_1 = __importDefault(require("./v1/statistiques/getImc"));
const medianeHigh_1 = __importDefault(require("./v1/statistiques/medianeHigh"));
const api = {
    getPlayers: getPlayers_1.default,
    getPlayer: getPlayer_1.default,
    higherCountryRatio: higherCountryRatio_1.default,
    getImc: getImc_1.default,
    medianeHigh: medianeHigh_1.default,
};
exports.default = api;
