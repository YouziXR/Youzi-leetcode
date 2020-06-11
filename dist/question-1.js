"use strict";
/*
 * @Description: 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 * @Author: youzi
 * @Date: 2020-06-08 15:20:45
 * @LastEditors: youzi
 * @LastEditTime: 2020-06-09 10:46:30
 */
Object.defineProperty(exports, "__esModule", { value: true });
const findSum = (nums, target) => {
    let res = new Map();
    for (const idx in nums) {
        let tmpVal = nums[idx];
        let tmpGoal = target - tmpVal;
        if (res.has(tmpVal)) {
            return [res.get(tmpVal), Number.parseInt(idx)];
        }
        res.set(tmpGoal, Number.parseInt(idx));
    }
    return null;
};
exports.default = findSum;
