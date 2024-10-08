/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
    let res = "";
    let i = 0; j = i + 1;

    while (i < s.length && j < s.length) {
        if (s[i] === "A" && s[j] === "B") {
            s = s.replace('AB', '');
            i = 0;
            j = i + 1;
        }
        else if (s[i] === "C" && s[j] === "D") {
            s = s.replace('CD', '');
            i = 0;
            j = i + 1;
        }
        else {
            i++;
            j++;
        }
    }

    return s.length;
};