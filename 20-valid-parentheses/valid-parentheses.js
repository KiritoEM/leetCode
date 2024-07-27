/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
    let tab = [];
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char === '(' || char === '[' || char === '{') {
            tab.push(char);
        } else {
            if (tab.length === 0) return false;

            let lastChar = tab.pop();
            if ((char === ')' && lastChar !== '(') ||
                (char === ']' && lastChar !== '[') ||
                (char === '}' && lastChar !== '{')) {
                return false;
            }
        }
    }
    return tab.length === 0;
};