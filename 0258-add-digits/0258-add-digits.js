/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let count=0;
    let b =String(num).split("")
    for(let i =0; i<b.length;i++){
        count+=Number(b[i])
    }
    if(count<=9){
    return count
    }else{
        num = count
         return addDigits(num)
    }
};