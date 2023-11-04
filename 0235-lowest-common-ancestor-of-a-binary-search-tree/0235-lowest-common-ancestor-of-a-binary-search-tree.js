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
var lowestCommonAncestor = function(cur, p, q) {
   
       if(cur.val === p.val || cur.val === q.val)
           return cur
       else if(cur.val < p.val && cur.val < q.val)
           return lowestCommonAncestor(cur.right,p,q)
       else if(cur.val > p.val && cur.val > q.val)
            return lowestCommonAncestor(cur.left,p,q)
       else 
           return cur
   
    //return root
};