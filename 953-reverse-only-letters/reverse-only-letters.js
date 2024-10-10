/**
 * @param {string} s
 * @return {string}
 */
const validLetter = (s) => {
    if ((s >= "a" && s <= "z") || (s >= "A" && s <= "Z")) {
        return true
    };

    return false;
}
var reverseOnlyLetters = function (s) {
    let arr = s.split("");
    let start = 0, end = arr.length - 1;

    while (start < end) {
        if (validLetter(arr[start]) === true && validLetter(arr[end]) === true) {
            let temp = arr[start];
            arr[start] = s[end];
            arr[end] = temp;
            start++;
            end--;
        }
        else if ((validLetter(arr[start]) && !(validLetter(arr[end])))) {
            end--;
        }
        else if (!(validLetter(arr[start] && (validLetter(arr[end]))))) {
            start++;
        }
    }

    return arr.join("");
};