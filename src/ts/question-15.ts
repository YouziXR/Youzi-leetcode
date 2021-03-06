/*
 * app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums: number[]): number[][] {
  quickSort(nums);
  let res: number[][] = [];
  // 双指针
  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];
    if (i > 0 && a === nums[i - 1]) {
      continue;
    }
    let target = -a;
    let k = nums.length - 1;
    for (let j = i + 1; j < nums.length; j++) {
      const b = nums[j];
      if (j !== i + 1 && b === nums[j - 1]) {
        continue;
      }
      while (k > j && b + nums[k] > target) {
        k--;
      }
      if (k === j) {
        break;
      }
      if (b + nums[k] === target) {
        let tmpArr = [];
        tmpArr.push(a, b, nums[k]);
        res.push(tmpArr);
      }
    }
  }
  // hashMap加双循环
  /* let map = new Map<number, number>();
  for (const el of nums) {
    if (!map.has(el)) {
      map.set(el, 1);
    } else {
      map.set(el, (map.get(el) as number) + 1);
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
        let r: number = map.get(tmp) as number;
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
  } */
  return res;
};

const quickSort = (arr: number[]) => {
  const sort = (array: number[], left: number, right: number) => {
    if (left >= right) {
      return;
    }
    let l = left,
      r = right;
    let pivot: number = array[left];
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

console.warn(threeSum([-1, 0, 1, 2, -1, -4]));
export { threeSum };
// @lc code=end
