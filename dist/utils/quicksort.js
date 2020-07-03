"use strict";
/*
 * @Description: 工具函数，快速排序
 * @Author: youzi
 * @Date: 2020-06-16 11:40:43
 * @LastEditors: youzi
 * @LastEditTime: 2020-06-17 10:59:18
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.quickSort = void 0;
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
};
console.log(quickSort([72, 6, 57, 88, 60, 42, 83, 73, 48, 85])); */
const quickSort = (arr) => {
    const sort = (array, left, right) => {
        if (left >= right) {
            return;
        }
        let l = left, r = right;
        let pivot = array[Math.floor((left + right) / 2)];
        while (left < right) {
            while (pivot < array[right] && left < right)
                right--;
            while (pivot > array[left] && left < right)
                left++;
            if (left < right) {
                let tmp = array[left];
                array[left] = array[right];
                array[right] = tmp;
                left++;
                right--;
            }
        }
        // array[left] = pivot;
        if (l < left - 1) {
            sort(array, l, left - 1);
        }
        if (left < r) {
            sort(array, left + 1, r);
        }
    };
    sort(arr, 0, arr.length - 1);
    return arr;
};
exports.quickSort = quickSort;
console.log(quickSort([72, 6, 57, 88, 60, 42, 83, 73, 48, 85]));
