const reverseInt = (n) =>
 (n < 0) ? parseInt((n*(-1)).toString().split('').reverse().join(''))*(-1) : parseInt(n.toString().split('').reverse().join(''));

console.log(reverseInt(-456))
module.exports = reverseInt;