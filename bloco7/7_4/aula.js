/* const assert = require("assert");

function test (arr) {
  
  for ( i=0 ; i < arr.length ; i += 1) {
    if (arr[i] % 3 === 0 || arr[i] % 5 === 0|| arr[i] % 7 === 0|| arr[i] % 11=== 0 ) {
      return "Negativo"
    }
  }
  return arr
} */

/* assert.deepEqual(test([1, 2, 4, 9]), [1, 2, 4, 9], "Vai toma no cu Anderson") */
/* assert.deepEqual(test([49]), "Negativo") */


function primosEs (n) {
let notPrimos = []

  for ( i = 0 ; i <= n ; i += 1){
  
    
    if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !==0 || i === 2 || i === 3 || i === 5) {
      notPrimos.push(i);
    }
  }
  return notPrimos;
}

console.log(primosEs(100));