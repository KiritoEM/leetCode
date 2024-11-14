/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const removeBackspace = (s) => {
    let stack = [];
    for (let char of s) {
        if (char !== "#") {
            stack.push(char);
        }
        else {
            if (stack.length > 0) {
                stack.pop();
            }
        }
    };

    return stack;
}

var backspaceCompare = function (s, t) {
    let s_stack = removeBackspace(s);
    let t_stack = removeBackspace(t);

    return s_stack.join("") === t_stack.join("");
}

