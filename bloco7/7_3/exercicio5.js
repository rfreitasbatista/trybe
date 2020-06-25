/*EXERCICIO 5************************************************************************/

const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}
 
// implemente seus testes aqui
/* const actual = myRemoveWithoutCopy([1, 2, 3, 4], 3)
assert.deepEqual(actual, [1, 2, 4])
assert.notDeepEqual(actual, [1, 2, 3, 4]) */
/* const actual = myRemoveWithoutCopy([23, 24, 25, 28], 27);
assert.deepEqual(actual, [23, 24, 25, 28]); */
/* const actual = myRemoveWithoutCopy([1, 2, 3, 4], 5)
assert.deepEqual(actual, [1, 2, 3, 4]) */

module.exports = myRemoveWithoutCopy