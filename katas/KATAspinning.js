function spinWords(string){
let palavraSeparada = string.split(" ");
let fraseArray = []
for( i=0 ; i < palavraSeparada.length ; i++) {

  if ( palavraSeparada[i].length >= 5) {
    let palavraInvertida = palavraSeparada[i];
   fraseArray.push(palavraInvertida.split("").reverse().join(""))
  } else {
   fraseArray.push(palavraSeparada[i]);
  }
}
let fraseFinal = fraseArray.join(" ")
return fraseFinal;



}

spinWords("Rodrigo Frei Batista")