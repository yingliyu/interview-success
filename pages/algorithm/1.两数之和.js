/*
 * @Author: ylyu
 * @Date: 2022-06-21 13:21:18
 * @LastEditors: ylyu
 * @LastEditTime: 2022-07-06 16:01:34
 * @Description:
 */
/*
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

 

示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
示例 2：

输入：nums = [3,2,4], target = 6
输出：[1,2]
示例 3：

输入：nums = [3,3], target = 6
输出：[0,1]
 

提示：

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
只会存在一个有效答案
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
