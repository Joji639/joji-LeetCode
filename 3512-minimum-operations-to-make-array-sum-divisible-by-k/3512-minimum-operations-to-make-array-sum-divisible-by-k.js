/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


var minOperations = function(nums, k) {
    let a = nums.reduce((acc,cir)=>acc+cir,0)
    if(a%k!==0){
        return 0;
        
    }else{
        return a % k
    }
}