/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let res = "";
    let i = 0, j = 0;
    let m = word1.length;
    let n = word2.length;

    while (i < m || j < n) {
        if (i < m) {
            res += word1[i];
            i++;
        }

        if (j < n) {
            res += word2[j];
            j++;
        }
    }

    return res;
};