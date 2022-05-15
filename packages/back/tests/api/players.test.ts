import supertest from 'supertest';
import { Express } from 'express';
import jestOpenAPI from 'jest-openapi';
import path from 'path';
import getAllPlayers from '../../src/controllers/players/getAllPlayers';
import makeApp from '../../src/app';
import apiFetchMock from '../apiFetchMock';

let app: Express;
let request: supertest.SuperTest<supertest.Test>;
jest.mock('../../src/controllers/players/getAllPlayers');
const mocked = getAllPlayers as jest.MockedFunction<typeof getAllPlayers>;
const mockResponse = apiFetchMock.players;
beforeAll(async () => {
    app = await makeApp();
    request = supertest(app);

    mocked.mockResolvedValueOnce({ data: mockResponse, total : mockResponse.length });
 
});

jestOpenAPI(path.join(__dirname, '../../src/api/api.yaml'));

describe('players', () => {
    it('get players', async () => {
        
        const res = await request.get('/api/v1/players');
        expect(res.statusCode).toEqual(200);
        expect(res.body.data).toEqual(mockResponse);
        expect(res.body.total).toEqual(mockResponse.length);
        expect(res).toSatisfyApiSpec();
    });
});
