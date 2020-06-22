/*
 * app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s: string): number {
  if (s.length <= 2) {
    if (s === '()') {
      return 2;
    }
    return 0;
  }
  let res: number = 0;
  let dp: number[] = [];
  let sArr: string[] = s.split('');
  for (let i = 0; i < sArr.length; i++) {
    const c = sArr[i];
    if (c === '(') {
      dp[i] = 0;
    } else {
      if (sArr[i - 1] === '(') {
        dp[i] = dp[i - 2] ? dp[i - 2] + 2 : 2;
      } else {
        let preIdx: number = i - dp[i - 1] - 1;
        if (sArr[preIdx] === '(') {
          dp[i] = dp[i - 1] + 2 + (dp[preIdx - 1] ? dp[preIdx - 1] : 0);
        } else {
          dp[i] = 0;
        }
      }
    }
    res = Math.max(res, dp[i]);
  }
  return res;
};
console.warn(longestValidParentheses(')()())'));

// @lc code=end
