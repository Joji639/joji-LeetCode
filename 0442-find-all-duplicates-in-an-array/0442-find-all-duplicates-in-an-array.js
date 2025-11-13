/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDuplicates = function(nums) {
//     let set1 = new Set()
//     let a = []
//     for(let i =0; i<nums.length; i++){
//         if(set1.has(nums[i])){
//             a.push(nums[i])
//         }else{
//             set1.add(nums[i])
//         }
//     }
// return a
// };
var findDuplicates = function(nums) {
let freq=new Object()
let result =[];
for (let i =0; i<nums.length; i++){
    freq[nums[i]]= (freq[nums[i]] || 0) +1
}
 for ( let key in freq){
    if(freq[key]>1){
        result.push(Number(key))
    }
 }

return result

};