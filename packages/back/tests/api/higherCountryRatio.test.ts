import supertest from 'supertest';
import { Express } from 'express';
import jestOpenAPI from 'jest-openapi';
import path from 'path';
import higherCountryRatio from '../../src/controllers/statistiques/higherCountryRatio';
import makeApp from '../../src/app';

let app: Express;
let request: supertest.SuperTest<supertest.Test>;
jest.mock('../../src/controllers/statistiques/higherCountryRatio');
const mocked = higherCountryRatio as jest.MockedFunction<typeof higherCountryRatio>;

beforeAll(async () => {
    app = await makeApp();
    request = supertest(app);
    const mockResponse = {country: 'FR', ratio: 90};
    mocked.mockResolvedValueOnce(mockResponse);
});

jestOpenAPI(path.join(__dirname, '../../src/api/api.yaml'));

describe('GET higher Country Ratio', () => {
    it('get higher Country Ratio', async () => {
        const res = await request.get(
            '/api/v1/statistiques/higher-country-ratio'
        );
        expect(res.statusCode).toEqual(200);
        expect(res.body.data.country).toEqual('FR');
        expect(res.body.data.ratio).toEqual(90);
        expect(res).toSatisfyApiSpec();
    });
});
