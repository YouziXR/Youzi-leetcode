"use strict";
/*
 * app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */
// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
/* var convert = function (s: string, numRows: number): string {
  if (numRows < 2 || numRows >= s.length) {
    return s;
  }
  let res = '';
  let sArr: string[] = s.split('');
  const maxSpan: number = 2 * (numRows - 1);
  for (let i = 0; i < numRows; i++) {
    // const c = sArr[i];
    let span1: number = i !== numRows - 1 ? 2 * (numRows - 1 - i) : maxSpan;
    let span2: number = span1 === maxSpan ? maxSpan : maxSpan - span1;
    for (let j: number = i, flag: boolean = true; j < sArr.length; ) {
      const c: string = sArr[j];
      res += c;
      j = j + (flag ? span1 : span2);
      flag = !flag;
    }
  }
  return res;
}; */
var convert = function (s, numRows) {
    if (numRows < 2 || numRows >= s.length) {
        return s;
    }
    let res = '';
    let s2DArr = [];
    let sArr = s.split('');
    let row = 0, flag = 1;
    for (let i = 0; i < sArr.length; i++) {
        const c = sArr[i];
        if (!s2DArr[row]) {
            s2DArr[row] = [];
        }
        s2DArr[row].push(c);
        row += flag;
        if (row === 0 || row === numRows - 1) {
            flag = -flag;
        }
    }
    for (const si of s2DArr) {
        res += si.join('');
    }
    return res;
};
console.warn(convert('LEETCODEISHIRING', 3));
// @lc code=end
