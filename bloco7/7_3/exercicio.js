/*EXERCICIO 1********************************************************************/

//const assert = require('assert');

//function sum(a, b) {
//  if (typeof a !== 'number' || typeof b !== 'number') {
//    throw new Error('parameters must be numbers');
//  }

//  return a + b;
//}

// implemente seus testes aqui

/* Exercício 1 */
/* assert.equal(sum(4,5), 9) */
/* Exercício 2 */
/* assert.equal(sum(0,0), 0) */
/* Exercício 3 */
/* assert.equal(sum(4, "5"), 9) */
/* Exercício 4 */
/* assert.throws(() => { division(4, "5"); }, `Error: parameters must be numbers`); */
//assert.fail(sum(4, "5"), 9)

/*EXERCICIO 2**********************************************************************/

/* const assert = require('assert');

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

assert.equal(expected, 2)
assert.equal(myIndexOf([1, 2, 3, 4], 5), -1) */


/*EXERCICIO 3************************************************************************/


/* const assert = require('assert');

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

// implemente seus testes aqui
const expected = mySum([1, 2, 3, 4])

assert.equal(expected, 10)

const expected = mySum([1, -2, -3, -4]);

assert.equal(expected); */


/*EXERCICIO 4************************************************************************/
/* 
const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  console.log(arr)
  console.log(newArr)
  return newArr;
} */

// implemente seus testes aqui


/* const expected = myRemove([1, 2, 3, 4], 4) */
/* assert.deepEqual(expected, [ 1, 2, 3 ]) */
/* assert.deepEqual(expected, [1, 2, 3, 4], "Não retornará isto") */

/* const expected = myRemove([1, 2, 3, 4], 5)
assert.deepEqual(expected, [ 1, 2, 3, 4]) */

/*EXERCICIO 5************************************************************************/

/* const assert = require('assert');

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
 */
// implemente seus testes aqui
/* const actual = myRemoveWithoutCopy([1, 2, 3, 4], 3)
assert.deepEqual(actual, [1, 2, 4])
assert.notDeepEqual(actual, [1, 2, 3, 4]) */
/* const actual = myRemoveWithoutCopy([23, 24, 25, 28], 27);
assert.deepEqual(actual, [23, 24, 25, 28]); */
/* const actual = myRemoveWithoutCopy([1, 2, 3, 4], 5)
assert.deepEqual(actual, [1, 2, 3, 4]) */

/*EXERCICIO 6************************************************************************/

/* const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
} */

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

/*EXERCICIO 7************************************************************************/

/* const assert = require('assert');

const thereIs = '';

// implemente seus testes aqui
assert.equal(typeof(thereIs), 'string') */

/*EXERCICIO 8************************************************************************/

/* const assert = require('assert');

function thereIs() {}

// implemente seus testes aqui
assert.equal(typeof(thereIs), 'function'); */

/*EXERCICIO 9************************************************************************/

/* const assert = require('assert');

function change(param) {
  return !param;
}
console.log(change(false)) */
// implemente seus testes aqui
/* const expected = change(false);
assert.ok(expected === false, "Errado") */

/*EXERCICIO 10************************************************************************/

/* const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
const expected = obj3
assert.deepEqual(obj3, obj2, "Os objetos não são iguais") */


/*EXERCICIO 11************************************************************************/

/* 
const assert = require('assert');

function isAbove(num1, num2) {
  return num1 > num2;
}

// implemente seus testes aqui
const expected = isAbove(32, 18);
assert.equal() */