/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let result = [];
    let i = num.length - 1;
    let carry = 0;

    // Ajouter k chiffre par chiffre, en commençant par la fin de num
    while (i >= 0 || k > 0 || carry > 0) {
        let currentDigit = i >= 0 ? num[i] : 0;
        let sum = currentDigit + (k % 10) + carry;

        result.push(sum % 10);
        carry = Math.floor(sum / 10);

        k = Math.floor(k / 10);
        i--;
    }

    // Le résultat est actuellement inversé, il faut le renverser pour l'ordre correct
    return result.reverse();
};
