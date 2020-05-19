function strCount(str, letter){  
  let contador = 0
  let verificador = letter[0]
  
   for (let i = 0 ; i < str.length ; i += 1) {
   
    let verificado = str[i]
     if(verificado === verificador ) {
     contador ++;
     }
     }
 
   return contador;
 }

 console.log(strCount("Hello", "ll"))