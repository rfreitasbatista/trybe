let n ;

n=11

for (k = 1; k <= n-2; k++) {
    let linha= '';
    //ESPAÇOS EM BRANCO
    for ( let i = n-k; i >= 0; i--) {
      linha += ' ';

    }
    //ASTERISCOS
    for ( let j = 0; j < k; j++){
      linha += '*';
    } 
    
    for ( let j = 1; j < k; j++){
      linha += '*';
    }

console.log(linha);



}