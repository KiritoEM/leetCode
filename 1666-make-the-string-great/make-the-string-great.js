/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if ((s[i] === s[i].toLowerCase() && s[i].toUpperCase() === stack.at(-1) || (s[i] === s[i].toUpperCase() && s[i].toLowerCase() === stack.at(-1)))) {
            console.log("stack: ", stack.at(-1), "current letter: ", s[i])
            stack.pop();
        }
        else {
            stack.push(s[i]);
        }
    }

    return stack.join("");
};