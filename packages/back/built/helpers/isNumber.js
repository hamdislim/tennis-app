"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }
exports.default = isNumber;
