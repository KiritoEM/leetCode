/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    let res = [];

    for (let s of words) {
        let ns = [...new Set(s.toLowerCase())];
        let row1 = ns.map((char) => {
            return "qwertyuiop".split("").includes(char);
        }).every((e) => e);
        let row2 = ns.map((char) => {
            return "asdfghjkl".split("").includes(char);
        }).every((e) => e);
        let row3 = ns.map((char) => {
            return "zxcvbnm".split("").includes(char);
        }).every((e) => e);

        if (row1 || row2 || row3) {
            res.push(s)
        }
    }

    return res;
}