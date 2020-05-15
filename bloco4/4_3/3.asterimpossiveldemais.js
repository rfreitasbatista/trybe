let n ;
let linha='';
let espaco='';
n=5 

for (k = 1; k <= n; k++) {
    //ESPAÇOS EM BRANCO
    for ( let i = n-k; i >= 0; i--) {
      espaco += ' ';
    }
    //ASTERISCOS
    for ( let j = 0; j < k; j++){
      linha += '*';
    }

console.log(espaco + linha);
espaco = '';
linha = '';


}