/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    let state = true;

    let occ = {}

    for (let char of s) {
        occ[char] = (occ[char] || 0) + 1
    }

    for (let char of t) {
        if (!occ[char]) return false;
        occ[char]--
    }

    return true;
};