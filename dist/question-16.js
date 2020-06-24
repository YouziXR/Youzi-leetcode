"use strict";
/*
 * app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.quickSort = void 0;
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
        let j = i + 1, k = nums.length - 1;
        while (j < k) {
            let r = nums[i] + nums[j] + nums[k];
            if (Math.abs(target - r) < Math.abs(target - res)) {
                res = r;
            }
            if (target - r > 0) {
                j++;
            }
            else if (target - r === 0) {
                return r;
            }
            else {
                k--;
            }
        }
    }
    return res;
};
/**
 * @desc: 快速排序
 * @param {number[]} arr
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 * @author: youzi
 */
const quickSort = (arr, left, right) => {
    if (arr.length === 1 || left >= right) {
        return arr;
    }
    let i = left, j = right;
    let pivot = arr[Math.floor((left + right) / 2)];
    while (i < j) {
        while (i < j && arr[i] < pivot) {
            i++;
        }
        while (i < j && arr[j] > pivot) {
            j--;
        }
        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }
    quickSort(arr, left, i - 1);
    quickSort(arr, i + 1, right);
    return arr;
};
exports.quickSort = quickSort;
// console.warn(quickSort([-1, 2, 1, -4], 0, 3));
// @lc code=end
console.warn(threeSumClosest([
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
], -58));
