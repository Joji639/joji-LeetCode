/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let a =[...nums1,...nums2]
    a.sort((a,b)=>a-b)
    if(a.length%2!==0){
   let b = Math.floor(a.length/2)
    return (a[b])
    }else{
        let c =Math.floor(a.length/2)
        let d =Math.floor(a.length/2)-1
        return (a[c]+a[d])/2
    }
   
};