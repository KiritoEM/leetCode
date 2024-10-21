/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let arr_s = s.split("");
    let n = arr_s.length;

    for (let i = 0; i < n; i += (2 * k)) {
        let start = i, end = Math.min(i + k - 1, n - 1);

        while (start < end) {
            [arr_s[start], arr_s[end]] = [arr_s[end], arr_s[start]];
            start++;
            end--;
        }
    }

    return arr_s.join("");
};