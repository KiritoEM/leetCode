/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let arr = [];
    let curr_word = "";

    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) !== 32) {
            curr_word += s[i];
        }
        else {
            if (curr_word !== "") {
                arr.push(curr_word);
                curr_word = "";
            }
        }
    }

    if (curr_word !== "") { //ajoute le dernier mot dans le tableau
        arr.push(curr_word);
        curr_word = "";
    }

    console.log(arr, curr_word)

    return arr.reverse().join(" ").trim();
};