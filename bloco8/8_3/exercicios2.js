const assert = require('assert')

// escreva sum abaixo

const sum = (...a) => {
  let soma = 0
  for(let index of a) {
    soma += index
  }
  return soma;
}

assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)
    
module.exports = sum;