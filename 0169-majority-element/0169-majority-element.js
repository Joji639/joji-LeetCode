/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count=0;
    let n =nums.length;
    let max=0;
    let majority=0;
    for(let i =0; i<nums.length; i++){
        for(let j =i; j<nums.length; j++)
        {
            if(nums[i]===nums[j])
              count++
        }
        max=count;
            if(max>n/2 ){
            majority=nums[i]
            }
        count=0;
    }
    return majority
   
};