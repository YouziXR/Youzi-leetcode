/*
 * @lc app=leetcode.cn id=17 lang=javascript
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
  if (digits.length === 0) {
    return res;
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
// @lc code=end
