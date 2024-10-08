/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
    let stack = [];

    for (let char of s) {
        if (stack.length > 0) {
            let top = stack[stack.length - 1];
            if ((top === 'A' && char === 'B') || (top === 'C' && char === 'D')) {
                stack.pop();
            } else {
                stack.push(char);
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length;
};
