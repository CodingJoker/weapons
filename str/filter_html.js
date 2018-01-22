export const filterHTML = (str) => {
    if(!str)
        return str;
    str = str.replace(/<\/?[^>]+>/g, ''); // 去除HTML tag
    str = str.replace(/[ | ]*\n/g, '\n'); // 去除行尾空白
    str = str.replace(/\n[\s| | ]*\r/g, '\n'); // 去除多余空行
    str = str.replace(/&nbsp;/g, ''); // 去掉&nbsp;
    return str;
}