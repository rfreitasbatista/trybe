/*EXERCICIO 6************************************************************************/

const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
} 

// implemente seus testes aqui

/* const expected = myFizzBuzz(15);
assert.deepEqual(expected, "fizzbuzz") */
/* const expected = myFizzBuzz(9);
assert.deepEqual(expected, "fizz") */
/* const expected = myFizzBuzz(50);
assert.deepEqual(expected, "buzz") */
/* const expected = myFizzBuzz(7);
assert.deepEqual(expected, 7) */
/* const expected = myFizzBuzz("olá");
assert.deepEqual(expected, false) */

module.exports = myFizzBuzz