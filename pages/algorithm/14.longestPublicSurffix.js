/*
 * @Author: ylyu
 * @Date: 2022-06-22 09:13:03
 * @LastEditors: ylyu
 * @LastEditTime: 2022-06-24 14:42:31
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

  for (let i = 0; i < strs[0].length; i++) {
    let temp = strs[0].charAt(strs[0].length - 1 - i)

    for (let j = 1; j < strs.length; j++) {
      // 数组的每一项后缀对应的索引值在变
      let index = strs[j].length - 1 - i
      if (strs[j].charAt(index) !== temp && i !== 0) {
        console.log(i, temp, index)

        return strs[0].slice('-' + i)
      }
    }
  }
  return strs[0]
}

console.log('===', longestCommonSuffix(['ro', 'fler', 'flighter']))
