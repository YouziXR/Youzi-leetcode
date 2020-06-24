"use strict";
/*
 * app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */
// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let tmp = new Map();
    let a = 'a'.charCodeAt(0);
    let count = 0;
    let res = [];
    for (let i = 2; i < 10; i++) {
        let tmpArr = [];
        let span = i === 7 || i === 9 ? 4 : 3;
        for (let j = 0; j < span; j++) {
            tmpArr.push(String.fromCharCode(a + count));
            count++;
        }
        tmp.set(i.toString(), tmpArr);
    }
    return combine(res, digits, tmp, '');
};
/**
 * @desc: 合并字符串的函数
 * @param {string[]} res 最终结果数组
 * @param {string} s 输入的数字字符串'2345'
 * @param {Map} digitMap 每个数字对应的字符数组
 * @param {string} letter 当前处理的拼接字符串
 * @param {number} length 初始s的长度
 * @return {string[]} 结果数组
 * @author: youzi
 */
const combine = (res, s, digitMap, letter) => {
    // 当前输入的字符串为空时，直接返回结果数组
    if (s.length === 0) {
        res.push(letter);
        return res;
    }
    // 取出输入字符串的第一个数字
    let d = s.slice(0, 1);
    // 取得数字对应的字母数组
    let digit = digitMap.get(d);
    for (const c of digit) {
        combine(res, s.slice(1), digitMap, letter + c);
    }
    return res;
};
/* var letterCombinations = function (digits: string): string[] {
  let tmp: Map<string, string[]> = new Map();
  let a: number = 'a'.charCodeAt(0);
  let count = 0;
  let res: string[] = [];
  for (let i = 2; i < 10; i++) {
    let tmpArr: string[] = [];
    let span: number = i === 7 || i === 9 ? 4 : 3;
    for (let j = 0; j < span; j++) {
      tmpArr.push(String.fromCharCode(a + count));
      count++;
    }
    tmp.set(i.toString(), tmpArr);
  }
  for (const d of digits) {
    res = combine(res, tmp.get(d) as string[]);
  }
  return res;
}; */
/**
 * @desc:拼接函数，遍历结果函数，内部再遍历当前数字对应的字母表
 * @param {string[]} res 已经部分拼接好的结果数组
 * @param {string[]} digit 数字对应的字母表数组
 * @return {string[]}: 新的拼接结果数组
 * @author: youzi
 * 每次传入的res都应该是部分拼接完成的结果，比如传入'23'，初始res为空，所以直接返回的是2对应的字母表['a','b','c']，接下来传入的res就是上一次遍历的结果，digit就是3对应的字母表
 */
/* const combine = (res: string[], digit: string[]): string[] => {
  if (res.length === 0) {
    return digit;
  }
  let tmpRes: string[] = [];
  for (const i of res) {
    for (const j of digit) {
      tmpRes.push(i + j);
    }
  }
  return tmpRes;
}; */
console.warn(letterCombinations('23'));
// @lc code=end
