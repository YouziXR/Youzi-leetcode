/*
 * app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
/* var maxArea = function (height: number[]): number {
  let res: number = 0;
  for (let i = 0; i < height.length; i++) {
    const ai: number = height[i];
    for (let j = i + 1; j < height.length; j++) {
      const aj: number = height[j];
      res = Math.max(res, (j - i) * Math.min(ai, aj));
    }
  }
  return res;
};
console.warn(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); */
var maxArea = function (height: number[]): number {
  let res: number = 0;
  for (let i = 0, j = height.length - 1; i < j; ) {
    const ai: number = height[i];
    const aj: number = height[j];
    res = Math.max(res, (j - i) * Math.min(ai, aj));
    ai < aj ? i++ : j--;
  }
  return res;
};
console.warn(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// @lc code=end
