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

describe('players', () => {
    it('get players', async () => {
        const res = await request.get('/api/v1/players');
        expect(res.statusCode).toEqual(200);
        expect(res).toSatisfyApiSpec();
    });
});
