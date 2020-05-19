var moveZeros = function (arr) {

let final = arr
let arrayFinal= []
let contador = 0
 for (i = 0; i < final.length ; i++) {
   let numero = final[i]
   if (final[i]!==0) {
     arrayFinal.push(final[i])
    } else {
      contador += 1
    }
  }
  for (j = 0 ; j < contador ; j++) {
    arrayFinal.push(0)
  }

  return(arrayFinal);
}
moveZeros([1,2,0,1,0,1,0,3,0,1])
