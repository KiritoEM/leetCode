/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let s_arr = s.split(" ");
    let words = new Set();
    let dict = {};

    if (pattern.length !== s_arr.length) {
        return false;
    }

    for (let i = 0; i < s_arr.length; i++) {
        if (!dict[pattern[i]]) {
            if (words.has(s_arr[i])){
                return false;
            }
            dict[pattern[i]] = s_arr[i];
            words.add(s_arr[i]);
        }
        else {
            if (dict[pattern[i]] !== s_arr[i]) {
                return false;
            }
        }
    }

    return true;
};