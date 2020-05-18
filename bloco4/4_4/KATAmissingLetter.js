function findMissingLetter(array){

   let alphabet = { a:0, b:0, c:0, d:0 , e:0 , f:0 , g:0 , h:0 , i:0 , j:0 , k:0, l:0 ,m:0 , n:0 , o:0 , p:0 , q:0 , r:0 , s:0 , t:0 , w:0 , u:0 , v:0 , y:0 , z:0}
   let contador = 0
   let answer = []
  for (i = 0; i<array.length ; i += 1) {
    console.log(array[i])
    if (array[i] in alphabet) {
      alphabet[array[i]] += 1
    }  else {
      answer.push(array[i])
    }
  }
  
  for (j = 0; j < alphabet.length ; j++) {
     console.log[alphabet[j]]
    if(alphabet[j] ===1 && alphabet[j+1]===0 && alfabet [j+2]===1) {
      console.log("deu certo")
    }
    
    
  }

}

console.log(findMissingLetter(['a','b','c','d','f']))