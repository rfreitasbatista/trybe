const assert = require('assert');
// escreva a função wordLengths para passar nos testes abaixo:
function wordLengths(arr) {
 let lengthArr = [];
 for ( i = 0; i < arr.length ; i += 1) {
   lengthArr.push(arr[i].length)
 }
 return lengthArr
}
//
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);
