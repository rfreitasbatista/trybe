let n ;
let linha='';
let espaco='';
n=21
let direito=''
//TOPOOOOOOOOOOOOOOOOOOOO
for (k = (n/2-1); k <= n-(n/2+0.5); k++) {
  let linha= '';
  //ESPAÃ‡OS EM BRANCO
  for ( let i = n-(k+2); i >= 0; i--) {
    linha += ' ';

  }

  linha += '*';

  

console.log(linha);

}
//MEIOOOOOOOOOOOOOOOOOOOOOOOOOOOO
for (k = (n/2+0.5); k <= n-2; k++) {
    let linha= '';
    let direito= '';
    let fim='';
    //ESPAÃ‡OS EM BRANCO
    for ( let i = n-(k+2); i >= 0; i--) {
      linha += ' ';

    }
    linha += '*';
    
    for ( let j = (n/2+0.5); j < k; j++){
      direito += ' ';
    }
    
    for ( let d = n-(n/2); d < k-1 ; d++)  {
      fim += ' '
    }
console.log(linha + direito + ' ' + fim + "*");


}
let base = []
for(m = 0; m < n ; m++) {
  base += '*'
}
console.log(base);