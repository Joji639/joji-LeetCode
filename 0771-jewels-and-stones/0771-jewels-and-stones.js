/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  let a = jewels.split("") 
  let b = stones.split("")
  let count =0;
  for(let i =0; i<a.length; i++){
    for(let j=0; j<b.length;j++){
        if(a[i]===b[j]){
                count++
        
        }
    }
  }
  return count;
};