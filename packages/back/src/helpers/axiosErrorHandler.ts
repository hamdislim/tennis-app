import { AxiosError } from 'axios';

const getErrorMessage = (error?: AxiosError, defaultErrorMessage?: string) => {
    if (!error && defaultErrorMessage) return defaultErrorMessage;

    if (!error && !defaultErrorMessage) return 'No details are available .';
    if (error.response?.data) {
        return error.response.data;
    }
    if (error.message) return error.message;
    return 'No details are availble.';
};

const getErrorStatusCode = (error, defaultValue) => {
    if (!error && defaultValue) return defaultValue;
    if (!error) return 500;
    if (error.response && error.response.status) return error.response.status;
    return 500;
};

export { getErrorMessage, getErrorStatusCode };
