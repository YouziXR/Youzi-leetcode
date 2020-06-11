/*
 * @ app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * @desc 动态规划 fn = max(fn-1 + an, an)
 */
/* var maxSubArray = function (nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }
  let res = nums[0];
  let sum = res;
  let start = 0,
    end = 0;
  for (let i = 0; i < nums.length; i++) {
    const el = nums[i];
    if (sum + el > el) {
      sum = sum + el;
      // end = i;
    } else {
      sum = el;
      start = end = i;
    }
    if (res < sum) {
      res = sum;
      end = i;
    }
  }
  console.warn(nums.slice(start, end + 1));
  // res = res > sum ? res : sum;
  return res;
}; */
/**
 * @param {number[]} nums
 * @return {number}
 * @desc 贪心 sum为负数时令sum = el，只加正数
 */
var maxSubArray = function (nums: number[]): number {
  /* if (nums.length === 1) {
    return nums[0];
  } */
  let res = nums[0];
  let sum = res;
  for (const el of nums) {
    sum > 0 ? (sum += el) : (sum = el);
    res = sum > res ? sum : res;
  }
  return res;
};
console.warn(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// @lc code=end
