/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  //如果p和q都是null 空二叉树，那么他们相等
  if (p === null && q === null) {
    return true;
  }
  if (p == null || q === null) {
    return false;
  }
  if (p.val !== q.val) {
    return false;
  }
  // p和q的值相等，需要递归判定左右之树
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
