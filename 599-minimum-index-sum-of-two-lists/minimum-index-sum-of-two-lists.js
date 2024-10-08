/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    let dict = {};
    let result = [];

    // Créer un dictionnaire pour stocker les indices des éléments de list1
    for (let i = 0; i < list1.length; i++) {
        dict[list1[i]] = i;
    }

    // Parcourir list2 et vérifier si chaque élément existe dans le dictionnaire de list1
    let minIndex = Infinity;
    for (let j = 0; j < list2.length; j++) {
        if (dict.hasOwnProperty(list2[j])) {
            let indexSum = dict[list2[j]] + j;
            if (indexSum < minIndex) {
                minIndex = indexSum;
                result = [list2[j]]; // Réinitialiser la liste des résultats
            } else if (indexSum === minIndex) {
                result.push(list2[j]); // Ajouter à la liste des résultats
            }
        }
    }

    return result;
};
