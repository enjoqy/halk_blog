
/**
 * 将日期时间转换为指定格式，如：YYYY-mm-dd HH:MM表示2019-06-06 19:45
 * 例如：dateFormat("YYYY-mm-dd HH:MM", date)
 * @param fmt
 * @param date
 * @returns {*}
 */
export function dateFormat(fmt, date) {
    date = new Date(date)
    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };

    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            /*
            * padStart()这个方法是用来补全字符串的，第一个参数是判断字符串是否符合这个长度，第二个参数是用来补的
            * */
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        }
    }
    return fmt;
}

