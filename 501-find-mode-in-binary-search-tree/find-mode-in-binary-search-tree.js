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
 * @return {number[]}
 */
var findMode = function (root) {
    let dict = {};

    const traversal = (node) => {
        if (node === null) return;

        if (node) {
            if (dict[node.val]) {
                dict[node.val]++;
            }
            else {
                dict[node.val] = 1;
            }
        }

        traversal(node.left);
        traversal(node.right);
    }

    traversal(root);

    let maxCount = 0;
    let modes = [];

    for (const [key, value] of Object.entries(dict)) {
        if (value > maxCount) {
            maxCount = value;
            modes = [parseInt(key)];
        } else if (value === maxCount) {
            modes.push(parseInt(key));
        }
    }


    return modes;
};