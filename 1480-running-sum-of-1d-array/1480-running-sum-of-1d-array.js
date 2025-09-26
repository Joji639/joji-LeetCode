/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let result=0
    let array=[]
    for(let i=0;i<nums.length;i++)
    {

        array.push(nums[i]+result)
        result+=nums[i]
    }
    return array
};