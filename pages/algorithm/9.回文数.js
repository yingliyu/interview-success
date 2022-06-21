// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

// 例如，121 是回文，而 123 不是。
//

// 示例 1：

// 输入：x = 121
// 输出：true
// 示例 2：

// 输入：x = -121
// 输出：false
// 解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
// 示例 3：

// 输入：x = 10
// 输出：false
// 解释：从右向左读, 为 01 。因此它不是一个回文数。

const reverseNum = (val) => {
  return Number(val.toString().split('').reverse().join(''))
}
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (n) {
  const x = n.toString()
  let result = false
  const len = x.length
  let centerIndex = 0
  for (let i = 0; i < x.length; i++) {
    if (len % 2 === 0) {
      centerIndex = len / 2
      const before = x.slice(0, centerIndex - 1)
      const after = x.slice(centerIndex + 1)
      if (Number(before) === reverseNum(after)) {
        result = true
      }
    } else {
      centerIndex = (len + 1) / 2
      const temp = x[centerIndex - 1]
      const arr = x.split(temp)
      if (Number(arr[0]) === reverseNum(arr[1])) {
        result = true
      }
    }
  }
  return result
}
console.log(isPalindrome(123321))
