/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSum = function(nums) {
    let a =0 ;
    for(let i =0; i<nums.length; i++){
        if(i%2==0){
            a+=nums[i]
        }
        else{
            a-=nums[i]
        }
    }
    return a 
};