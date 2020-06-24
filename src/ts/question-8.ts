/*
 * app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str: string): number {
  const MaxSafeInt: number = Math.pow(2, 31) - 1;
  const MinSafeInt: number = -Math.pow(2, 31);
  // let sArr: string[] = str.split('');
  let res: string = '';
  let regFirstChar: RegExp = /\+|\-|\d/;
  let regRestChar: RegExp = /\d/;
  for (const c of str) {
    if (res.length === 0) {
      if (c === ' ') {
        continue;
      }
      if (regFirstChar.test(c)) {
        res += c;
      } else {
        break;
      }
    } else {
      if (regRestChar.test(c)) {
        res += c;
      } else {
        break;
      }
    }
  }
  let r = Number.parseInt(res);
  if (Number.isNaN(r)) {
    return 0;
  }
  if (r > MaxSafeInt) {
    return MaxSafeInt;
  }
  if (r < MinSafeInt) {
    return MinSafeInt;
  }
  return r;
};
console.warn(myAtoi("-91283472332"));

// @lc code=end
