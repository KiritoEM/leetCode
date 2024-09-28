/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let Sarray = s.split("");
    let vowels = ["a", "e", "i", "o", "u"];
    let filteredSarray = Sarray.filter((item) => vowels.includes(item.toLowerCase())).reverse();

    let vowelsIndex = 0;

    for (let i = 0; i < Sarray.length; i++) {
        if (vowels.includes(Sarray[i].toLowerCase())) {
            Sarray[i] = filteredSarray[vowelsIndex];
            vowelsIndex++;
        }
    }

    return Sarray.join("")
};