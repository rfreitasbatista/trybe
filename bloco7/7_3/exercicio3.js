/*EXERCICIO 3************************************************************************/


const assert = require('assert');

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

// implemente seus testes aqui
//const expected = mySum([1, 2, 3, 4])

//assert.equal(expected, 10)

//const expected = mySum([1, -2, -3, -4]);

//assert.equal(expected); 


module.exports = mySum