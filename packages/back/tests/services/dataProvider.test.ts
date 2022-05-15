import supertest from 'supertest';
import { Express } from 'express';
import makeApp from '../../src/app';
import dataProvider from '../../src/services/dataProvider';
import axios from 'axios';
import apiFetchMock from '../apiFetchMock';

jest.mock('axios');
const mockedAxios = axios as jest.MockedFunction<typeof axios>;


let app: Express;
let request: supertest.SuperTest<supertest.Test>;

beforeAll(async () => {
    app = await makeApp();
    request = supertest(app);
});

beforeEach(() => {    
    const mockResponse = { data: apiFetchMock, status: 200, statusText: 'ok', headers: {}, config: {} };
    mockedAxios.mockResolvedValueOnce(mockResponse);
}
)

describe('GET data Provider', () => {
    it('get data from remote', async () => {
     
        const res = await dataProvider();
        expect(res.length).toEqual(2);
    });
});
