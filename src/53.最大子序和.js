/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  let res = nums[0];
  let sum = 0;
  for (const el of nums) {
    sum > 0 ? (sum += el) : (sum = el);
    res = sum > res ? sum : res;
  }
  return res;
  // console.warn(nums.slice(start, end + 1));
  // res = res > sum ? res : sum;
};
// @lc code=end
