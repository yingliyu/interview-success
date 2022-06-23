/*
 * @Author: ylyu
 * @Date: 2022-06-22 09:13:03
 * @LastEditors: ylyu
 * @LastEditTime: 2022-06-23 14:35:52
 * @Description:
 */
// 编写一个函数来查找字符串数组中的最长公共后缀。
// 如果不存在公共后缀，返回空字符串 ""。

// 示例 1：
// 输入：strs = ["flower","fler","flighter"]
// 输出："fl"

// 示例 2：
// 输入：strs = ["longest","shortest","minin"]
// 输出：""
// 解释：输入不存在公共后缀。
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonSuffix = function (strs) {
  if (!strs || !strs.length) {
    return ''
  }

  for (let i = strs[0].length - 1; i >= 0; i--) {
    let temp = strs[0].charAt(i)
    for (let j = 1; j < strs.length; j++) {
      let index = i - strs[0].length + 1
      console.log('index=', index, strs[j].length - index)
      if (strs[j].charAt(strs[j].length - 1 - index) !== temp) {
        console.log(strs[j].length - 1 - index)

        return strs[0].slice(-2, -1)
      }
    }
  }
  return strs[0]
}

console.log('===', longestCommonSuffix(['flower', 'fler', 'flighter']))
