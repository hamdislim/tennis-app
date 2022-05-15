const slashlessUrl = (url: string): string => {
    if (!url) return '';
    const cleanUrl = url.trim().toLocaleLowerCase();
    if (!cleanUrl) return '';
    if (cleanUrl.endsWith('/')) return cleanUrl.slice(0, -1);
    return cleanUrl;
};

export default slashlessUrl;
