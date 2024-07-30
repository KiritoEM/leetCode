/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    i = m - 1;
    j = n - 1;
    //nouvel  index de nums1
    k = m + n - 1;

    //comparaison de nums1 et nums2 et ajout dans l' ordre décroissant dans le nouveau nums1
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        }
        else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    //déplacement dans le nouveau numss1 les restes dans nums2
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
};