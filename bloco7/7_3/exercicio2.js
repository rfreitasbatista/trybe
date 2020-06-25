/*EXERCICIO 2**********************************************************************/

const assert = require('assert');

function myIndexOf(arr, item) {
  let searchedIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (item === arr[i]) {
      searchedIndex = i;
    }
  }
  return searchedIndex;
}

// implemente seus testes aqui
const expected = myIndexOf([1, 2, 3, 4], 3) 

//assert.equal(expected, 2)
//assert.equal(myIndexOf([1, 2, 3, 4], 5), -1)

module.exports = myIndexOf