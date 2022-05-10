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

describe('GET player', () => {
    it('get players with worng type of id', async () => {
        const res = await request.get('/api/v1/player/a');
        expect(res.statusCode).toEqual(422);
    });
});

describe('GET player', () => {
    it('get player with non existing id', async () => {
        const res = await request.get('/api/v1/player/3000');
        expect(res.statusCode).toEqual(404);
    });
});

describe('GET player', () => {
    it('get player with existing id', async () => {
        const res = await request.get('/api/v1/player/17');
        expect(res.statusCode).toEqual(200);
        expect(res).toSatisfyApiSpec();
    });
});
