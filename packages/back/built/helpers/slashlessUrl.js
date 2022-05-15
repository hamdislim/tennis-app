"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const slashlessUrl = (url) => {
    if (!url)
        return '';
    const cleanUrl = url.trim().toLocaleLowerCase();
    if (!cleanUrl)
        return '';
    if (cleanUrl.endsWith('/'))
        return cleanUrl.slice(0, -1);
    return cleanUrl;
};
exports.default = slashlessUrl;
