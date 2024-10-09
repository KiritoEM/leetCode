/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

const gcd = function (a, b) {
    if (!b) {
        return a;
    }

    return gcd(b, a % b);
}
var gcdOfStrings = function (str1, str2) {
    let res = "";

    if (str1 + str2 !== str2 + str1) return "";

    for (let i = 0; i < gcd(str1.length, str2.length); i++) {
        res += str1[i];
    }

    return res;
};