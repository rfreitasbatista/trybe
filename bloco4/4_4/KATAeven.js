function iqTest(numbers){

let numeros = numbers.split(" ")
let even = [];
let odd = [];

for( i = 0; i < numeros.length ; i++) {

  if ( numeros[i] % 2 === 0) {
    even.push(i)
  } else {
    odd.push(i)
  }
}


if ( even.length > odd.length) {
  odd = odd[0]+1
  return odd
} else {
  even = even[0]+1
  return even
}

}

console.log(iqTest("2 4 7 8 10"))