/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
 let mySet = new Set(nums)
 return mySet.size !== nums.length
};