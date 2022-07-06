/*
 * @Author: ylyu
 * @Date: 2022-07-04 14:52:50
 * @LastEditors: ylyu
 * @LastEditTime: 2022-07-06 14:50:23
 * @Description:
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
