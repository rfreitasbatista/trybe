

function fimDaString (word, ending) {

  let fim = false
  for( i = 1; i <= ending.length ; i++) {

    if(word[word.length-i] === ending[ending.length -i]) {
      fim = true;
    } else { 
      fim = false;
    }
  }  
return fim
      
}
fimDaString("arrombado", "dmbado")