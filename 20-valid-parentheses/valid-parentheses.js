/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    let brackets = {
        ")": "(",
        "]": "[",
        "}": "{",
    }

    for (let char of s) {
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        }
        else if (stack.length === 0 || brackets[char] !== stack.pop()) {
            return false;
        }
    }

    return stack.length === 0;
};