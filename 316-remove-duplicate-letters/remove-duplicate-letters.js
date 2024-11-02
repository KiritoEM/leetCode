/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
    let stack = [];
    let store = new Set();

    for (let i = 0; i < s.length; i++) {
        if (!store.has(s[i])) {
            while (stack.length > 0 && stack.at(-1) > s[i] && s.indexOf(stack.at(-1), i) > i) {
                store.delete(stack.pop());
            }

            store.add(s[i]);
            stack.push(s[i]);
        }
    }

    return Array.from(store).join("");
};