/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
   let c = order.filter((num) => friends.includes(num))
   return c;
};