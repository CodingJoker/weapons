export const filterHTML = (str) => {
    if(!str)
        return str;
    str = str.replace(/<\/?[^>]+>/g, ''); // 去除HTML tag
    str = str.replace(/[ | ]*\n/g, '\n'); // 去除行尾空白
    str = str.replace(/\n[\s| | ]*\r/g, '\n'); // 去除多余空行
    str = str.replace(/&nbsp;/g, ''); // 去掉&nbsp;
    return str;
}
function html_encode(str)
{
    var s = "";
    if(!str)
        return s;
    if (str.length == 0) return "";
    s = str.replace(/&/g, "&amp;");
    s = s.replace(/</g, "&lt;");
    s = s.replace(/>/g, "&gt;");
    s = s.replace(/ /g, "&nbsp;");
    s = s.replace(/ /g, "");
    s = s.replace(/\'/g, "&#39;");
    s = s.replace(/\"/g, "&quot;");
    s = s.replace(/\n/g, "<br/>");
    return s;
}