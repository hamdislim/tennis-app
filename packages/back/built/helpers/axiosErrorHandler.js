"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorStatusCode = exports.getErrorMessage = void 0;
const getErrorMessage = (error, defaultErrorMessage) => {
    var _a;
    if (!error && defaultErrorMessage)
        return defaultErrorMessage;
    if (!error && !defaultErrorMessage)
        return 'No details are available .';
    if ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) {
        return error.response.data;
    }
    if (error.message)
        return error.message;
    return 'No details are availble.';
};
exports.getErrorMessage = getErrorMessage;
const getErrorStatusCode = (error, defaultValue) => {
    if (!error && defaultValue)
        return defaultValue;
    if (!error)
        return 500;
    if (error.response && error.response.status)
        return error.response.status;
    return 500;
};
exports.getErrorStatusCode = getErrorStatusCode;
