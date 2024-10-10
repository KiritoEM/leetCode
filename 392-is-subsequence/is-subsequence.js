/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let p_s = 0; //pointeur de s
    let t_s = 0;

    while (p_s < s.length && t_s < t.length) {
        if (s[p_s] === t[t_s]) {
            p_s++;
        }
        t_s++;
    }

    return p_s === s.length;
};