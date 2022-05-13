"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const perf_hooks_1 = require("perf_hooks");
const request_promise_native_1 = __importDefault(require("request-promise-native"));
const buildPromise = (endpoint, healthCheck) => {
    let healthCheckTest = {};
    return new Promise((resolve) => {
        request_promise_native_1.default.get({ url: endpoint, time: true }, (error, response) => {
            if (error) {
                healthCheckTest = {
                    testName: endpoint,
                    durationInMillis: response && response.elapsedTime
                        ? response.elapsedTime
                        : 0,
                    testResult: 'FAILED',
                    error: error.message,
                };
            }
            else {
                healthCheckTest = {
                    testName: endpoint,
                    durationInMillis: response.elapsedTime,
                    testResult: response.statusCode === 200 ||
                        response.statusCode === 204
                        ? 'PASSED'
                        : 'FAILED',
                };
            }
            healthCheck.tests.push(healthCheckTest);
            resolve();
        });
    });
};
const getHealth = (req, res) => {
    const start = perf_hooks_1.performance.now();
    const promises = [];
    const healthCheck = {
        durationInMillis: 0,
        tests: [],
    };
    promises.push(buildPromise('https://www.google.com/', healthCheck));
    Promise.all(promises)
        .then(() => {
        healthCheck.durationInMillis = Math.floor(perf_hooks_1.performance.now() - start);
        res.status(healthCheck.tests.find((x) => x.testResult === 'FAILED')
            ? 503
            : 200).send(healthCheck);
    })
        .catch((error) => {
        console.error(`Unexpected error while performing health check. Err: ${error.message}, Stack: ${error.stack}`);
    });
};
exports.default = getHealth;
