import supertest from 'supertest';
import { Express } from 'express';
import jestOpenAPI from 'jest-openapi';
import path from 'path';
import { isNumber } from '../src/helpers';
import makeApp from '../src/app';

let app: Express;
let request: supertest.SuperTest<supertest.Test>;

beforeAll(async () => {
    app = await makeApp();
    request = supertest(app);
});

jestOpenAPI(path.join(__dirname, '../src/api/api.yaml'));

describe('test isNumber function', () => {
    it('should return true for isNumber(10)', () => {
        expect(isNumber(10)).toBe(true);
    });
});

describe('Route GET /', () => {
    it('Should GET to /', (done) => {
        request.get('/').end((err, res) => {
            expect(res.statusCode).toEqual(200);
            done();
        });
    });
});
