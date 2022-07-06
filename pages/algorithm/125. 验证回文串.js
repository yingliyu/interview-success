/*
 * @Author: ylyu
 * @Date: 2022-07-04 14:52:50
 * @LastEditors: ylyu
 * @LastEditTime: 2022-07-06 14:58:58
 * @Description:
 */
/*
给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

 

示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
解释："amanaplanacanalpanama" 是回文串
示例 2:

输入: "race a car"
输出: false
解释："raceacar" 不是回文串

*/

var isPalindrome = function (s) {
  // if (!s) return false
  // const res = s.replace(/[^\dA-Za-z]/gi, '').toLowerCase()
  // if (res.length % 2 === 0) {
  //   const temp1 = res.slice(res.length / 2)
  //   return res.slice(0, res.length / 2) === temp1.split('').reverse().join('')
  // } else {
  //   const temp = res.slice((res.length - 1) / 2 + 1)
  //   return (
  //     res.slice(0, (res.length - 1) / 2) === temp.split('').reverse().join('')
  //   )
  // }
  if (!s) return false
  const res = s.replace(/[^\dA-Za-z]/gi, '').toLowerCase()
  for (let i = 0; i < res.length; i++) {
    if (res[i] !== res[res.length - 1 - i]) {
      return false
    }
  }
  return true
}

console.log(isPalindrome('A man, a plan, a anal: Panama'))
