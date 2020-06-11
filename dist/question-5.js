"use strict";
/*
 * app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */
// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let arr = s.split('');
    let p = [];
    let res = [0, -1];
    for (let i = arr.length - 1; i >= 0; i--) {
        const ci = arr[i];
        p[i] = [];
        for (let j = i; j < arr.length; j++) {
            const cj = arr[j];
            if (ci === cj) {
                if (i === j) {
                    p[i][j] = true;
                }
                else if (j - i === 1) {
                    p[i][j] = true;
                }
                else {
                    p[i][j] = p[i + 1][j - 1];
                }
            }
            else {
                p[i][j] = false;
            }
            if (p[i][j]) {
                res = j - i + 1 > res[1] - res[0] + 1 ? [i, j] : res;
            }
        }
    }
    return arr.slice(res[0], res[1] + 1).join('');
};
console.log(longestPalindrome('cbbd'));
// @lc code=end
