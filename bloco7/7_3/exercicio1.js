/*EXERCICIO 1********************************************************************/

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

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

module.exports = sum