/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let new_s = s.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
    return new_s === new_s.split("").reverse().join("")
};