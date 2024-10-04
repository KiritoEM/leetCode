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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    let stack = [{ node: root, path: [] }];
    let paths = [];

    while (stack.length > 0) {
        let { node, path } = stack.pop();
        if (node) {
            path.push(node.val);

            if (!(node.left) && !(node.right)) {
                paths.push(path.join("->"));
            } else {
                if (node.left) stack.push({ node: node.left, path: [...path] });
                if (node.right) stack.push({ node: node.right, path: [...path] });
            }
        }
    }

    return paths;
};
