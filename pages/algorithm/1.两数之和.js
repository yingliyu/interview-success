/*
 * @Author: ylyu
 * @Date: 2022-06-21 13:21:18
 * @LastEditors: ylyu
 * @LastEditTime: 2022-06-21 13:59:47
 * @Description:
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  console.time()
  let result = []
  // 1.线性查找： 时间复杂度：O(n^2)
  // 空间复杂度：O(1)
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] === target) {
  //       result = [i, j]
  //       console.timeEnd()
  //       break
  //     }
  //   }
  // }

  // 3：一遍遍历 + 哈希查找
  // 时间复杂度：O(n)
  // 空间复杂度：O(n)
  // 空间换时间
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i]
    if (map.has(target - x)) {
      const index = map.get(target - x)
      console.timeEnd()
      result = [i, index]
    }
    map.set(x, i)
  }
  return result
}

console.log(twoSum([2, 7, 11, 15], 9))
