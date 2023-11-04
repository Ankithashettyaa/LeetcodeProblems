/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root) {
        return null;
    }

    if (root.val == p.val || root.val == q.val) {
        return root;
    }

    var left = lowestCommonAncestor(root.left, p, q);
    var right = lowestCommonAncestor(root.right, p, q);

    if (left && right) {
        return root; // LCA found in both left and right subtrees
    } else if (left) {
        return left; // LCA found in the left subtree
    } else {
        return right; // LCA found in the right subtree
    }
};