/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    //pointeur de l' arbre
    let p = root;

    //arret de la fonction récursive
    if (p === null) {
        return false;
    }

    //si la profondeur est atteinte
    if (p.left === null && p.right === null) {
        return p.val === targetSum;
    }

    //parcours récursive de l' arbre
    if (hasPathSum(p.left, targetSum - p.val) === true) {
        return hasPathSum(p.left, targetSum - p.val)
    }
    else {
        return hasPathSum(p.right, targetSum - p.val)
    }
};