/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let b =[]
    for(let i =0; i < accounts.length; i++ ){
        b.push(accounts[i].reduce ((cir,acc)=>cir+acc));
    }
        return Math.max(...b)
        
};