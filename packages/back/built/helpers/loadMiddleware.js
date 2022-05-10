"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loadMiddleware = (app, middleware) => {
    for (const middle of Object.keys(middleware)) {
        app.use(middleware[middle]);
    }
};
exports.default = loadMiddleware;
