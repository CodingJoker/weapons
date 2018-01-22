// 解决低端android location.reload不刷新问题
export const updateUrl = (url, key) => {
    // 默认是"t"
    key = `${(key || 't')}=`;
    // 正则：t=1472286066028
    const reg = new RegExp(`${key}\\d+`);
    const timestamp = +new Date();
    if (url.indexOf(key) > -1) {
        // 有时间戳，直接更新
        console.log()
        return url.replace(reg, `${key}${timestamp}`);
    } else {
        // 没有时间戳，加上时间戳
        if (url.indexOf('\?') > -1) {
            const urlArr = url.split('\?');
            if (urlArr[1]) {
                return `${urlArr[0]}?${key}${timestamp}&${urlArr[1]}`;
            } else {
                return `${urlArr[0]}?${key}${timestamp}`;
            }
        } else {
            // if (url.indexOf('#') > -1) {
            //     return `${url.split('#')[0]}?${key}${timestamp}${location.hash}`;
            // } else {
            //     return `${url}?${key}${timestamp}`;
            // }
            return `${url}?${key}${timestamp}`;
        }
    }
};
