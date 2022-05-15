import supertest from 'supertest';
import { Express } from 'express';
import jestOpenAPI from 'jest-openapi';
import path from 'path';
import medianeHigh from '../../src/controllers/statistiques/medianeHigh';
import makeApp from '../../src/app';

let app: Express;
let request: supertest.SuperTest<supertest.Test>;
jest.mock('../../src/controllers/statistiques/medianeHigh');
const mocked = medianeHigh as jest.MockedFunction<typeof medianeHigh>;

beforeAll(async () => {
    app = await makeApp();
    request = supertest(app); 
    const mockResponse = 600;
    mocked.mockResolvedValueOnce(mockResponse);
});

jestOpenAPI(path.join(__dirname, '../../src/api/api.yaml'));

describe('GET medianeHigh', () => {
    it('get medianeHigh', async () => {
        const res = await request.get('/api/v1/statistiques/mediane-high');
        expect(res.statusCode).toEqual(200);
        expect(res.body.mediane).toEqual(600);
        expect(res).toSatisfyApiSpec();
    });
});
