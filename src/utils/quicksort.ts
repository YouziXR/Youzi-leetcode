/*
 * @Description: 工具函数，快速排序
 * @Author: youzi
 * @Date: 2020-06-16 11:40:43
 * @LastEditors: youzi
 * @LastEditTime: 2020-06-23 15:21:50
 */

/* const quickSort = (arr: number[]) => {
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
}; */
// console.log(quickSort([72, 6, 57, 88, 60, 42, 83, 73, 48, 85]));
const quickSort = (arr: number[]) => {
  const sort = (array: number[], left: number, right: number) => {
    if (left >= right) {
      return;
    }
    let l = left,
      r = right;
    let pivot: number = array[Math.floor((left + right) / 2)];
    while (left <= right) {
      while (pivot < array[right]) right--;
      while (pivot > array[left]) left++;
      if (left <= right) {
        if (left !== right) {
          [array[left], array[right]] = [array[right], array[left]];
        }
        left++;
        right--;
      }
    }
    if (l < right) {
      sort(arr, l, right);
    }
    if (left < r) {
      sort(arr, left, r);
    }
  };
  sort(arr, 0, arr.length - 1);
  return arr;
};
console.log(
  quickSort([
    -16,
    -2,
    17,
    -16,
    3,
    -7,
    -13,
    20,
    -4,
    12,
    5,
    13,
    -7,
    0,
    5,
    4,
    -17,
    -16,
    9,
    1,
    8,
    -6,
    0,
    -8,
    16,
    10,
    -6,
    9,
    -4,
    12,
    16,
    5,
    19,
    2,
    -9,
    -17,
    -8,
    -17,
    7,
    -10,
    2,
    20,
    -18,
    -20,
    -14,
    -6,
    6,
    17,
    -10,
    -8,
    18,
    -15,
    7,
    -9,
    13,
    13,
    -13,
    3,
    18,
    10,
    12,
    16,
    -6,
    -19,
    -6,
    -13,
    8,
    -5,
    16,
    5,
    8,
    -3,
    -9,
    -9,
    -5,
    14,
    14,
    -13,
    -18,
    13,
    15,
    -3,
    9,
    14,
    18,
    -14,
    -14,
    1,
    20,
    -4,
    -6,
    0,
    3,
    15,
    20,
    20,
    9,
    13,
    -8,
    -1,
    -2,
    6
  ])
);
export { quickSort };

/**
 * @desc: 冒泡排序
 * @param {number[]} nums
 * @return {number[]}
 * @author: youzi
 */
const bubbleSort = (nums: number[]): number[] => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
  return nums;
};
export { bubbleSort };
// console.log(bubbleSort([-20, -17, -19, -18, -18, -17]));

/**
 * @desc: 插排
 *  @param {number[]} nums
 * @return {number[]}
 * @author: youzi
 */
const insertSort = (nums: number[]): number[] => {
  for (let i = 1; i < nums.length; i++) {
    let t = nums[i];
    let j = i - 1;
    for (; j >= 0 && nums[j] > nums[i]; j--) {
      nums[j + 1] = nums[j];
    }
    nums[j + 1] = t;
  }
  return nums;
};
export { insertSort };
// console.log(insertSort([-20, -17, -19, -18, -18, -17]));
