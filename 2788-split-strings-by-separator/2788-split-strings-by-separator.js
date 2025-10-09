/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    let a =[]
    for(let i =0; i<words.length; i++){
        let b =words[i].split(separator)
        for(let j=0;j<b.length;j++)
        {
            if(b[j].trim())
            a.push(b[j])
        }
        
    }
    return a
};