"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const helpers_1 = require("../helpers");
(0, dotenv_1.config)();
/* required env vars check */
const requiredRuntimeVars = ['PORT', 'DATA_HOST'];
requiredRuntimeVars.map((required) => {
    if (!process.env[required]) {
        console.error('required env attribute is missing:', required);
        process.exit(1);
    }
});
const runtimeVars = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT,
    DATA_HOST: (0, helpers_1.slashlessUrl)(process.env.DATA_HOST)
};
exports.default = runtimeVars;
