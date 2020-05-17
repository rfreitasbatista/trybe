


function maiorValor(arr) {
  let higher = 0;
  let index = 0;
  for (let i = 0 ; i < arr.length ; i += 1 ) {
    
    if ( arr[i] > higher) {
      higher = arr[i];
      
    }
  }
  for (let j = 0; j < arr.length; j += 1) {
    
    if (higher === arr[j]) {
      index = j;
    } 
  }
  console.log(index);
}

maiorValor([3 , 3, 6, 7, 10, 1, -3])

function maiorValor1(arr) {
  let higher = 0;
  let index = 0;
  for (let i = 0 ; i < arr.length ; i += 1 ) {
    
    if ( arr[i] > higher) {
      higher = arr[i];
      index = arr.indexOf(higher);
    }
  }
  console.log(index);
}

  maiorValor1([3 , 3, 6, 7, 10, 1, 33])
