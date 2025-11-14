/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let num=[]
    for(let i =1; i<=nums.length; i++){
        if(!nums.includes(i)){
            num.push(i)
        }
    }
    return num
};