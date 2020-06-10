const assert = require('assert');
// escreva a função addAllnumbers para passar nos testes abaixo:
function addAllnumbers (arr) {
  let sumOfAll = 0;
  for ( i = 0 ; i < arr.length ; i += 1) {
    sumOfAll += arr[i];
  }
  return sumOfAll;
}
//
const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);
