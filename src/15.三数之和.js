/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  quickSort(nums);
  let res = [];
  let map = new Map();
  for (const el of nums) {
    if (!map.has(el)) {
      map.set(el, 1);
    } else {
      map.set(el, map.get(el) + 1);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    const e1 = nums[i];
    if (i !== 0 && e1 === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length; j++) {
      const e2 = nums[j];
      if (j !== i + 1 && e2 === nums[j - 1]) continue;
      let tmp = -e1 - e2;
      if (map.has(tmp) && tmp >= e2) {
        let r = map.get(tmp);
        if (e1 === 0 && e2 === 0 && r < 3) {
          continue;
        }
        if (e2 === tmp && r < 2) {
          continue;
        }
        let arr = [e1, e2, tmp];
        res.push(arr);
      }
    }
  }
  return res;
};
const quickSort = arr => {
  const sort = (array, left, right) => {
    if (left >= right) {
      return;
    }
    let l = left,
      r = right;
    let pivot = array[left];
    while (left < right) {
      while (pivot <= array[right] && left < right) right--;
      if (left < right) {
        array[left] = array[right];
        left++;
      }
      while (pivot > array[left] && left < right) left++;
      if (left < right) {
        array[right] = array[left];
        right--;
      }
    }
    array[left] = pivot;
    sort(array, l, left - 1);
    sort(array, left + 1, r);
  };
  sort(arr, 0, arr.length - 1);
  return arr;
};
// @lc code=end
