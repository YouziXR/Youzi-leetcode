/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let queue = [];
  let res = '';
  for (const c of s) {
    let idx = queue.indexOf(c);
    if (idx > -1) {
      if (res.length < queue.length) {
        res = queue.join('');
      }
      // queue.delete(c);
      // queue.set(c, 0);
      // pwekww
      queue = queue.slice(idx + 1);
      queue.push(c);
    } else {
      // queue.set(c, 0);
      queue.push(c);
    }
  }
  if (res.length < queue.length) {
    res = queue.join('');
  }
  // console.info(res);
  return res.length;
};
// @lc code=end
