import supertest from 'supertest';
import { Express } from 'express';
import jestOpenAPI from 'jest-openapi';
import path from 'path';
import getPlayer from '../../src/controllers/players/getPlayer';
import makeApp from '../../src/app';
import apiFetchMock from '../apiFetchMock';

let app: Express;
let request: supertest.SuperTest<supertest.Test>;
jest.mock('../../src/controllers/players/getPlayer');
const mocked = getPlayer as jest.MockedFunction<typeof getPlayer>;

beforeAll(async () => {
    app = await makeApp();
    request = supertest(app);
});
beforeEach(() => {
    jest.clearAllMocks();
  });
jestOpenAPI(path.join(__dirname, '../../src/api/api.yaml'));

describe('GET player', () => {
    it('get players with worng type of id', async () => {
        mocked.mockResolvedValueOnce({data: undefined});
        const res = await request.get('/api/v1/player/a');
        expect(res.statusCode).toEqual(422);
    });
});

describe('GET player', () => {
    it('get player with non existing id', async () => {
        const mockResponse = apiFetchMock.players[0];
        mocked.mockResolvedValueOnce({ data: mockResponse });
        const res = await request.get('/api/v1/player/3000');
        expect(res.statusCode).toEqual(404);
    });
});

describe('GET player', () => {
    it('get player with existing id', async () => {
        const mockResponse = apiFetchMock.players[0];
        mocked.mockResolvedValueOnce({ data: mockResponse });
        const res = await request.get('/api/v1/player/17');
        expect(res.statusCode).toEqual(200);
        expect(res.body.data).toEqual(apiFetchMock.players[0]);
        expect(res).toSatisfyApiSpec();
    });
});
