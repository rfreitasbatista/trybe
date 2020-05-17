

function seRepete(arr) {
  let objeto = {}

  for (i = 0 ; i < arr.length ; i += 1) {
      if (arr[i] === i) {
        objeto[arr[i]] += 1
      } else {
        objeto[arr[i]] = 1
      }
    }
  let maisSeRepete = 0
  let quantasVezes = 0
  for (i in objeto) {
    if(objeto[i] > quantasVezes) {
      maisSeRepete = i
      quantasVezes = objeto[i]
    }
  }
  return maisSeRepete
}
seRepete([2, 3, 4, 5, 8, 5, 3, 5])