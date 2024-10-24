/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function (queries, pattern) {
    const isUpper = (char) => char === char.toUpperCase();
    let res = new Array();

    const match = (queries, pattern) => {
        let i = 0, j = 0;

        while (i < queries.length && j < pattern.length) {
            if (queries[i] === pattern[j]) {
                i++;
                j++;
            }
            else {
                if (isUpper(queries[i])) {
                    return false;
                }
                i++;
            }
        }

        while (i < queries.length) {
            if (isUpper(queries[i])) {
                return false;
            }
            i++;
        }

        return j === pattern.length;
    }

    for (let word of queries) {
        res.push(match(word, pattern));
    }

    return res;
};