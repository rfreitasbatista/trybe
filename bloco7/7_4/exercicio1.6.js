const removeVowels = (word) => {
 
  let results = '';
  let contador = 1
  for (let i = 0; i < word.length; i += 1) {
    if (
      word[i] === 'a' ||
      word[i] === 'o' ||
      word[i] === 'i' ||
      word[i] === 'e' ||
      word[i] === 'u'
    ) {
      results += contador;
      contador += 1;
    } else {
      results += word[i];
    }
  }
  return results;
};


const parameter = 'Dayane';
const result = 'D1y2n3';
const assert = require("assert")

assert.equal(typeof(removeVowels), 'function');
assert.strictEqual(removeVowels(parameter), result)


/*
  Use a variável parameter como parâmetro da função acima, escreva testes
  para verificar se a mesma está retornando a como se vê na variável result
  e, caso não esteja, altere o código para que ele passe nos testes.
  Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo
  a função aos poucos:
*/
