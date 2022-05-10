import { performance } from 'perf_hooks';
import request from 'request-promise-native';

const buildPromise = (endpoint, healthCheck) => {
    let healthCheckTest = {};
    return new Promise<void>((resolve) => {
        request.get({ url: endpoint, time: true }, (error, response) => {
            if (error) {
                healthCheckTest = {
                    testName: endpoint,
                    durationInMillis:
                        response && response.elapsedTime
                            ? response.elapsedTime
                            : 0,
                    testResult: 'FAILED',
                    error: error.message,
                };
            } else {
                healthCheckTest = {
                    testName: endpoint,
                    durationInMillis: response.elapsedTime,
                    testResult:
                        response.statusCode === 200 ||
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
    const start = performance.now();
    const promises = [];
    const healthCheck = {
        durationInMillis: 0,
        tests: [],
    };
    promises.push(buildPromise('https://www.google.com/', healthCheck));
    Promise.all(promises)
        .then(() => {
            healthCheck.durationInMillis = Math.floor(
                performance.now() - start
            );
            res.status(
                healthCheck.tests.find((x) => x.testResult === 'FAILED')
                    ? 503
                    : 200
            ).send(healthCheck);
        })
        .catch((error) => {
            console.error(
                `Unexpected error while performing health check. Err: ${error.message}, Stack: ${error.stack}`
            );
        });
};

export default getHealth;
