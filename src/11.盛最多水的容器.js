/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let res = 0;
  for (let i = 0, j = height.length - 1; i < j; ) {
    const ai = height[i];
    const aj = height[j];
    res = Math.max(res, (j - i) * Math.min(ai, aj));
    ai < aj ? i++ : j--;
  }
  return res;
};
// @lc code=end
