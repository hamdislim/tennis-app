import { Request } from 'express';
import isNumber from './isNumber';

const defaultValue = 0;

const skipHandler = (req: Request, warnings: any = {}) => {
    if (!req.query) return defaultValue;

    const { skip } = req.query;
    if (!skip) return defaultValue;
    if (typeof skip === 'string' && isNumber(skip)) {
        return Number.parseInt(skip, 10);
    }
    if (warnings) warnings.skip = 'ignored: must be integer';
    return defaultValue;
};

export default skipHandler;
