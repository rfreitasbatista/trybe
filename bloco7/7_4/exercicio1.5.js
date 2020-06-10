const greetPeople = (people) => {
  let arr = [];
  for (index in people) {
    let greeting = 'Hello ';
    greeting += people[index];
    arr.push(greeting)
  }
  return arr;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
const assert = require("assert");

assert.equal(typeof(greetPeople), 'function');
assert.deepEqual(greetPeople(parameter), result);
/*
  Use a variável parameter como parâmetro da função acima, escreva testes
  para verificar se a mesma está retornando a como se vê na variável result
  e, caso não esteja, altere o código para que ele passe nos testes.
  Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo
  a função aos poucos:
*/
