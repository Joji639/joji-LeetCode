/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let count=0;
    let count1=0;
    let max1=0;
    let max2=0;
    let vowels=["a","e","i","o","u"]
    let sp=s.split("")
  for(let i =0; i<sp.length; i++){
      for(let j =0; j<sp.length;j++){
     if(vowels.includes(s[i])){
       if(sp[i]===sp[j])  {
           count++
       }
     }else{
         if(s[i]===s[j]){
             count1++
         }
     }
  }
  if(max1<count){
      max1=count;
  }
  if(max2<count1){
      max2=count1;
  }
  count=0
  count1=0
  }
  return max1+max2
};
console.log(maxFreqSum("successes"))

