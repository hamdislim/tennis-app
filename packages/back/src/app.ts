import express, { Express } from 'express';
import SwaggerParser from '@apidevtools/swagger-parser';
import { connector } from 'swagger-routes-express';
import { middleware } from 'express-openapi-validator';
import bodyParser from 'body-parser';
import api from './api';
import loadMiddleware from './helpers/loadMiddleware';
import middlewares from './middleware';

const makeApp = async (): Promise<Express> => {
    const app: Express = express();
    const parser = new SwaggerParser();
    const apiDefinitionLocation = './src/api/api.yaml';
    const apiDescription = await parser.validate(apiDefinitionLocation);
    const connect = connector(api, apiDescription);
    loadMiddleware(app, middlewares);
    app.use(bodyParser.json());
    app.use(
        bodyParser.urlencoded({
            extended: true,
        })
    );
    app.get('/', (req, res) => res.send('Hello World!'));
    connect(app);
    app.use(
        middleware({
            apiSpec: apiDefinitionLocation,
            validateResponses: false,
            validateRequests: true,
        })
    );
    return app;
};

export default makeApp;
