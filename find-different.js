/*
 * @Author: ylyu
 * @Date: 2021-12-06 16:25:28
 * @LastEditors: ylyu
 * @LastEditTime: 2021-12-06 16:40:21
 * @Description: 找不同
 */
/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const tArr = t.split('')
  const sArr = s.split('')
  const temp = tArr.filter((item) => sArr.indexOf(item) === -1)
  return Array.from(temp)[0]
}
// @lc code=end
