import supertest from 'supertest';
import { Express } from 'express';
import jestOpenAPI from 'jest-openapi';
import getImc from '../../src/controllers/statistiques/getImc';
import path from 'path';
import makeApp from '../../src/app';

let app: Express;
let request: supertest.SuperTest<supertest.Test>;
jest.mock('../../src/controllers/statistiques/getImc');
const mockedImc= getImc as jest.MockedFunction<typeof getImc>;


beforeAll(async () => {
    app = await makeApp();
    request = supertest(app);
    const mockResponse = 100;
    mockedImc.mockResolvedValueOnce(mockResponse);
});

jestOpenAPI(path.join(__dirname, '../../src/api/api.yaml'));

describe('GET imc', () => {
    it('get IMC', async () => {
        const res = await request.get('/api/v1/statistiques/get-imc');
        expect(res.statusCode).toEqual(200);
        expect(res.body.imc).toEqual(100);
        expect(res).toSatisfyApiSpec();
    });
});
