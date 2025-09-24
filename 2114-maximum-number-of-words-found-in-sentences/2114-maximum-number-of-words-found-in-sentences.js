/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let count=0;
    let max=0;
  for(let i =0; i < sentences.length; i++){
      let a= sentences[i].split(" ")
     count=a.length
     if(max<count){
         max=count;
     }
     count=0;
  }
 return max;
};