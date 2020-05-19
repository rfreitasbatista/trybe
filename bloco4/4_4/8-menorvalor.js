


function maiorValor(arr) {
  let lower = arr[0]
  let index = 0
  for (var i = 0 ; i < arr.length ; i += 1 )
    
    if ( arr[i] <= lower) {
      lower = arr[i]
      index = arr.indexOf(lower)
    }
  console.log(index);
  }


maiorValor([23 , 33, 6, -7, 10, 1, -3])


