import supertest from 'supertest';
import { Express } from 'express';
import makeApp from '../../src/app';
import dataProvider from '../../src/services/dataProvider';

let app: Express;
let request: supertest.SuperTest<supertest.Test>;

beforeAll(async () => {
    app = await makeApp();
    request = supertest(app);
});

describe('GET data Provider', () => {
    it('get data from remote', async () => {
        const res = await dataProvider();
        expect(res.players.length).toBeGreaterThan(0);
    });
});
