function isValidWalk(walk) {
 
let contador = 0
if (walk.length === 10){
for (let i = 0; i < walk.length ; i += 1 ){

  if ( walk[i] == "n" ) {
    contador += 2
  } else if (walk[i] == "s"){
    contador -= 2
  } else if (walk[i] == "w"){
    contador -= 1
  } else {
    contador += 1
  }
}
 if (contador !== 0) {
   return false
 } else {
   return true
 }
} else {
  return false
}

}






console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))