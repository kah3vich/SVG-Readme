export const percentToUtf8Encoding = (str: string) => {
    return decodeURIComponent(str.replace(/\+/g, ' '));
}

export const utf8ToPercentEncoding = (str: string) => {
    return encodeURIComponent(str).replace(/[!'()*]/g, c => {
        return '%' + c.charCodeAt(0).toString(16);
    });
}

export const removeAllSymbol = (str) => str.replaceAll('||', ' ').trim()
