/*
 * @Author: ylyu
 * @Date: 2022-06-22 09:13:03
 * @LastEditors: ylyu
 * @LastEditTime: 2022-07-06 14:05:33
 * @Description:
 */
// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1：
// 输入：strs = ["flower","flow","flight"]
// 输出："fl"

// 示例 2：
// 输入：strs = ["dog","racecar","car"]
// 输出：""
// 解释：输入不存在公共前缀。
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs || !strs.length) {
    return ''
  }

  for (let i = 0; i < strs[0].length; i++) {
    let temp = strs[0].charAt(i)
    for (let j = 1; j < strs.length; j++) {
      if (i === strs[j].length || strs[j].charAt(i) !== temp) {
        return strs[0].substring(0, i)
      }
    }
  }
  return strs[0]
}

console.log('===', longestCommonPrefix(['dog', 'fisher', 'car']))
