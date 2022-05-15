const format = (url) => {
    const last = url.length - 1;
    if (url[last] === '/') return url.substring(0, last);
    return url;
};

const runtimeVars = {
    BACKEND_BASE_URL: process.env.NODE_ENV === 'development'
        ? format(process.env.REACT_APP_LOCLAL_BACK_BASE_URI)
        : format(process.env.REACT_APP_PROD_BACK_BASE_URI),
};

export default runtimeVars;
