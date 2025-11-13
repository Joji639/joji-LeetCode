/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let min=0;
    for(let i =0; i<nums.length; i++){
        min ^=nums[i]
    }
    return min
};