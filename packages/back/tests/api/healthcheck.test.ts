import supertest from 'supertest';
import { Express } from 'express';
import jestOpenAPI from 'jest-openapi';
import path from 'path';
import makeApp from '../../src/app';

let app: Express;
let request: supertest.SuperTest<supertest.Test>;

beforeAll(async () => {
    app = await makeApp();
    request = supertest(app);
});

jestOpenAPI(path.join(__dirname, '../../src/api/api.yaml'));

describe('Healthcheck', () => {
    describe('Route GET /healthcheck', () => {
        it('Should GET to /healthcheck', (done) => {
            request.get('/api/v1/healthcheck').end((err, res) => {
                expect(res.statusCode).toEqual(200);
                done();
            });
        });
    });
});
