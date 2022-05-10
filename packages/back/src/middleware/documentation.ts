import express from 'express';
import swaggerUi from 'swagger-ui-express';
import yamlJs from 'yamljs';
import fs from 'fs';
import path from 'path';

const swaggerDocument = yamlJs.parse(
    fs.readFileSync(path.join(__dirname, '/../api/api.yaml'), 'utf8')
);

const documentation = express
    .Router()
    .use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
    .get('/swagger.json', (req, res) => {
        res.send(swaggerDocument);
    });

export default documentation;
