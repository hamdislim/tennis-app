import { Request, Response, NextFunction } from 'express';
import CustomError from '../dtos/customError';

const errorHandler = (
    err: TypeError | CustomError,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    let customError = err;
    if (!(err instanceof CustomError)) {
        customError = new CustomError('Internal Server Error', 500);
    }
    console.log('heeer');
    res.status((customError as CustomError).status).send({
        message: (customError as CustomError).name,
    });
};

export default errorHandler;
