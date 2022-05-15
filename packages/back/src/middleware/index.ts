import cors from 'cors';
import bodyParser from 'body-parser';
import documentation from './documentation';
import errorHandler from './errorHandler';

const middlewares = {
    bodyParser: bodyParser.json(),
    cors: cors(),
    urlencoded: bodyParser.urlencoded({
        extended: true,
    }),
    documentation,
    errorHandler,
};
export default middlewares;
