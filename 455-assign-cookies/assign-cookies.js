/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    let count = 0;
    let i = 0, j = 0;
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    while ((i < s.length) && (j < g.length)) {
        if (s[i] >= g[j]) {
            count++;
            j++;
        }
        i++;
    }
    return count;
}