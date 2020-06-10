/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let r = new Map();
  for (const idx in nums) {
    const e = nums[idx];
    let goal = target - e;
    if (r.has(e)) {
      return [r.get(e), idx];
    }
    r.set(goal, idx);
  }
  return [];
};
// @lc code=end
