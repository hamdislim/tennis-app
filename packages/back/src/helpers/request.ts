import axios from 'axios';

const request = async (
    method: string,
    url: string,
    body?: object,
    search?: string
) => {
    const axiosConfig = {
        method,
        url,
        data: body,
        params: search,
    };
    return axios(axiosConfig);
};

export default request;
