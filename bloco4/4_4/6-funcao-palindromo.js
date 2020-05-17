


function verificaPalindrome(palavra) {
  
  let inversa=[];
  for (i = palavra.length - 1 ; i >= 0  ; i--) {
    inversa += palavra[i];
  }

  if (inversa === palavra){
    console.log(true);
  } else {
    console.log(false);
  }
}

verificaPalindrome("ovo")


