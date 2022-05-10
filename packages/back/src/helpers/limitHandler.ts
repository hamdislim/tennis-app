import { Request } from 'express';
import isNumber from './isNumber';

const defaultValue = 10;

const limitHandler = (req: Request, warnings: any = {}) => {
    if (!req.query) return defaultValue;
    const { limit } = req.query;
    if (!limit) return defaultValue;
    if (typeof limit === 'string' && isNumber(limit)) {
        return Number.parseInt(limit, 10);
    }
    if (warnings) warnings.limit = 'ignored: must be integer';
    return defaultValue;
};

export default limitHandler;
