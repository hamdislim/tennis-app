import { Express } from 'express';

const loadMiddleware = (app: Express, middleware: Object): void => {
    for (const middle of Object.keys(middleware)) {
        app.use(middleware[middle]);
    }
};

export default loadMiddleware;
