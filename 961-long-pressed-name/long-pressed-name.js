/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
    let n_p = 0;
    let t_p = 0;

    while (t_p < typed.length) {
        if (name[n_p] === typed[t_p]) {
            n_p++;
            t_p++;
        }
        else if (t_p > 0 && typed[t_p] === typed[t_p - 1]) {
            t_p++;
        }
        else {
            return false;
        }

    }
    return n_p === name.length;
};