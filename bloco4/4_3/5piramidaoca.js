let n ;
let linha='';
let espaco='';
n=7
let direito=''
//TOPOOOOOOOOOOOOOOOOOOOO
for (k = (n/2-1); k <= n-(n/2+0.5); k++) {
  let linha= '';
  //ESPAÇOS EM BRANCO
  for ( let i = n-(k+2); i >= 0; i--) {
    linha += ' ';

  }

  linha += '*';

  

console.log(linha);

}
//MEIOOOOOOOOOOOOOOOOOOOOOOOOOOOO
for (k = (n/2+0.5); k <= n-2; k++) {
    let linha= '';
    //ESPAÇOS EM BRANCO
    for ( let i = n-(k+2); i >= 0; i--) {
      linha += ' ';

    }
    linha += '*';
    
    for (i=-k+(n+(n/2+0.5)) ; i <= n; i++){
      direito+=' ';
    }
    

console.log(linha + direito + '*');


}
let base = []
for(m = 0; m < n ; m++) {
  base += '*'
}
console.log(base);