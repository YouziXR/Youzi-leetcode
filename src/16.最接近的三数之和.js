/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  quickSort(nums, 0, nums.length - 1);
  let res = nums[0] + nums[1] + nums[nums.length - 1];
  for (let i = 0; i < nums.length; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let j = i + 1,
      k = nums.length - 1;
    while (j < k) {
      let r = nums[i] + nums[j] + nums[k];
      if (Math.abs(target - r) < Math.abs(target - res)) {
        res = r;
      }
      if (target - r > 0) {
        j++;
      } else if (target - r === 0) {
        return r;
      } else {
        k--;
      }
    }
  }
  return res;
};
const quickSort = (arr, left, right) => {
  if (left >= right) {
    return arr;
  }
  let i = left,
    j = right;
  let pivot = arr[Math.floor((left + right) / 2)];
  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      if (i !== j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      i++;
      j--;
    }
  }
  quickSort(arr, left, j);
  quickSort(arr, i, right);
  return arr;
};
// @lc code=end
